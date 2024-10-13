import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLoading, useAlert, useAnalyticList } from '@/src/hooks';
import { AnalyticEntity, AnalyticSort, AnalyticFilter, SortOrder } from '@transportus/core';
import { AnalyticsDashboardComponent } from './AnalyticsDashboard';

export interface AnalyticsDashboardComponentProps {
  totalDeliveries: number;
  onTimeDeliveryRate: number;
  averageDeliveryTime: number;
  customerSatisfaction: number;
  deliveryPerformanceData: Array<{ date: string | undefined; performance: number }>;
  packageStatusDistribution: Array<{ name: string; value: number }>;
  topPerformingRoutes: Array<{
    name: string;
    deliveries: number;
    onTimeRate: number;
    avgDeliveryTime: number;
  }>;
  handleSearchTerm: (value: string) => void;
  handleSortOrder: (value: AnalyticSort[]) => void;
  isLoading: boolean;
}

export default function AnalyticsDashboardPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [analyticDataState, setAnalyticDataState] = useState<{
    analytics: AnalyticEntity[];
    count: number;
  } | null>({
    analytics: [],
    count: 0,
  });

  const [sortOrder, setSortOrder] = useState<AnalyticSort[]>([{ generated_at: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const analyticFilters = useMemo<AnalyticFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      report_name: { contains: searchTerm },
    };
  }, [searchTerm]);

  const { data: analyticsData, isLoading: analyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    filter: analyticFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: AnalyticSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (analyticsLoading) {
      showLoading();
    } else {
      hideLoading();

      if (isAnalyticsError) {
        showAlert({
          title: "Error",
          message: "An error occurred while fetching the analytics data.",
          severity: "error",
        });
      }
    }
  }, [analyticsLoading, isAnalyticsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (analyticsData) {
      setAnalyticDataState({
        analytics: analyticsData.items || [],
        count: analyticsData.count || 0,
      });
    }
  }, [analyticsData]);

  const totalDeliveries = useMemo(() => {
    return analyticDataState?.analytics.reduce((total, analytic) => {
      return total + (analytic.Data?.totalDeliveries || 0);
    }, 0) || 0;
  }, [analyticDataState]);

  const onTimeDeliveryRate = useMemo(() => {
    const total = analyticDataState?.analytics.reduce((sum, analytic) => {
      return sum + (analytic.Data?.onTimeDeliveryRate || 0);
    }, 0) || 0;
    return analyticDataState?.analytics.length ? (total / analyticDataState.analytics.length) : 0;
  }, [analyticDataState]);

  const averageDeliveryTime = useMemo(() => {
    const total = analyticDataState?.analytics.reduce((sum, analytic) => {
      return sum + (analytic.Data?.averageDeliveryTime || 0);
    }, 0) || 0;
    return analyticDataState?.analytics.length ? (total / analyticDataState.analytics.length) : 0;
  }, [analyticDataState]);

  const customerSatisfaction = useMemo(() => {
    const total = analyticDataState?.analytics.reduce((sum, analytic) => {
      return sum + (analytic.Data?.customerSatisfaction || 0);
    }, 0) || 0;
    return analyticDataState?.analytics.length ? (total / analyticDataState.analytics.length) : 0;
  }, [analyticDataState]);

  const deliveryPerformanceData = useMemo(() => {
    return analyticDataState?.analytics.map(analytic => ({
      date: analytic.GeneratedAt,
      performance: analytic.Data?.deliveryPerformance || 0
    })) || [];
  }, [analyticDataState]);

  const packageStatusDistribution = useMemo(() => {
    const distribution: Record<string, number> = {};
    analyticDataState?.analytics.forEach(analytic => {
      if (analytic.Data?.packageStatusDistribution) {
        Object.entries(analytic.Data.packageStatusDistribution).forEach(([status, count]) => {
          distribution[status] = (distribution[status] || 0) + (count as number);
        });
      }
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
  }, [analyticDataState]);

  const topPerformingRoutes = useMemo(() => {
    const routesData: Record<string, { deliveries: number; onTimeRate: number; avgDeliveryTime: number }> = {};
    analyticDataState?.analytics.forEach(analytic => {
      if (analytic.Data?.topPerformingRoutes) {
        analytic.Data.topPerformingRoutes.forEach((route: any) => {
          if (!routesData[route.name]) {
            routesData[route.name] = { deliveries: 0, onTimeRate: 0, avgDeliveryTime: 0 };
          }
          routesData[route.name].deliveries += route.deliveries;
          routesData[route.name].onTimeRate += route.onTimeRate;
          routesData[route.name].avgDeliveryTime += route.avgDeliveryTime;
        });
      }
    });
    return Object.entries(routesData)
      .map(([name, data]) => ({
        name,
        deliveries: data.deliveries,
        onTimeRate: data.onTimeRate / analyticDataState!.analytics.length,
        avgDeliveryTime: data.avgDeliveryTime / analyticDataState!.analytics.length
      }))
      .sort((a, b) => b.onTimeRate - a.onTimeRate)
      .slice(0, 3);
  }, [analyticDataState]);

  return (
    <AnalyticsDashboardComponent
      totalDeliveries={totalDeliveries}
      onTimeDeliveryRate={onTimeDeliveryRate}
      averageDeliveryTime={averageDeliveryTime}
      customerSatisfaction={customerSatisfaction}
      deliveryPerformanceData={deliveryPerformanceData}
      packageStatusDistribution={packageStatusDistribution}
      topPerformingRoutes={topPerformingRoutes}
      handleSearchTerm={handleSearchTerm}
      handleSortOrder={handleSortOrder}
      isLoading={analyticsLoading}
    />
  );
}

AnalyticsDashboardPresenter.layout = "AppLayout";
AnalyticsDashboardPresenter.auth = true;