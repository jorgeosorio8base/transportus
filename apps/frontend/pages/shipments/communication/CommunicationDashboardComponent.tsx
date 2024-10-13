import React from 'react';
import { Card, CardHeader, CardBody, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, CircularProgress, Input, Badge, Avatar } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { CommunicationDashboardComponentProps } from './';

export function CommunicationDashboardComponent({
  notifications,
  notificationsCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onSortOrderChange,
  onCompose,
  onFilter,
  currentUser
}: CommunicationDashboardComponentProps) {
  const handleSortChange = (key: string) => {
    onSortOrderChange([{ field: 'createdAt', direction: key === 'date_desc' ? 'DESC' : 'ASC' }]);
  };

  return (
    <main className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6">
      <header className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Communication Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input
              label="Search notifications"
              placeholder="Type to search..."
              value={searchTerm}
              onValueChange={onSearchTermChange}
              startContent={<Icon icon="ph:magnifying-glass" />}
              className="w-64"
            />
            <Button
              color="primary"
              variant="solid"
              onClick={onCompose}
              startContent={<Icon icon="ph:plus" />}
              isLoading={isLoading}
            >
              Compose
            </Button>
            <Avatar
              src={currentUser?.Avatar?.toString()}
              name={`${currentUser?.FirstName} ${currentUser?.LastName}`}
              size="md"
              color="primary"
              isBordered
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-[hsl(var(--app-background-100))]" shadow="sm" radius="lg">
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Alerts</h2>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <CircularProgress aria-label="Loading recent alerts" />
            ) : notifications && notifications.length > 0 ? (
              <ul>
                {notifications.slice(0, 2).map((notification, index) => (
                  <li key={notification.Id || index} className="flex items-center gap-2 py-2">
                    <Icon icon={index % 2 === 0 ? "ph:warning-fill" : "ph:info-fill"} 
                          className={index % 2 === 0 ? "text-[hsl(var(--app-warning-500))]" : "text-[hsl(var(--app-primary-500))]"}  
                          aria-label={index % 2 === 0 ? "Warning alert" : "Info alert"} />
                    <span>{notification.Content}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent alerts</p>
            )}
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-100))]" shadow="sm" radius="lg">
          <CardHeader>
            <h2 className="text-xl font-semibold">Shipment Updates</h2>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <CircularProgress aria-label="Loading shipment updates" />
            ) : notifications && notifications.length > 0 ? (
              <ul>
                {notifications.slice(0, 2).map((notification, index) => (
                  <li key={notification.Id || index} className="flex items-center gap-2 py-2">
                    <Icon icon="ph:truck-fill" className="text-[hsl(var(--app-primary-500))]" aria-label="Shipment update" />
                    <span>{notification.Content}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No shipment updates</p>
            )}
          </CardBody>
        </Card>
      </div>

      <Card className="mb-6 bg-[hsl(var(--app-background-100))]" shadow="sm" radius="lg">
        <CardHeader>
          <h2 className="text-xl font-semibold">Message Feed</h2>
        </CardHeader>
        <CardBody>
          {isLoading ? (
            <CircularProgress aria-label="Loading messages" />
          ) : notifications && notifications.length > 0 ? (
            <ul>
              {notifications.map((notification, index) => (
                <li key={notification.Id || index} className="flex flex-col gap-1 py-3 border-b border-[hsl(var(--app-background-200))]">
                  <div className="font-semibold">{currentUser?.FirstName} {currentUser?.LastName}</div>
                  <div>{notification.Content}</div>
                  <div className="text-sm text-[hsl(var(--app-foreground-500))]">Sent at: {notification.SentAt}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No messages</p>
          )}
        </CardBody>
      </Card>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" aria-label="Filter and sort options">Options</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Filter and sort options">
            <DropdownSection title="Filter" showDivider>
              <DropdownItem key="all" onPress={() => onFilter('all')}>All</DropdownItem>
              <DropdownItem key="alerts" onPress={() => onFilter('alerts')}>Alerts</DropdownItem>
              <DropdownItem key="updates" onPress={() => onFilter('updates')}>Updates</DropdownItem>
              <DropdownItem key="messages" onPress={() => onFilter('messages')}>Messages</DropdownItem>
            </DropdownSection>
            <DropdownSection title="Sort">
              <DropdownItem key="date_desc" onPress={() => handleSortChange('date_desc')}>Newest First</DropdownItem>
              <DropdownItem key="date_asc" onPress={() => handleSortChange('date_asc')}>Oldest First</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </main>
  );
}
