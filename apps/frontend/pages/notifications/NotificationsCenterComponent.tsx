import React from 'react';
import { Button, Checkbox, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Skeleton, Chip, Tooltip } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { NotificationsCenterComponentProps } from './';

export function NotificationsCenterComponent({
  notifications,
  notificationsCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onMarkAllAsRead,
  notificationPreferences,
  onPreferenceChange,
  onSavePreferences,
  notificationHistoryData,
  currentUser
}: NotificationsCenterComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      <section className="col-span-12 bg-[hsl(var(--app-background-100))] rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Icon
              icon="ph:notification-bold"
              className="text-[hsl(var(--app-primary-500))] mr-3"
              width="28"
              height="28"
            />
            <h1 className="text-[hsl(var(--app-foreground-900))] font-bold text-2xl md:text-3xl lg:text-4xl">
              Notifications Center
            </h1>
            {isLoading ? (
              <Spinner size="sm" color="primary" className="ml-3" />
            ) : (
              <span className="ml-3 text-[hsl(var(--app-foreground-600))] text-lg md:text-xl">
                ({notificationsCount})
              </span>
            )}
          </div>
          <Button
            auto
            variant="light"
            onPress={onMarkAllAsRead}
            className="text-[hsl(var(--app-primary-500))] hover:text-[hsl(var(--app-primary-600)])"
            disabled={isLoading}
          >
            Mark All as Read
          </Button>
        </div>
      </section>

      <section className="col-span-12 md:col-span-8 bg-[hsl(var(--app-background-50))] rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
              Recent Notifications
            </h2>
            {notificationsCount > 0 && (
              <Chip color="primary" size="sm">{notificationsCount}</Chip>
            )}
          </div>
          <Tooltip content="Mark all notifications as read" placement="top">
            <Button
              size="sm"
              color="primary"
              variant="flat"
              onPress={onMarkAllAsRead}
              isDisabled={isLoading || notificationsCount === 0}
              aria-label="Mark all notifications as read"
            >
              Mark All as Read
            </Button>
          </Tooltip>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner size="lg" color="primary" />
          </div>
        ) : notifications.length === 0 ? (
          <p className="text-center text-[hsl(var(--app-foreground-500))]">
            No new notifications
          </p>
        ) : (
          <ul className="space-y-3 max-h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <li
                key={notification.Id}
                className="bg-white p-3 rounded-md transition-colors duration-200 hover:bg-gray-50 animate-fadeIn"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--app-primary-100))] flex items-center justify-center">
                    <Icon icon="ph:bell-ringing-fill" className="text-[hsl(var(--app-primary-500))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-900))] mb-1">
                      New Notification
                    </h3>
                    <p className="text-xs text-[hsl(var(--app-foreground-600))]">
                      {notification.Content}
                    </p>
                  </div>
                  <span className="text-xs text-[hsl(var(--app-foreground-500))] whitespace-nowrap">
                    {new Date(notification.CreatedAt).toLocaleString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="col-span-12 md:col-span-4 bg-[hsl(var(--app-background-50))] rounded-lg shadow-md p-6">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900)])">Notification Preferences</h2>
          <div className="flex flex-col gap-3">
            <Checkbox
              isSelected={notificationPreferences.email}
              onValueChange={() => onPreferenceChange('email')}
              color="primary"
              icon={<Icon icon="ph:envelope-simple-bold" className="text-lg" />}
              isRequired
              disableAnimation
            >
              Email Notifications
            </Checkbox>
            <Checkbox
              isSelected={notificationPreferences.sms}
              onValueChange={() => onPreferenceChange('sms')}
              color="primary"
              icon={<Icon icon="ph:device-mobile-bold" className="text-lg" />}
              isRequired
              disableAnimation
            >
              SMS Notifications
            </Checkbox>
            <Checkbox
              isSelected={notificationPreferences.push}
              onValueChange={() => onPreferenceChange('push')}
              color="primary"
              icon={<Icon icon="ph:bell-simple-bold" className="text-lg" />}
              isRequired
              disableAnimation
            >
              Push Notifications
            </Checkbox>
          </div>
          <Button
            color="primary"
            onPress={onSavePreferences}
            isLoading={isLoading}
            isDisabled={isLoading}
            className="mt-2"
            aria-label="Save notification preferences"
          >
            Save Preferences
          </Button>
        </form>
      </section>

      <section className="col-span-12 bg-[hsl(var(--app-background-50))] rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
            Notification History
          </h2>
          <Button
            color="primary"
            variant="flat"
            onPress={onMarkAllAsRead}
            className="px-4 py-2 rounded-md transition-colors"
          >
            Mark All as Read
          </Button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="w-full p-2 border border-[hsl(var(--app-background-200))] rounded-md"
          />
        </div>
        <Table
          aria-label="Notification history table"
          className="w-full border-[hsl(var(--app-background-200))]"
          sortDescriptor={{ column: 'date', direction: 'descending' }}
        >
          <TableHeader>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>MESSAGE</TableColumn>
            <TableColumn>DATE</TableColumn>
          </TableHeader>
          <TableBody 
            emptyContent={isLoading ? "Loading..." : "No notifications found"}
            isLoading={isLoading}
            loadingContent={<Skeleton className="w-full h-20" />}
          >
            {notificationHistoryData.map((notification, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon={notification.type.toLowerCase().includes('delivery') ? 'ph:package' : 
                                 notification.type.toLowerCase().includes('system') ? 'ph:gear' : 
                                 notification.type.toLowerCase().includes('client') ? 'ph:user' : 'ph:bell'} />
                    {notification.type}
                  </div>
                </TableCell>
                <TableCell>{notification.message}</TableCell>
                <TableCell>{new Date(notification.date).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right text-sm text-[hsl(var(--app-foreground-600))]">
          Total notifications: {notificationsCount}
        </div>
      </section>
    </main>
  );
}
