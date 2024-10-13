import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList, useCurrentUser } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentFilter, ShipmentSort, SortOrder } from '@transportus/core';
import { ShipmentTrackingDashboardComponent } from './ShipmentTrackingDashboard';

export interface ShipmentTrackingDashboardComponentProps {
  shipmentsDataState: {
    shipments: ShipmentEntity[];
    count: number;
  } | null;
  isLoading: boolean;
  searchTerm: string;
  sortOrder: ShipmentSort[];
  currentUser: UserEntity | null;
  onSearchChange: (value: string) => void;
  onSortChange: (value: ShipmentSort[]) => void;
  onCreateShipment: () => void;
  onContactDriver: () => void;
  onGenerateReport: () => void;
}

export default function ShipmentTrackingDashboardPresenter() {
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
        { destination: { contains: searchTerm } },
        { origin: { contains: searchTerm } },
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

  const { data: currentUser } = useCurrentUser();

  const handleCreateShipment = useCallback(() => {
    // TODO: Implement create shipment functionality
  }, []);

  const handleContactDriver = useCallback(() => {
    // TODO: Implement contact driver functionality
  }, []);

  const handleGenerateReport = useCallback(() => {
    // TODO: Implement generate report functionality
  }, []);

  return (
    <ShipmentTrackingDashboardComponent
      shipmentsDataState={shipmentsDataState}
      isLoading={shipmentsLoading}
      searchTerm={searchTerm}
      sortOrder={sortOrder}
      currentUser={currentUser}
      onSearchChange={handleSearchTerm}
      onSortChange={handleSortOrder}
      onCreateShipment={handleCreateShipment}
      onContactDriver={handleContactDriver}
      onGenerateReport={handleGenerateReport}
    />
  );
}

ShipmentTrackingDashboardPresenter.layout = 'AppLayout';
ShipmentTrackingDashboardPresenter.auth = true;