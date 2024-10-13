import { useState, useEffect, useCallback } from 'react';
import { useLoading, useAlert, useCurrentUser, useNotificationList, useUpdateNotification } from '@/src/hooks';
import { NotificationEntity, SortOrder } from '@transportus/core';
import { NotificationPreferencesComponent } from './NotificationPreferences';

export interface NotificationPreferencesComponentProps {
  notificationPreferences: NotificationEntity | null;
  quietHoursStart: string;
  quietHoursEnd: string;
  notificationTypes: Record<string, boolean>;
  communicationChannels: Record<string, string>;
  isLoading: boolean;
  handleToggleNotifications: (enabled: boolean) => void;
  handleQuietHoursChange: (start: string, end: string) => void;
  handleNotificationTypeToggle: (type: string, enabled: boolean) => void;
  handleCommunicationChannelChange: (notificationType: string, channel: string) => void;
  handleSavePreferences: () => void;
}

export default function NotificationPreferencesPresenter() {
  const [notificationPreferences, setNotificationPreferences] = useState<NotificationEntity | null>(null);
  const [quietHoursStart, setQuietHoursStart] = useState<string>('');
  const [quietHoursEnd, setQuietHoursEnd] = useState<string>('');
  const [notificationTypes, setNotificationTypes] = useState<Record<string, boolean>>({});
  const [communicationChannels, setCommunicationChannels] = useState<Record<string, string>>({});

  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const { data: notificationListData, isLoading: isNotificationListLoading } = useNotificationList({
    filter: { userID: { id: { equals: currentUser?.Id } } },
    sort: [{ createdAt: SortOrder.Desc }]
  });

  const { mutate: updateNotification, isPending: isUpdateNotificationPending } = useUpdateNotification();

  useEffect(() => {
    if (isNotificationListLoading || isUpdateNotificationPending) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isNotificationListLoading, isUpdateNotificationPending, showLoading, hideLoading]);

  useEffect(() => {
    if (notificationListData && notificationListData.items.length > 0) {
      const latestNotification = notificationListData.items[0];
      setNotificationPreferences(latestNotification);
      const quietHours = JSON.parse(latestNotification.Content || '{}').quietHours || {};
      setQuietHoursStart(quietHours.start || '');
      setQuietHoursEnd(quietHours.end || '');
      const types = JSON.parse(latestNotification.Content || '{}').notificationTypes || {};
      setNotificationTypes(types);
      const channels = JSON.parse(latestNotification.Content || '{}').communicationChannels || {};
      setCommunicationChannels(channels);
    }
  }, [notificationListData]);

  const handleToggleNotifications = useCallback((enabled: boolean) => {
    if (notificationPreferences) {
      const updatedContent = JSON.parse(notificationPreferences.Content || '{}');
      updatedContent.enabled = enabled;
      updateNotification(
        {
          data: { Content: JSON.stringify(updatedContent) },
          filter: { id: { equals: notificationPreferences.Id } }
        },
        {
          onSuccess: () => {
            showAlert({ title: 'Success', message: 'Notification preferences updated', severity: 'success' });
          },
          onError: () => {
            showAlert({ title: 'Error', message: 'Failed to update notification preferences', severity: 'error' });
          }
        }
      );
    }
  }, [notificationPreferences, updateNotification, showAlert]);

  const handleQuietHoursChange = useCallback((start: string, end: string) => {
    setQuietHoursStart(start);
    setQuietHoursEnd(end);
    if (notificationPreferences) {
      const updatedContent = JSON.parse(notificationPreferences.Content || '{}');
      updatedContent.quietHours = { start, end };
      updateNotification(
        {
          data: { Content: JSON.stringify(updatedContent) },
          filter: { id: { equals: notificationPreferences.Id } }
        },
        {
          onSuccess: () => {
            showAlert({ title: 'Success', message: 'Quiet hours updated', severity: 'success' });
          },
          onError: () => {
            showAlert({ title: 'Error', message: 'Failed to update quiet hours', severity: 'error' });
          }
        }
      );
    }
  }, [notificationPreferences, updateNotification, showAlert]);

  const handleNotificationTypeToggle = useCallback((type: string, enabled: boolean) => {
    setNotificationTypes(prev => ({ ...prev, [type]: enabled }));
    if (notificationPreferences) {
      const updatedContent = JSON.parse(notificationPreferences.Content || '{}');
      updatedContent.notificationTypes = { ...updatedContent.notificationTypes, [type]: enabled };
      updateNotification(
        {
          data: { Content: JSON.stringify(updatedContent) },
          filter: { id: { equals: notificationPreferences.Id } }
        },
        {
          onSuccess: () => {
            showAlert({ title: 'Success', message: 'Notification type updated', severity: 'success' });
          },
          onError: () => {
            showAlert({ title: 'Error', message: 'Failed to update notification type', severity: 'error' });
          }
        }
      );
    }
  }, [notificationPreferences, updateNotification, showAlert]);

  const handleCommunicationChannelChange = useCallback((notificationType: string, channel: string) => {
    setCommunicationChannels(prev => ({ ...prev, [notificationType]: channel }));
    if (notificationPreferences) {
      const updatedContent = JSON.parse(notificationPreferences.Content || '{}');
      updatedContent.communicationChannels = { ...updatedContent.communicationChannels, [notificationType]: channel };
      updateNotification(
        {
          data: { Content: JSON.stringify(updatedContent) },
          filter: { id: { equals: notificationPreferences.Id } }
        },
        {
          onSuccess: () => {
            showAlert({ title: 'Success', message: 'Communication channel updated', severity: 'success' });
          },
          onError: () => {
            showAlert({ title: 'Error', message: 'Failed to update communication channel', severity: 'error' });
          }
        }
      );
    }
  }, [notificationPreferences, updateNotification, showAlert]);

  const handleSavePreferences = useCallback(() => {
    if (notificationPreferences) {
      const updatedContent = JSON.parse(notificationPreferences.Content || '{}');
      updatedContent.quietHours = { start: quietHoursStart, end: quietHoursEnd };
      updatedContent.notificationTypes = notificationTypes;
      updatedContent.communicationChannels = communicationChannels;
      updateNotification(
        {
          data: { Content: JSON.stringify(updatedContent) },
          filter: { id: { equals: notificationPreferences.Id } }
        },
        {
          onSuccess: () => {
            showAlert({ title: 'Success', message: 'All preferences saved successfully', severity: 'success' });
          },
          onError: () => {
            showAlert({ title: 'Error', message: 'Failed to save preferences', severity: 'error' });
          }
        }
      );
    }
  }, [notificationPreferences, quietHoursStart, quietHoursEnd, notificationTypes, communicationChannels, updateNotification, showAlert]);

  return (
    <NotificationPreferencesComponent
      notificationPreferences={notificationPreferences}
      quietHoursStart={quietHoursStart}
      quietHoursEnd={quietHoursEnd}
      notificationTypes={notificationTypes}
      communicationChannels={communicationChannels}
      isLoading={isNotificationListLoading || isUpdateNotificationPending}
      handleToggleNotifications={handleToggleNotifications}
      handleQuietHoursChange={handleQuietHoursChange}
      handleNotificationTypeToggle={handleNotificationTypeToggle}
      handleCommunicationChannelChange={handleCommunicationChannelChange}
      handleSavePreferences={handleSavePreferences}
    />
  );
}

NotificationPreferencesPresenter.layout = 'AppLayout';
NotificationPreferencesPresenter.auth = true;