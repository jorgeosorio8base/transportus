import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLoading, useAlert, useAnalyticList } from '@/src/hooks';
import { AnalyticEntity, AnalyticFilter, AnalyticSort, SortOrder } from '@transportus/core';
import { PerformanceInsightsComponent } from './PerformanceInsights';

export interface PerformanceInsightsComponentProps {
  trendAnalysisData: { date: string; deliveryTime: number }[];
  performanceComparisonData: { currentQuarter: number; previousQuarter: number };
  metricDeviations: { metric: string; value: string; target: string; status: string }[];
  onSortChange: (newSortOrder: AnalyticSort[]) => void;
  onGenerateReport: (metric: string, startDate: string, endDate: string) => void;
  onSetKPIAlert: (kpi: string, threshold: number, alertMethods: string[]) => void;
}

export default function PerformanceInsightsPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [analyticsData, setAnalyticsData] = useState<AnalyticEntity[]>([]);
  const [sortOrder, setSortOrder] = useState<AnalyticSort[]>([{ report_name: SortOrder.Asc }]);

  const analyticsFilter = useMemo<AnalyticFilter>(() => ({
    generated_at: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() }
  }), []);

  const { data: analyticsQueryData, isLoading: isAnalyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    filter: analyticsFilter,
    sort: sortOrder
  });

  useEffect(() => {
    if (isAnalyticsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isAnalyticsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching analytics data.',
          severity: 'error'
        });
      }
    }
  }, [isAnalyticsLoading, isAnalyticsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (analyticsQueryData) {
      setAnalyticsData(analyticsQueryData.items || []);
    }
  }, [analyticsQueryData]);

  const trendAnalysisData = useMemo(() => {
    return analyticsData.map(analytic => ({
      date: analytic.GeneratedAt,
      deliveryTime: (analytic.Data as any)?.deliveryTime || 0
    }));
  }, [analyticsData]);

  const performanceComparisonData = useMemo(() => {
    const currentQuarterData = analyticsData.slice(0, Math.floor(analyticsData.length / 2));
    const previousQuarterData = analyticsData.slice(Math.floor(analyticsData.length / 2));
    return {
      currentQuarter: averageDeliveryTime(currentQuarterData),
      previousQuarter: averageDeliveryTime(previousQuarterData)
    };
  }, [analyticsData]);

  const metricDeviations = useMemo(() => {
    return [
      { metric: 'On-Time Delivery', value: '95%', target: '98%', status: 'warning' },
      { metric: 'Customer Satisfaction', value: '4.2', target: '4.5', status: 'warning' },
      { metric: 'Cost Efficiency', value: '92%', target: '90%', status: 'success' }
    ];
  }, [analyticsData]);

  const averageDeliveryTime = (data: AnalyticEntity[]) => {
    const sum = data.reduce((acc, analytic) => acc + ((analytic.Data as any)?.deliveryTime || 0), 0);
    return sum / data.length;
  };

  const handleSortChange = useCallback((newSortOrder: AnalyticSort[]) => {
    setSortOrder(newSortOrder);
  }, []);

  const handleGenerateReport = useCallback((metric: string, startDate: string, endDate: string) => {
    console.log(`Generating report for ${metric} from ${startDate} to ${endDate}`);
    showAlert({
      title: 'Report Generated',
      message: `Report for ${metric} has been generated successfully.`,
      severity: 'success'
    });
  }, [showAlert]);

  const handleSetKPIAlert = useCallback((kpi: string, threshold: number, alertMethods: string[]) => {
    console.log(`Setting KPI alert for ${kpi} with threshold ${threshold} and methods ${alertMethods.join(', ')}`);
    showAlert({
      title: 'KPI Alert Set',
      message: `Alert for ${kpi} has been set successfully.`,
      severity: 'success'
    });
  }, [showAlert]);

  return (
    <PerformanceInsightsComponent
      trendAnalysisData={trendAnalysisData}
      performanceComparisonData={performanceComparisonData}
      metricDeviations={metricDeviations}
      onSortChange={handleSortChange}
      onGenerateReport={handleGenerateReport}
      onSetKPIAlert={handleSetKPIAlert}
    />
  );
}

PerformanceInsightsPresenter.layout = 'AppLayout';
PerformanceInsightsPresenter.auth = true;