import { useState, useEffect, useCallback } from 'react';
import { useLoading, useAlert, useAnalyticList } from '@/src/hooks';
import { AnalyticEntity, AnalyticSort, SortOrder } from '@transportus/core';
import { PerformanceDashboardComponent } from './PerformanceDashboard';

export interface PerformanceDashboardComponentProps {
  performanceMetrics: {
    deliveryPerformance: number;
    shippingVolume: number;
    customerSatisfaction: number;
  };
  deliveryTrendData: { date: string; performance: number }[];
  shippingActivityData: { region: string; activity: number }[];
  topRoutes: { route: string; onTimePercentage: number; avgDeliveryTime: string; volume: number }[];
  onGenerateReport: () => void;
  onExportData: () => void;
  onCustomizeDashboard: () => void;
}

export default function PerformanceDashboardPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [sortOrder, setSortOrder] = useState<AnalyticSort[]>([{ generated_at: SortOrder.Desc }]);

  const { data: analyticsData, isLoading: isAnalyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    sort: sortOrder,
  });

  const [performanceMetrics, setPerformanceMetrics] = useState<{
    deliveryPerformance: number;
    shippingVolume: number;
    customerSatisfaction: number;
  }>({ deliveryPerformance: 0, shippingVolume: 0, customerSatisfaction: 0 });

  const [deliveryTrendData, setDeliveryTrendData] = useState<{ date: string; performance: number }[]>([]);
  const [shippingActivityData, setShippingActivityData] = useState<{ region: string; activity: number }[]>([]);
  const [topRoutes, setTopRoutes] = useState<{ route: string; onTimePercentage: number; avgDeliveryTime: string; volume: number }[]>([]);

  const processAnalytics = useCallback((analytics: AnalyticEntity[]) => {
    const latestAnalytic = analytics[0];
    if (latestAnalytic && latestAnalytic.Data) {
      const { deliveryPerformance, shippingVolume, customerSatisfaction, deliveryTrend, shippingActivity, topPerformingRoutes } = latestAnalytic.Data as any;
      
      setPerformanceMetrics({ deliveryPerformance, shippingVolume, customerSatisfaction });
      setDeliveryTrendData(deliveryTrend);
      setShippingActivityData(shippingActivity);
      setTopRoutes(topPerformingRoutes);
    }
  }, []);

  useEffect(() => {
    if (isAnalyticsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isAnalyticsError) {
        showAlert({
          title: "Error",
          message: "Failed to load analytics data. Please try again later.",
          severity: "error"
        });
      } else if (analyticsData?.items) {
        processAnalytics(analyticsData.items);
      }
    }
  }, [isAnalyticsLoading, isAnalyticsError, analyticsData, showLoading, hideLoading, showAlert, processAnalytics]);

  const handleGenerateReport = useCallback(() => {
    showAlert({
      title: "Report Generation",
      message: "Full report generation started. You will be notified when it's ready.",
      severity: "info"
    });
    // TODO: Implement report generation logic
  }, [showAlert]);

  const handleExportData = useCallback(() => {
    showAlert({
      title: "Data Export",
      message: "Data export initiated. The file will be downloaded shortly.",
      severity: "info"
    });
    // TODO: Implement data export logic
  }, [showAlert]);

  const handleCustomizeDashboard = useCallback(() => {
    showAlert({
      title: "Dashboard Customization",
      message: "Dashboard customization feature is not yet implemented.",
      severity: "warning"
    });
    // TODO: Implement dashboard customization logic
  }, [showAlert]);

  return (
    <PerformanceDashboardComponent
      performanceMetrics={performanceMetrics}
      deliveryTrendData={deliveryTrendData}
      shippingActivityData={shippingActivityData}
      topRoutes={topRoutes}
      onGenerateReport={handleGenerateReport}
      onExportData={handleExportData}
      onCustomizeDashboard={handleCustomizeDashboard}
    />
  );
}

PerformanceDashboardPresenter.layout = "AppLayout";
PerformanceDashboardPresenter.auth = true;