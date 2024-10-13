import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList } from '@/src/hooks';
import { ShipmentEntity, ShipmentFilter, ShipmentSort, SortOrder } from '@transportus/core';
import { DeliveryHistoryDashboardComponent } from './DeliveryHistoryDashboard';

export interface DeliveryHistoryDashboardComponentProps {
  shipments: ShipmentEntity[];
  totalShipments: number;
  onTimeDeliveryRate: string;
  averageDeliveryTime: number;
  shippingTrends: Array<{ date: string; volume: number }>;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortChange: (value: ShipmentSort[]) => void;
  currentSort: ShipmentSort[];
}

export default function DeliveryHistoryDashboardPresenter() {
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

  const { data: shipmentData, isLoading: shipmentsLoading, isError: isShipmentsError } = useShipmentList({
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
    if (shipmentData) {
      setShipmentDataState({
        shipments: shipmentData.items || [],
        count: shipmentData.count || 0,
      });
    }
  }, [shipmentData]);

  const calculateMetrics = useCallback(() => {
    const totalShipments = shipmentDataState?.count || 0;
    const onTimeDeliveries = shipmentDataState?.shipments.filter(shipment => {
      // Add logic to determine if a shipment is on time
      // This is a placeholder and should be replaced with actual logic
      return true;
    }).length || 0;
    const onTimeRate = totalShipments > 0 ? (onTimeDeliveries / totalShipments) * 100 : 0;

    // Calculate average delivery time (placeholder logic)
    const averageDeliveryTime = 3; // Replace with actual calculation

    return {
      totalShipments,
      onTimeDeliveryRate: onTimeRate.toFixed(2),
      averageDeliveryTime,
    };
  }, [shipmentDataState]);

  const metrics = useMemo(() => calculateMetrics(), [calculateMetrics]);

  const getShippingTrends = useCallback(() => {
    // This is a placeholder. In a real scenario, you would process the shipmentDataState
    // to generate trend data over time.
    return [
      { date: '2023-01-01', volume: 100 },
      { date: '2023-02-01', volume: 120 },
      { date: '2023-03-01', volume: 110 },
      { date: '2023-04-01', volume: 130 },
      { date: '2023-05-01', volume: 150 },
    ];
  }, []);

  const shippingTrends = useMemo(() => getShippingTrends(), [getShippingTrends]);

  return (
    <DeliveryHistoryDashboardComponent
      shipments={shipmentDataState?.shipments || []}
      totalShipments={metrics.totalShipments}
      onTimeDeliveryRate={metrics.onTimeDeliveryRate}
      averageDeliveryTime={metrics.averageDeliveryTime}
      shippingTrends={shippingTrends}
      isLoading={shipmentsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      onSortChange={handleSortOrder}
      currentSort={sortOrder}
    />
  );
}

DeliveryHistoryDashboardPresenter.layout = 'AppLayout';
DeliveryHistoryDashboardPresenter.auth = true;