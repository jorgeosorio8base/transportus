import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDriverList, useLoading, useAlert, useCurrentUser } from '@/src/hooks';
import { DriverEntity, DriverFilter, DriverSort, SortOrder, UserEntity } from '@transportus/core';
import { ScheduleOptimizationToolComponent } from './ScheduleOptimizationTool';

export interface ScheduleOptimizationToolComponentProps {
  drivers: DriverEntity[];
  driversCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: DriverSort[];
  onSortOrderChange: (value: DriverSort[]) => void;
  currentUser: UserEntity | undefined;
}

export default function ScheduleOptimizationToolPresenter() {
  const [sortOrder, setSortOrder] = useState<DriverSort[]>([{ name: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [driversDataState, setDriversDataState] = useState<{
    drivers: DriverEntity[];
    count: number;
  } | null>({
    drivers: [],
    count: 0,
  });

  const driversFilters = useMemo<DriverFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      OR: [
        { name: { contains: searchTerm } },
        { license_number: { contains: searchTerm } },
      ],
    };
  }, [searchTerm]);

  const { data: driversData, isLoading: driversLoading, isError: isDriversError } = useDriverList({
    filter: driversFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: DriverSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (driversLoading) {
      showLoading();
    } else {
      hideLoading();

      if (isDriversError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the drivers list.',
          severity: 'error',
        });
      }
    }
  }, [driversLoading, isDriversError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (driversData) {
      setDriversDataState({
        drivers: driversData.items || [],
        count: driversData.count || 0,
      });
    }
  }, [driversData]);

  const { data: currentUser } = useCurrentUser();

  const scheduleOptimizationToolProps: ScheduleOptimizationToolComponentProps = {
    drivers: driversDataState?.drivers || [],
    driversCount: driversDataState?.count || 0,
    isLoading: driversLoading,
    searchTerm,
    onSearchTermChange: handleSearchTerm,
    sortOrder,
    onSortOrderChange: handleSortOrder,
    currentUser,
  };

  return (
    <ScheduleOptimizationToolComponent
      {...scheduleOptimizationToolProps}
    />
  );
}

ScheduleOptimizationToolPresenter.layout = 'AppLayout';
ScheduleOptimizationToolPresenter.auth = true;