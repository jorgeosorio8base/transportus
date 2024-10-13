import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, ScrollShadow } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DailyScheduleDashboardComponent({
  shipmentsDataState,
  sortOrder,
  searchTerm,
  handleSearchTerm,
  handleSortOrder,
  currentUser,
  filteredShipments,
  scheduledStops,
  estimatedCompletionTime,
  totalDistance,
  numberOfStops
}: DailyScheduleDashboardComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <div className="col-span-12">
        <Card className="w-full sticky top-0 z-10 shadow-md">
          <CardBody className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon icon="ph:calendar-fill" className="text-2xl text-[hsl(var(--app-primary-500))]" />
                <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
                  Daily Schedule Dashboard
                </h1>
              </div>
              <div className="text-sm text-[hsl(var(--app-foreground-600))]">
                <p>Stops: {numberOfStops}</p>
                <p>Estimated Completion: {estimatedCompletionTime}</p>
              </div>
            </div>
            {currentUser && (
              <p className="text-sm text-[hsl(var(--app-foreground-600))] mt-2">
                Welcome, {currentUser.FirstName ?? 'User'} {currentUser.LastName ?? ''}
              </p>
            )}
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <Card isHoverable className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-bold">Today's Timeline</h2>
          </CardHeader>
          <CardBody>
            <ScrollShadow className="h-64">
              {filteredShipments.map((shipment, index) => (
                <div key={shipment.Id} className={`p-2 mb-2 rounded ${index % 2 === 0 ? 'bg-[hsl(var(--app-primary-100))]' : 'bg-[hsl(var(--app-secondary-100))]'}`}>
                  <p className="font-semibold">{new Date(shipment.UpdatedAt || '').toLocaleTimeString()}</p>
                  <p>{index % 2 === 0 ? 'Pickup' : 'Delivery'}: {shipment.Origin || shipment.Destination}</p>
                </div>
              ))}
            </ScrollShadow>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <Card isHoverable className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-bold">Route Map</h2>
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-center h-64 bg-gray-200 rounded">
              <Icon icon="ph:map-trifold" width="48" height="48" />
              <p className="ml-2">Map Placeholder</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <Card isHoverable className="w-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)]">
          <CardHeader>
            <h2 className="text-lg font-bold">Scheduled Stops</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Scheduled stops table" classNames={{ base: "overflow-x-auto" }}>
              <TableHeader>
                <TableColumn>Time</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Client</TableColumn>
                <TableColumn>Address</TableColumn>
                <TableColumn>Status</TableColumn>
              </TableHeader>
              <TableBody>
                {scheduledStops.map((stop, index) => (
                  <TableRow key={index}>
                    <TableCell>{stop.time}</TableCell>
                    <TableCell>{stop.type}</TableCell>
                    <TableCell>{stop.client}</TableCell>
                    <TableCell>{stop.address}</TableCell>
                    <TableCell>
                      <Chip
                        color={stop.status === 'Pending' ? 'warning' : stop.status === 'En Route' ? 'primary' : 'success'}
                        className={`bg-[hsl(var(--app-${stop.status === 'Pending' ? 'warning' : stop.status === 'En Route' ? 'primary' : 'success'}-100))] text-[hsl(var(--app-${stop.status === 'Pending' ? 'warning' : stop.status === 'En Route' ? 'primary' : 'success'}-900))]`}
                      >
                        {stop.status}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-4">
        <Card isHoverable className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)] p-4">
          <CardBody>
            <div className="flex items-center">
              <Icon icon="ph:clock" width="24" height="24" />
              <h3 className="text-md font-semibold ml-2">Estimated Completion Time</h3>
            </div>
            <p className="text-2xl font-bold mt-2">{estimatedCompletionTime}</p>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-4">
        <Card isHoverable className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)] p-4">
          <CardBody>
            <div className="flex items-center">
              <Icon icon="ph:ruler" width="24" height="24" />
              <h3 className="text-md font-semibold ml-2">Total Distance</h3>
            </div>
            <p className="text-2xl font-bold mt-2">{totalDistance}</p>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-4">
        <Card isHoverable className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-small)] p-4">
          <CardBody>
            <div className="flex items-center">
              <Icon icon="ph:map-pin" width="24" height="24" />
              <h3 className="text-md font-semibold ml-2">Number of Stops</h3>
            </div>
            <p className="text-2xl font-bold mt-2">{numberOfStops}</p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
