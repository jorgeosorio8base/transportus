import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList, useCreateShipment, useAnalyticList } from '@/src/hooks';
import { ShipmentEntity, ShipmentSort, ShipmentFilter, SortOrder } from '@transportus/core';
import { ShipmentManagementComponent } from './ShipmentManagement';
import { Formik } from 'formik';

export interface ShipmentManagementComponentProps {
  shipments: ShipmentEntity[];
  shipmentsCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: ShipmentSort[];
  onSortOrderChange: (value: ShipmentSort[]) => void;
  onCreateShipment: (values: CreateShipmentFormValues) => Promise<void>;
  isCreatingShipment: boolean;
  shipmentAnalytics: {
    totalActiveShipments: number;
    onTimeDeliveryRate: number;
    averageDeliveryTime: number;
  } | null;
  isAnalyticsLoading: boolean;
}

export interface CreateShipmentFormValues {
  origin: string;
  destination: string;
  priority: string;
  clientId: string;
  driverId: string;
}

const initialValues: CreateShipmentFormValues = {
  origin: '',
  destination: '',
  priority: '',
  clientId: '',
  driverId: ''
};

export default function ShipmentManagementPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [shipmentsDataState, setShipmentsDataState] = useState<{
    shipments: ShipmentEntity[];
    count: number;
  } | null>({
    shipments: [],
    count: 0,
  });

  const shipmentsFilters = useMemo<ShipmentFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      OR: [
        { origin: { contains: searchTerm } },
        { destination: { contains: searchTerm } },
        { priority: { contains: searchTerm } },
      ],
    };
  }, [searchTerm]);

  const { data: shipmentsData, isLoading: shipmentsLoading, isError: isShipmentsError } = useShipmentList({
    filter: shipmentsFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: ShipmentSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (shipmentsLoading) {
      showLoading();
    } else {
      hideLoading();

      if (isShipmentsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the shipments list.',
          severity: 'error',
        });
      }
    }
  }, [shipmentsLoading, isShipmentsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (shipmentsData) {
      setShipmentsDataState({
        shipments: shipmentsData.items || [],
        count: shipmentsData.count || 0,
      });
    }
  }, [shipmentsData]);

  const { mutate: createShipment, isPending: isCreatingShipment } = useCreateShipment();

  const handleCreateShipment = useCallback(
    async (values: CreateShipmentFormValues) => {
      try {
        await createShipment(
          { data: values },
          {
            onSuccess: () => {
              showAlert({
                title: 'Success',
                message: 'Shipment created successfully',
                severity: 'success',
              });
            },
            onError: (error) => {
              showAlert({
                title: 'Error',
                message: 'Failed to create shipment',
                severity: 'error',
              });
            },
          }
        );
      } catch (error) {
        console.error('Error creating shipment:', error);
      }
    },
    [createShipment, showAlert]
  );

  const { data: analyticsData, isLoading: isAnalyticsLoading } = useAnalyticList();

  const shipmentAnalytics = useMemo(() => {
    if (!analyticsData) return null;

    const totalActiveShipments = analyticsData.items.find(
      (item) => item.metricName === 'totalActiveShipments'
    )?.value || 0;
    const onTimeDeliveryRate = analyticsData.items.find(
      (item) => item.metricName === 'onTimeDeliveryRate'
    )?.value || 0;
    const averageDeliveryTime = analyticsData.items.find(
      (item) => item.metricName === 'averageDeliveryTime'
    )?.value || 0;

    return {
      totalActiveShipments: Math.round(totalActiveShipments),
      onTimeDeliveryRate: Number(onTimeDeliveryRate.toFixed(1)),
      averageDeliveryTime: Number(averageDeliveryTime.toFixed(1)),
    };
  }, [analyticsData]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCreateShipment}
    >
      <ShipmentManagementComponent
        shipments={shipmentsDataState?.shipments || []}
        shipmentsCount={shipmentsDataState?.count || 0}
        isLoading={shipmentsLoading}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTerm}
        sortOrder={sortOrder}
        onSortOrderChange={handleSortOrder}
        onCreateShipment={handleCreateShipment}
        isCreatingShipment={isCreatingShipment}
        shipmentAnalytics={shipmentAnalytics}
        isAnalyticsLoading={isAnalyticsLoading}
      />
    </Formik>
  );
}

ShipmentManagementPresenter.layout = 'AppLayout';
ShipmentManagementPresenter.auth = true;