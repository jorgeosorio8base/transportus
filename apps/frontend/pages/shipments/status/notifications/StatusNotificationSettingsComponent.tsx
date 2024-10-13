import React from 'react';
import { Card, CardBody, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { StatusNotificationSettingsComponentProps } from './';

export function StatusNotificationSettingsComponent({
  notificationSettings,
  customAlerts,
  notificationList,
  notificationCount,
  isNotificationsLoading,
  onNotificationTypeChange,
  onNotificationMethodChange,
  onFrequencyChange,
  onAddCustomAlert,
  onDeleteCustomAlert,
  onSaveSettings
}: StatusNotificationSettingsComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)]">
            <CardBody className="p-6">
              <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Status Notification Settings</h1>
              <p className="text-[hsl(var(--app-foreground-500))] mb-4">
                Configure your notification preferences for package status updates. Choose which types of status changes you want to be notified about, select your preferred notification methods, and set the frequency of notifications.
              </p>
              <div className="flex items-center" aria-live="polite" aria-atomic="true">
                <Icon icon="ph:bell-ringing" className="text-[hsl(var(--app-primary-500))] text-xl mr-2" aria-hidden="true" />
                <span className="text-sm text-[hsl(var(--app-foreground-700))]">
                  {isNotificationsLoading ? 'Loading notifications...' : `${notificationCount} active notifications`}
                </span>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <Card className="h-full bg-[hsl(var(--app-background-50))] border border-[hsl(var(--app-foreground-200))] appShadow-[var(--app-box-shadow-medium)]">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-6">General Notification Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--app-foreground-800))] mb-2">Notification Types</h3>
                  {['Package Shipped', 'In Transit', 'Out for Delivery', 'Delivered', 'Delayed'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 mb-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.notificationTypes.includes(type)}
                        onChange={(e) => onNotificationTypeChange(type, e.target.checked)}
                        className="form-checkbox text-[hsl(var(--app-primary-500))] h-5 w-5"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--app-foreground-800))] mb-2">Notification Methods</h3>
                  {['Email', 'SMS', 'In-app'].map((method) => (
                    <label key={method} className="flex items-center space-x-2 mb-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.notificationMethods.includes(method)}
                        onChange={(e) => onNotificationMethodChange(method, e.target.checked)}
                        className="form-checkbox text-[hsl(var(--app-primary-500))] h-5 w-5"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--app-foreground-800))] mb-2">Notification Frequency</h3>
                  <select
                    value={notificationSettings.frequency}
                    onChange={(e) => onFrequencyChange(e.target.value)}
                    className="form-select mt-1 block w-full pl-3 pr-10 py-2 text-base border-[hsl(var(--app-foreground-300))] focus:outline-none focus:ring-[hsl(var(--app-primary-500))] focus:border-[hsl(var(--app-primary-500))] sm:text-sm rounded-md"
                  >
                    {['Real-time', 'Hourly', 'Daily', 'Weekly'].map((freq) => (
                      <option key={freq} value={freq.toLowerCase()}>{freq}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full bg-[hsl(var(--app-background-50))] border border-[hsl(var(--app-foreground-200))] appShadow-[var(--app-box-shadow-medium)]">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Custom Alerts</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Package ID"
                  className="w-full px-3 py-2 border border-[hsl(var(--app-foreground-300))] rounded-md focus:outline-none focus:ring-[hsl(var(--app-primary-500))] focus:border-[hsl(var(--app-primary-500))]"
                />
                <input
                  type="text"
                  placeholder="Client Name"
                  className="w-full px-3 py-2 border border-[hsl(var(--app-foreground-300))] rounded-md focus:outline-none focus:ring-[hsl(var(--app-primary-500))] focus:border-[hsl(var(--app-primary-500))]"
                />
                <select
                  className="w-full px-3 py-2 border border-[hsl(var(--app-foreground-300))] rounded-md focus:outline-none focus:ring-[hsl(var(--app-primary-500))] focus:border-[hsl(var(--app-primary-500))]"
                >
                  <option value="">Select Alert Type</option>
                  <option value="status_change">Status Change</option>
                  <option value="delivery_delay">Delivery Delay</option>
                  <option value="location_update">Location Update</option>
                </select>
                <Button
                  color="primary"
                  className="w-full"
                  onClick={() => onAddCustomAlert({ id: Date.now().toString(), packageId: '', clientName: '', alertType: '' })}
                >
                  Add Custom Alert
                </Button>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-[hsl(var(--app-foreground-800))] mb-2">Current Alerts</h3>
                {customAlerts.map((alert) => (
                  <div key={alert.id} className="flex justify-between items-center p-2 bg-[hsl(var(--app-background-100))] rounded mb-2">
                    <span>{alert.packageId} - {alert.clientName}</span>
                    <Button
                      size="sm"
                      color="danger"
                      variant="light"
                      onClick={() => onDeleteCustomAlert(alert.id)}
                    >
                      <Icon icon="ph:trash" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 flex justify-end">
          <Button
            color="primary"
            size="lg"
            className="save-settings-button"
            onClick={onSaveSettings}
            disabled={isNotificationsLoading}
          >
            {isNotificationsLoading ? 'Saving...' : 'Save Settings'}
          </Button>
        </section>
      </div>
    </main>
  );
}
