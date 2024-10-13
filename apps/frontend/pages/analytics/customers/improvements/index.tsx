import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useNotificationList, useCurrentUser } from '@/src/hooks';
import { NotificationEntity, UserEntity, NotificationSort, NotificationFilter, SortOrder } from '@transportus/core';
import { ImprovementActionPlannerComponent } from './ImprovementActionPlanner';

export interface ImprovementActionPlannerComponentProps {
  notifications: NotificationEntity[];
  notificationsCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortChange: (value: NotificationSort[]) => void;
  currentUser: UserEntity | undefined;
  onAddBestPractice: (practice: string) => void;
  onAssignTask: (taskName: string, assignedTo: string) => void;
  onUpdateProjectStatus: (projectId: string, newStatus: string) => void;
}

export default function ImprovementActionPlannerPresenter() {
  const [sortOrder, setSortOrder] = useState<NotificationSort[]>([{createdAt: SortOrder.Desc}]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {showLoading, hideLoading} = useLoading();
  const {show: showAlert} = useAlert();
  const [notificationsDataState, setNotificationsDataState] = useState<{
    notifications: NotificationEntity[];
    count: number;
  } | null>({
    notifications: [],
    count: 0,
  });

  const notificationsFilters = useMemo<NotificationFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      content: { contains: searchTerm },
    };
  }, [searchTerm]);

  const {data: notificationsData, isLoading: notificationsLoading, isError: isNotificationsError} = useNotificationList({
    filter: notificationsFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: NotificationSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (notificationsLoading) {
      showLoading();
    } else {
      hideLoading();
    
      if (isNotificationsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the notifications list.',
          severity: 'error',
        });
      }
    }
  }, [notificationsLoading, isNotificationsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (notificationsData) {
      setNotificationsDataState({
        notifications: notificationsData.items || [],
        count: notificationsData.count || 0,
      });
    }
  }, [notificationsData]);

  const {data: currentUser} = useCurrentUser();

  const handleAddBestPractice = useCallback((practice: string) => {
    // TODO: Implement adding best practice logic
    showAlert({
      title: 'Success',
      message: 'Best practice added successfully.',
      severity: 'success',
    });
  }, [showAlert]);

  const handleAssignTask = useCallback((taskName: string, assignedTo: string) => {
    // TODO: Implement task assignment logic
    showAlert({
      title: 'Success',
      message: `Task "${taskName}" assigned to ${assignedTo} successfully.`,
      severity: 'success',
    });
  }, [showAlert]);

  const handleUpdateProjectStatus = useCallback((projectId: string, newStatus: string) => {
    // TODO: Implement project status update logic
    showAlert({
      title: 'Success',
      message: `Project status updated to ${newStatus} successfully.`,
      severity: 'success',
    });
  }, [showAlert]);

  return (
    <ImprovementActionPlannerComponent
      notifications={notificationsDataState?.notifications || []}
      notificationsCount={notificationsDataState?.count || 0}
      isLoading={notificationsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      onSortChange={handleSortOrder}
      currentUser={currentUser}
      onAddBestPractice={handleAddBestPractice}
      onAssignTask={handleAssignTask}
      onUpdateProjectStatus={handleUpdateProjectStatus}
    />
  );
}

ImprovementActionPlannerPresenter.layout = 'AppLayout';
ImprovementActionPlannerPresenter.auth = true;