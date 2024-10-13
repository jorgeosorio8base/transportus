import React from 'react';
import { NotificationPreferencesTitle } from './NotificationPreferencesTitle';
import { GeneralSettingsCard } from './GeneralSettingsCard';
import { NotificationTypesCard } from './NotificationTypesCard';
import { CommunicationChannelsCard } from './CommunicationChannelsCard';
import { AutomatedNotificationsCard } from './AutomatedNotificationsCard';
import { ActionsContainer } from './ActionsContainer';

export function NotificationPreferencesComponent({
  notificationPreferences,
  quietHoursStart,
  quietHoursEnd,
  notificationTypes,
  communicationChannels,
  isLoading,
  handleToggleNotifications,
  handleQuietHoursChange,
  handleNotificationTypeToggle,
  handleCommunicationChannelChange,
  handleSavePreferences
}: NotificationPreferencesComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <NotificationPreferencesTitle isLoading={isLoading} />
        </div>
        
        <div className="col-span-12 lg:col-span-6">
          <GeneralSettingsCard
            notificationPreferences={notificationPreferences}
            quietHoursStart={quietHoursStart}
            quietHoursEnd={quietHoursEnd}
            notificationTypes={notificationTypes}
            communicationChannels={communicationChannels}
            isLoading={isLoading}
            handleToggleNotifications={handleToggleNotifications}
            handleQuietHoursChange={handleQuietHoursChange}
            handleNotificationTypeToggle={handleNotificationTypeToggle}
            handleCommunicationChannelChange={handleCommunicationChannelChange}
            handleSavePreferences={handleSavePreferences}
          />
        </div>
        
        <div className="col-span-12 lg:col-span-6">
          <NotificationTypesCard
            notificationTypes={notificationTypes}
            isLoading={isLoading}
            error={null}
            handleNotificationTypeToggle={handleNotificationTypeToggle}
          />
        </div>
        
        <div className="col-span-12">
          <CommunicationChannelsCard
            notificationPreferences={notificationPreferences}
            communicationChannels={communicationChannels}
            isLoading={isLoading}
            handleCommunicationChannelChange={handleCommunicationChannelChange}
          />
        </div>
        
        <div className="col-span-12">
          <AutomatedNotificationsCard
            notificationPreferences={notificationPreferences}
            isLoading={isLoading}
          />
        </div>
        
        <div className="col-span-12">
          <ActionsContainer
            isLoading={isLoading}
            handleSavePreferences={handleSavePreferences}
            handleCancel={() => console.log('Cancel clicked')}
          />
        </div>
      </div>
    </main>
  );
}
