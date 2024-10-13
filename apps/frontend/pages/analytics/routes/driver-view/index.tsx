import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList, useCurrentUser } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentSort, ShipmentFilter, SortOrder } from '@transportus/core';
import { DriverRouteViewComponent } from './DriverRouteView';

export interface DriverRouteViewComponentProps {
  shipments: ShipmentEntity[];
  shipmentsCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: ShipmentSort[]) => void;
  onMarkAsDelivered: () => void;
  onReportIssue: () => void;
  onContactSupport: () => void;
  currentUser: UserEntity | null;
}

export default function DriverRouteViewPresenter() {
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

  const handleMarkAsDelivered = useCallback(() => {
    showAlert({
      title: 'Success',
      message: 'Shipment marked as delivered.',
      severity: 'success',
    });
  }, [showAlert]);

  const handleReportIssue = useCallback(() => {
    showAlert({
      title: 'Issue Reported',
      message: 'Your issue has been reported to support.',
      severity: 'info',
    });
  }, [showAlert]);

  const handleContactSupport = useCallback(() => {
    showAlert({
      title: 'Support Contact',
      message: 'Connecting you to support...',
      severity: 'info',
    });
  }, [showAlert]);

  return (
    <DriverRouteViewComponent
      shipments={shipmentsDataState?.shipments || []}
      shipmentsCount={shipmentsDataState?.count || 0}
      isLoading={shipmentsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      onSortOrderChange={handleSortOrder}
      onMarkAsDelivered={handleMarkAsDelivered}
      onReportIssue={handleReportIssue}
      onContactSupport={handleContactSupport}
      currentUser={currentUser || null}
    />
  );
}

DriverRouteViewPresenter.layout = 'AppLayout';
DriverRouteViewPresenter.auth = true;