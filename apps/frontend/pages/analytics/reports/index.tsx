import React, { useState, useCallback, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useAnalyticList } from '@/src/hooks';
import { AnalyticEntity, UserEntity, AnalyticFilter, AnalyticSort } from '@transportus/core';
import { ReportGeneratorComponent } from './ReportGenerator';

export interface ReportGeneratorComponentProps {
  analyticsData: {
    items: AnalyticEntity[];
    count: number;
  } | undefined;
  isAnalyticsLoading: boolean;
  selectedDataPoints: string[];
  handleDataPointSelection: (dataPoint: string) => void;
  dateRange: { startDate: string; endDate: string };
  handleDateRangeChange: (startDate: string, endDate: string) => void;
  selectedClient: string;
  handleClientSelection: (client: string) => void;
  selectedPackageType: string;
  handlePackageTypeSelection: (packageType: string) => void;
  selectedVisualization: string;
  handleVisualizationChange: (visualization: string) => void;
  advancedOptions: { dataPivoting: boolean; crossTabulation: boolean };
  handleAdvancedOptionsChange: (option: 'dataPivoting' | 'crossTabulation') => void;
  handleGenerateReport: () => void;
  handleSaveTemplate: () => void;
  scheduleOption: string;
  handleScheduleChange: (option: string) => void;
  currentUser: UserEntity | undefined;
}

export default function ReportGeneratorPresenter() {
  const [analyticsFilter, setAnalyticsFilter] = useState<AnalyticFilter>({});
  const [analyticsSort, setAnalyticsSort] = useState<AnalyticSort[]>([]);
  const [selectedDataPoints, setSelectedDataPoints] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ startDate: string; endDate: string }>({ startDate: '', endDate: '' });
  const [selectedClient, setSelectedClient] = useState<string>('All Clients');
  const [selectedPackageType, setSelectedPackageType] = useState<string>('All Types');
  const [selectedVisualization, setSelectedVisualization] = useState<string>('Bar Chart');
  const [advancedOptions, setAdvancedOptions] = useState<{ dataPivoting: boolean; crossTabulation: boolean }>({ dataPivoting: false, crossTabulation: false });
  const [scheduleOption, setScheduleOption] = useState<string>('Never');

  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const { data: analyticsData, isLoading: isAnalyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    filter: analyticsFilter,
    sort: analyticsSort
  });

  const handleDataPointSelection = useCallback((dataPoint: string) => {
    setSelectedDataPoints(prev => {
      if (prev.includes(dataPoint)) {
        return prev.filter(dp => dp !== dataPoint);
      } else {
        return [...prev, dataPoint];
      }
    });
  }, []);

  const handleDateRangeChange = useCallback((startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
    setAnalyticsFilter(prev => ({
      ...prev,
      generated_at: {
        gte: startDate,
        lte: endDate
      }
    }));
  }, []);

  const handleClientSelection = useCallback((client: string) => {
    setSelectedClient(client);
    // Update filter based on client selection
  }, []);

  const handlePackageTypeSelection = useCallback((packageType: string) => {
    setSelectedPackageType(packageType);
    // Update filter based on package type selection
  }, []);

  const handleVisualizationChange = useCallback((visualization: string) => {
    setSelectedVisualization(visualization);
  }, []);

  const handleAdvancedOptionsChange = useCallback((option: 'dataPivoting' | 'crossTabulation') => {
    setAdvancedOptions(prev => ({ ...prev, [option]: !prev[option] }));
  }, []);

  const handleGenerateReport = useCallback(() => {
    showLoading();
    // Logic to generate report based on selected options
    setTimeout(() => {
      hideLoading();
      showAlert({
        title: 'Success',
        message: 'Report generated successfully',
        severity: 'success'
      });
    }, 2000);
  }, [showLoading, hideLoading, showAlert]);

  const handleSaveTemplate = useCallback(() => {
    // Logic to save current configuration as a template
    showAlert({
      title: 'Success',
      message: 'Template saved successfully',
      severity: 'success'
    });
  }, [showAlert]);

  const handleScheduleChange = useCallback((option: string) => {
    setScheduleOption(option);
  }, []);

  useEffect(() => {
    if (isAnalyticsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isAnalyticsError) {
        showAlert({
          title: 'Error',
          message: 'Failed to load analytics data',
          severity: 'error'
        });
      }
    }
  }, [isAnalyticsLoading, isAnalyticsError, showLoading, hideLoading, showAlert]);

  return (
    <ReportGeneratorComponent
      analyticsData={analyticsData}
      isAnalyticsLoading={isAnalyticsLoading}
      selectedDataPoints={selectedDataPoints}
      handleDataPointSelection={handleDataPointSelection}
      dateRange={dateRange}
      handleDateRangeChange={handleDateRangeChange}
      selectedClient={selectedClient}
      handleClientSelection={handleClientSelection}
      selectedPackageType={selectedPackageType}
      handlePackageTypeSelection={handlePackageTypeSelection}
      selectedVisualization={selectedVisualization}
      handleVisualizationChange={handleVisualizationChange}
      advancedOptions={advancedOptions}
      handleAdvancedOptionsChange={handleAdvancedOptionsChange}
      handleGenerateReport={handleGenerateReport}
      handleSaveTemplate={handleSaveTemplate}
      scheduleOption={scheduleOption}
      handleScheduleChange={handleScheduleChange}
      currentUser={currentUser}
    />
  );
}

ReportGeneratorPresenter.layout = 'AppLayout';
ReportGeneratorPresenter.auth = true;