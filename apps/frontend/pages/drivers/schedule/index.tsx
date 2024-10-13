import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useShipmentList } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentSort, ShipmentFilter, SortOrder } from '@transportus/core';
import { DailyScheduleDashboardComponent } from './DailyScheduleDashboard';

export interface DailyScheduleDashboardComponentProps {
  shipmentsDataState: {
    shipments: ShipmentEntity[];
    count: number;
  } | null;
  sortOrder: ShipmentSort[];
  searchTerm: string;
  handleSearchTerm: (value: string) => void;
  handleSortOrder: (value: ShipmentSort[]) => void;
  currentUser: UserEntity | undefined;
  filteredShipments: ShipmentEntity[];
  scheduledStops: {
    time: string;
    type: string;
    client: string;
    address: string;
    status: string;
  }[];
  estimatedCompletionTime: string;
  totalDistance: string;
  numberOfStops: number;
}

export default function DailyScheduleDashboardPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ updatedAt: SortOrder.Desc }]);
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

  const { data: currentUser } = useCurrentUser();

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

  const filteredShipments = useMemo(() => {
    return shipmentsDataState?.shipments.filter((shipment) => {
      const today = new Date();
      const shipmentDate = new Date(shipment.UpdatedAt || '');
      return shipmentDate.toDateString() === today.toDateString();
    }) || [];
  }, [shipmentsDataState]);

  const scheduledStops = useMemo(() => {
    return filteredShipments.map((shipment) => ({
      time: new Date(shipment.UpdatedAt || '').toLocaleTimeString(),
      type: shipment.Origin ? 'Pickup' : 'Delivery',
      client: 'Client Name', // This should be replaced with actual client data when available
      address: shipment.Origin || shipment.Destination || '',
      status: 'Scheduled', // This should be replaced with actual status when available
    }));
  }, [filteredShipments]);

  const estimatedCompletionTime = useMemo(() => {
    if (scheduledStops.length === 0) return 'N/A';
    const lastStop = scheduledStops[scheduledStops.length - 1];
    return lastStop.time;
  }, [scheduledStops]);

  const totalDistance = useMemo(() => {
    // This should be calculated based on the actual route when available
    return `${scheduledStops.length * 10} km`; // Assuming 10km between each stop
  }, [scheduledStops]);

  const numberOfStops = useMemo(() => {
    return scheduledStops.length;
  }, [scheduledStops]);

  return (
    <DailyScheduleDashboardComponent
      shipmentsDataState={shipmentsDataState}
      sortOrder={sortOrder}
      searchTerm={searchTerm}
      handleSearchTerm={handleSearchTerm}
      handleSortOrder={handleSortOrder}
      currentUser={currentUser}
      filteredShipments={filteredShipments}
      scheduledStops={scheduledStops}
      estimatedCompletionTime={estimatedCompletionTime}
      totalDistance={totalDistance}
      numberOfStops={numberOfStops}
    />
  );
}

DailyScheduleDashboardPresenter.layout = 'AppLayout';
DailyScheduleDashboardPresenter.auth = true;