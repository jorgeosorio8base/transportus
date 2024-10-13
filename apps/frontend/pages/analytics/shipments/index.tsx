import { useState, useCallback, useMemo, useEffect } from 'react';
import { useShipmentList, useLoading, useAlert } from '@/src/hooks';
import { ShipmentEntity, ShipmentFilter, ShipmentSort, SortOrder } from '@transportus/core';
import { ActiveShipmentsDashboardComponent } from './ActiveShipmentsDashboard';

export interface ActiveShipmentsDashboardComponentProps {
  headerProps: {
    title: string;
  };
  metricsData: {
    totalActiveShipments: number;
    onTimeDeliveries: number;
    potentialIssues: number;
  };
  mapProps: {
    // Placeholder for future implementation
  };
  tableProps: {
    data: ShipmentEntity[];
    isLoading: boolean;
    onSortChange: (value: ShipmentSort[]) => void;
    onFilterChange: (value: string) => void;
  };
}

export default function ActiveShipmentsDashboardPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{createdAt: SortOrder.Desc}]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {showLoading, hideLoading} = useLoading();
  const {show: showAlert} = useAlert();
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
        {origin: {contains: searchTerm}},
        {destination: {contains: searchTerm}},
        {priority: {contains: searchTerm}}
      ],
    };
  }, [searchTerm]);

  const {data: shipmentsData, isLoading: shipmentsLoading, isError: isShipmentsError} = useShipmentList({
    filter: shipmentFilters,
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
      setShipmentDataState({
        shipments: shipmentsData.items || [],
        count: shipmentsData.count || 0,
      });
    }
  }, [shipmentsData]);

  const totalActiveShipments = shipmentDataState?.count || 0;

  const onTimeDeliveries = useMemo(() => {
    return Math.round((shipmentDataState?.shipments.filter(s => s.priority === 'High').length || 0) / totalActiveShipments * 100);
  }, [shipmentDataState, totalActiveShipments]);

  const potentialIssues = useMemo(() => {
    return shipmentDataState?.shipments.filter(s => s.priority === 'Low').length || 0;
  }, [shipmentDataState]);

  const metricsData = {
    totalActiveShipments,
    onTimeDeliveries,
    potentialIssues,
  };

  const headerProps = {
    title: 'Active Shipments Dashboard',
  };

  const tableProps = {
    data: shipmentDataState?.shipments || [],
    isLoading: shipmentsLoading,
    onSortChange: handleSortOrder,
    onFilterChange: handleSearchTerm,
  };

  return (
    <ActiveShipmentsDashboardComponent
      headerProps={headerProps}
      metricsData={metricsData}
      mapProps={{}}
      tableProps={tableProps}
    />
  );
}

ActiveShipmentsDashboardPresenter.layout = 'AppLayout';
ActiveShipmentsDashboardPresenter.auth = true;