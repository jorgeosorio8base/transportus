import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useAnalyticList } from '@/src/hooks';
import { AnalyticEntity, AnalyticSort, AnalyticFilter, SortOrder } from '@transportus/core';
import { AuditLogComponent } from './AuditLog';

export interface AuditLogComponentProps {
  auditLogs: AnalyticEntity[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSearch: (term: string) => void;
  onSort: (sort: AnalyticSort[]) => void;
  formatDate: (dateString: string) => string;
  getEventType: (reportName: string) => string;
}

export default function AuditLogPresenter() {
  const [sortOrder, setSortOrder] = useState<AnalyticSort[]>([{ generated_at: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [auditLogState, setAuditLogState] = useState<{
    analytics: AnalyticEntity[];
    count: number;
  }>({ analytics: [], count: 0 });

  const auditLogFilters = useMemo<AnalyticFilter>(() => {
    if (!searchTerm) {
      return {};
    }
    return {
      OR: [
        { report_name: { contains: searchTerm } },
        { id: { contains: searchTerm } }
      ]
    };
  }, [searchTerm]);

  const { data: analyticsData, isLoading: isAnalyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    filter: auditLogFilters,
    sort: sortOrder,
    skip: (currentPage - 1) * itemsPerPage,
    first: itemsPerPage
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleSortOrder = useCallback((value: AnalyticSort[]) => {
    setSortOrder(value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    if (isAnalyticsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isAnalyticsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the audit log.',
          severity: 'error'
        });
      }
    }
  }, [isAnalyticsLoading, isAnalyticsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (analyticsData) {
      setAuditLogState({
        analytics: analyticsData.items || [],
        count: analyticsData.count || 0
      });
    }
  }, [analyticsData]);

  const totalPages = Math.ceil((auditLogState.count || 0) / itemsPerPage);

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleString();
  }, []);

  const getEventType = useCallback((reportName: string) => {
    return reportName.split('_').join(' ');
  }, []);

  return (
    <AuditLogComponent
      auditLogs={auditLogState.analytics}
      isLoading={isAnalyticsLoading}
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      onSearch={handleSearchTerm}
      onSort={handleSortOrder}
      formatDate={formatDate}
      getEventType={getEventType}
    />
  );
}

AuditLogPresenter.layout = 'AppLayout';
AuditLogPresenter.auth = true;