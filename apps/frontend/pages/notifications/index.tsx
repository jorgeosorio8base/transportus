import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useNotificationList } from '@/src/hooks';
import { NotificationEntity, UserEntity, NotificationFilter, NotificationSort, SortOrder } from '@transportus/core';
import { NotificationsCenterComponent } from './NotificationsCenter';

export interface NotificationsCenterComponentProps {
  notifications: NotificationEntity[];
  notificationsCount: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onMarkAllAsRead: () => void;
  notificationPreferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  onPreferenceChange: (type: 'email' | 'sms' | 'push') => void;
  onSavePreferences: () => void;
  notificationHistoryData: Array<{
    type: string;
    message: string;
    date: string;
  }>;
  currentUser: UserEntity | null;
}

export default function NotificationsCenterPresenter() {
  const [sortOrder, setSortOrder] = useState<NotificationSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [notificationsState, setNotificationsState] = useState<{
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

  const { data: notificationsData, isLoading: notificationsLoading, isError: isNotificationsError } = useNotificationList({
    filter: notificationsFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: NotificationSort[]) => {
    setSortOrder(value);
  }, []);

  const handleMarkAllAsRead = useCallback(async () => {
    showAlert({
      title: 'Success',
      message: 'All notifications marked as read.',
      severity: 'success',
    });
  }, [showAlert]);

  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    if (notificationsLoading) {
      showLoading();
    } else {
      hideLoading();
      
      if (isNotificationsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching notifications.',
          severity: 'error',
        });
      }
    }
  }, [notificationsLoading, isNotificationsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (notificationsData) {
      setNotificationsState({
        notifications: notificationsData.items || [],
        count: notificationsData.count || 0,
      });
    }
  }, [notificationsData]);

  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handlePreferenceChange = useCallback((type: keyof typeof notificationPreferences) => {
    setNotificationPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  }, []);

  const handleSavePreferences = useCallback(() => {
    showAlert({
      title: 'Success',
      message: 'Notification preferences saved successfully.',
      severity: 'success',
    });
  }, [showAlert]);

  const notificationHistoryData = useMemo(() => {
    return notificationsState?.notifications.map((notification) => ({
      type: 'Info',
      message: notification.Content,
      date: notification.SentAt || notification.CreatedAt,
    })) || [];
  }, [notificationsState?.notifications]);

  return (
    <NotificationsCenterComponent
      notifications={notificationsState?.notifications || []}
      notificationsCount={notificationsState?.count || 0}
      isLoading={notificationsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      onMarkAllAsRead={handleMarkAllAsRead}
      notificationPreferences={notificationPreferences}
      onPreferenceChange={handlePreferenceChange}
      onSavePreferences={handleSavePreferences}
      notificationHistoryData={notificationHistoryData}
      currentUser={currentUser || null}
    />
  );
}

NotificationsCenterPresenter.layout = 'AppLayout';
NotificationsCenterPresenter.auth = true;