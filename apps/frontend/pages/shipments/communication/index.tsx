import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useNotificationList, useCurrentUser } from '@/src/hooks';
import { NotificationEntity, UserEntity, NotificationSort, NotificationFilter, SortOrder } from '@transportus/core';
import { CommunicationDashboardComponent } from './CommunicationDashboard';

export interface CommunicationDashboardComponentProps {
  notifications: NotificationEntity[];
  notificationsCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: NotificationSort[]) => void;
  onCompose: () => void;
  onFilter: (filterType: string) => void;
  currentUser: UserEntity | undefined;
}

export default function CommunicationDashboardPresenter() {
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
      content: { contains: searchTerm }
    };
  }, [searchTerm]);

  const {
    data: notificationsData,
    isLoading: notificationsLoading,
    isError: isNotificationsError
  } = useNotificationList({
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
          severity: 'error'
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

  const handleCompose = useCallback(() => {
    console.log('Compose new alert or update');
  }, []);

  const handleFilter = useCallback((filterType: string) => {
    console.log(`Filter content by: ${filterType}`);
  }, []);

  return (
    <CommunicationDashboardComponent
      notifications={notificationsDataState?.notifications || []}
      notificationsCount={notificationsDataState?.count || 0}
      isLoading={notificationsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      onSortOrderChange={handleSortOrder}
      onCompose={handleCompose}
      onFilter={handleFilter}
      currentUser={currentUser}
    />
  );
}

CommunicationDashboardPresenter.layout = 'AppLayout';
CommunicationDashboardPresenter.auth = true;