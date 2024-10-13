import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLoading, useAlert, useCurrentUser, useNotificationList } from '@/src/hooks';
import { NotificationEntity, NotificationFilter, NotificationSort, SortOrder } from '@transportus/core';
import { StatusNotificationSettingsComponent } from './StatusNotificationSettings';

export interface StatusNotificationSettingsComponentProps {
  notificationSettings: NotificationSettings;
  customAlerts: CustomAlert[];
  notificationList: NotificationEntity[];
  notificationCount: number;
  isNotificationsLoading: boolean;
  onNotificationTypeChange: (type: string, checked: boolean) => void;
  onNotificationMethodChange: (method: string, checked: boolean) => void;
  onFrequencyChange: (frequency: string) => void;
  onAddCustomAlert: (newAlert: CustomAlert) => void;
  onDeleteCustomAlert: (alertId: string) => void;
  onSaveSettings: () => void;
}

interface NotificationSettings {
  notificationTypes: string[];
  notificationMethods: string[];
  frequency: string;
}

interface CustomAlert {
  id: string;
  packageId: string;
  clientName: string;
  alertType: string;
}

export default function StatusNotificationSettingsPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    notificationTypes: [],
    notificationMethods: [],
    frequency: 'daily'
  });

  const [customAlerts, setCustomAlerts] = useState<CustomAlert[]>([]);

  const [notificationFilter, setNotificationFilter] = useState<NotificationFilter>({});
  const [notificationSort, setNotificationSort] = useState<NotificationSort[]>([{ createdAt: SortOrder.Desc }]);

  const { data: notificationsData, isLoading: isNotificationsLoading, isError: isNotificationsError } = useNotificationList({
    filter: notificationFilter,
    sort: notificationSort,
    first: 10
  });

  useEffect(() => {
    if (isNotificationsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isNotificationsError) {
        showAlert({
          title: 'Error',
          message: 'Failed to load notifications. Please try again.',
          severity: 'error'
        });
      }
    }
  }, [isNotificationsLoading, isNotificationsError, showLoading, hideLoading, showAlert]);

  const handleNotificationTypeChange = useCallback((type: string, checked: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      notificationTypes: checked
        ? [...prev.notificationTypes, type]
        : prev.notificationTypes.filter(t => t !== type)
    }));
  }, []);

  const handleNotificationMethodChange = useCallback((method: string, checked: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      notificationMethods: checked
        ? [...prev.notificationMethods, method]
        : prev.notificationMethods.filter(m => m !== method)
    }));
  }, []);

  const handleFrequencyChange = useCallback((frequency: string) => {
    setNotificationSettings(prev => ({ ...prev, frequency }));
  }, []);

  const handleAddCustomAlert = useCallback((newAlert: CustomAlert) => {
    setCustomAlerts(prev => [...prev, newAlert]);
  }, []);

  const handleDeleteCustomAlert = useCallback((alertId: string) => {
    setCustomAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  const handleSaveSettings = useCallback(() => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      showAlert({
        title: 'Success',
        message: 'Notification settings saved successfully!',
        severity: 'success'
      });
    }, 1000);
  }, [showLoading, hideLoading, showAlert]);

  const notificationListMemo = useMemo(() => {
    return notificationsData?.items || [];
  }, [notificationsData]);

  const notificationCountMemo = useMemo(() => {
    return notificationsData?.count || 0;
  }, [notificationsData]);

  return (
    <StatusNotificationSettingsComponent
      notificationSettings={notificationSettings}
      customAlerts={customAlerts}
      notificationList={notificationListMemo}
      notificationCount={notificationCountMemo}
      isNotificationsLoading={isNotificationsLoading}
      onNotificationTypeChange={handleNotificationTypeChange}
      onNotificationMethodChange={handleNotificationMethodChange}
      onFrequencyChange={handleFrequencyChange}
      onAddCustomAlert={handleAddCustomAlert}
      onDeleteCustomAlert={handleDeleteCustomAlert}
      onSaveSettings={handleSaveSettings}
    />
  );
}

StatusNotificationSettingsPresenter.layout = 'AppLayout';
StatusNotificationSettingsPresenter.auth = true;