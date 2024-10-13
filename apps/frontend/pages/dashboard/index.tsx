import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList, useCurrentUser } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentFilter, ShipmentSort, SortOrder } from '@transportus/core';
import { DashboardComponent } from './Dashboard';

export interface DashboardComponentProps {
  shipments: ShipmentEntity[];
  shipmentCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: ShipmentSort[];
  onSortOrderChange: (value: ShipmentSort[]) => void;
  keyMetrics: {
    activeShipments: number;
    onTimeDeliveries: number;
    avgDeliveryTime: number;
    customerSatisfaction: number;
  };
  currentUser: UserEntity | null;
  onCreateNewShipment: () => void;
  onUpdatePackageStatus: () => void;
  onSendNotification: () => void;
  onGenerateReport: () => void;
}

export default function DashboardPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [shipmentDataState, setShipmentDataState] = useState<{
    shipments: ShipmentEntity[];
    count: number;
  } | null>({
    shipments: [],
    count: 0,
  });

  const shipmentFilters = useMemo<ShipmentFilter>(() => {
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

  const { data: shipmentData, isLoading: shipmentLoading, isError: isShipmentError } = useShipmentList({
    filter: shipmentFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: ShipmentSort[]) => {
    setSortOrder(value);
  }, []);

  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    if (shipmentLoading) {
      showLoading();
    } else {
      hideLoading();

      if (isShipmentError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the shipment list.',
          severity: 'error',
        });
      }
    }
  }, [shipmentLoading, isShipmentError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (shipmentData) {
      setShipmentDataState({
        shipments: shipmentData.items || [],
        count: shipmentData.count || 0,
      });
    }
  }, [shipmentData]);

  const activeShipments = useMemo(() => {
    return shipmentDataState?.shipments.filter(shipment => shipment.status !== 'Delivered').length || 0;
  }, [shipmentDataState]);

  const onTimeDeliveries = useMemo(() => {
    return shipmentDataState?.shipments.filter(shipment => shipment.status === 'Delivered' && new Date(shipment.deliveredAt) <= new Date(shipment.estimatedDeliveryDate)).length || 0;
  }, [shipmentDataState]);

  const avgDeliveryTime = useMemo(() => {
    const deliveredShipments = shipmentDataState?.shipments.filter(shipment => shipment.status === 'Delivered') || [];
    const totalTime = deliveredShipments.reduce((sum, shipment) => {
      const deliveryTime = new Date(shipment.deliveredAt).getTime() - new Date(shipment.createdAt).getTime();
      return sum + deliveryTime;
    }, 0);
    return deliveredShipments.length > 0 ? totalTime / deliveredShipments.length / (1000 * 60 * 60 * 24) : 0;
  }, [shipmentDataState]);

  const customerSatisfaction = 4.5;

  const keyMetrics = {
    activeShipments,
    onTimeDeliveries,
    avgDeliveryTime,
    customerSatisfaction
  };

  const handleCreateNewShipment = useCallback(() => {
    // Logic for creating a new shipment
  }, []);

  const handleUpdatePackageStatus = useCallback(() => {
    // Logic for updating package status
  }, []);

  const handleSendNotification = useCallback(() => {
    // Logic for sending a notification
  }, []);

  const handleGenerateReport = useCallback(() => {
    // Logic for generating a report
  }, []);

  return (
    <DashboardComponent
      shipments={shipmentDataState?.shipments || []}
      shipmentCount={shipmentDataState?.count || 0}
      isLoading={shipmentLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      sortOrder={sortOrder}
      onSortOrderChange={handleSortOrder}
      keyMetrics={keyMetrics}
      currentUser={currentUser || null}
      onCreateNewShipment={handleCreateNewShipment}
      onUpdatePackageStatus={handleUpdatePackageStatus}
      onSendNotification={handleSendNotification}
      onGenerateReport={handleGenerateReport}
    />
  );
}

DashboardPresenter.layout = 'AppLayout';
DashboardPresenter.auth = true;