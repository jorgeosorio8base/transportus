import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, CircularProgress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { DriverRouteViewComponentProps, ShipmentEntity } from './';

export function DriverRouteViewComponent({
  shipments,
  shipmentsCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onSortOrderChange,
  onMarkAsDelivered,
  onReportIssue,
  onContactSupport,
  currentUser
}: DriverRouteViewComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] min-h-screen">
      <section className="col-span-12">
        <Card shadow="sm" radius="lg" className="w-full mb-4 bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-900))]">
          <CardHeader className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Driver Route View</h1>
            {currentUser ? (
              <div className="flex items-center">
                <Icon icon="ph:user-circle-gear" className="w-6 h-6 mr-2 text-[hsl(var(--app-primary-500))]" />
                <span>{`${currentUser.FirstName} ${currentUser.LastName}`}</span>
              </div>
            ) : (
              <span className="text-[hsl(var(--app-foreground-600))]">User not available</span>
            )}
          </CardHeader>
          <CardBody>
            <div className="flex items-center">
              <Icon icon="ph:map-pin" className="w-6 h-6 mr-2 text-[hsl(var(--app-primary-500))]" />
              <span className="font-semibold">Current Route:</span>
              <span className="ml-2">{shipmentsCount} stops</span>
            </div>
            <div className="mt-2">
              {shipments.length > 0 ? (
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                  Next stop: {shipments[0].Destination}
                </p>
              ) : (
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                  No upcoming stops
                </p>
              )}
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-8">
        <div className="w-full h-[300px] md:h-[500px] rounded-[var(--nextui-radius-medium)] overflow-hidden bg-[hsl(var(--app-background-100))]">
          <div className="w-full h-full flex items-center justify-center" aria-label="Interactive Map Placeholder">
            <Icon icon="ph:map-trifold-fill" width="48" height="48" aria-hidden="true" />
            <span className="ml-2">Interactive Map Placeholder</span>
          </div>
        </div>
      </section>

      <section className="col-span-12 md:col-span-4 flex flex-col gap-4">
        <Card isHoverable className="w-full h-full bg-[hsl(var(--app-background-0))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader className="border-b border-[hsl(var(--app-border-100))]">
            <h2 className="text-lg font-semibold">Current Route</h2>
          </CardHeader>
          <CardBody className="overflow-auto">
            <Input
              type="search"
              placeholder="Search shipments"
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              className="mb-4"
            />
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <CircularProgress aria-label="Loading shipments..." />
              </div>
            ) : shipments.length === 0 ? (
              <p className="text-center text-[hsl(var(--app-foreground-600))]">No shipments available</p>
            ) : (
              <ul className="list-none p-0 m-0">
                {shipments.map((shipment: ShipmentEntity, index: number) => (
                  <li key={shipment.Id} className="flex items-center p-4 border-b border-[hsl(var(--app-border-50))] hover:bg-[hsl(var(--app-background-100))] transition-colors">
                    <Icon
                      icon={index === 0 ? "ph:map-pin-fill" : "ph:map-pin"}
                      className="w-6 h-6 mr-4 text-[hsl(var(--app-primary-500))]"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[hsl(var(--app-foreground-900))]">{shipment.Destination}</p>
                      <p className="text-xs text-[hsl(var(--app-foreground-600))]">
                        {index === 0 ? 'Current Stop' : `ETA: ${new Date().toLocaleTimeString()}`}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="text-lg font-bold">Delivery Instructions</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {shipments.length > 0 && shipments[0].deliveryInstructions ? (
              <ul className="list-none p-0 m-0">
                {shipments[0].deliveryInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2 mb-3">
                    <Icon
                      icon={instruction.type === 'warning' ? 'ph:warning' : 'ph:info'}
                      className={`text-xl ${instruction.type === 'warning' ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-primary-500))']}`}
                      width="24"
                      height="24"
                      aria-hidden={instruction.text ? 'true' : 'false'}
                    />
                    <span>{instruction.text}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[hsl(var(--app-foreground-500))]">No delivery instructions available.</p>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full py-4">
          <Button
            variant="solid"
            color="success"
            onPress={onMarkAsDelivered}
            startContent={<Icon icon="ph:check-circle-bold" className="text-lg" />}
            isDisabled={isLoading}
            isLoading={isLoading}
            spinner={<Icon icon="ph:circle-notch-bold" className="animate-spin text-lg" />}
            className="font-medium text-sm px-4 py-2 w-full sm:w-auto hover:bg-success-600 focus:ring-2 focus:ring-success-500"
            aria-label="Mark current delivery as completed"
          >
            Mark as Delivered
          </Button>
          <Button
            variant="solid"
            color="warning"
            onPress={onReportIssue}
            startContent={<Icon icon="ph:warning-circle-bold" className="text-lg" />}
            isDisabled={isLoading}
            isLoading={isLoading}
            spinner={<Icon icon="ph:circle-notch-bold" className="animate-spin text-lg" />}
            className="font-medium text-sm px-4 py-2 w-full sm:w-auto hover:bg-warning-600 focus:ring-2 focus:ring-warning-500"
            aria-label="Report an issue with the current delivery"
          >
            Report Issue
          </Button>
          <Button
            variant="solid"
            color="primary"
            onPress={onContactSupport}
            startContent={<Icon icon="ph:phone-bold" className="text-lg" />}
            isDisabled={isLoading}
            isLoading={isLoading}
            spinner={<Icon icon="ph:circle-notch-bold" className="animate-spin text-lg" />}
            className="font-medium text-sm px-4 py-2 w-full sm:w-auto hover:bg-primary-600 focus:ring-2 focus:ring-primary-500"
            aria-label="Contact support for assistance with your current delivery"
          >
            Contact Support
          </Button>
        </div>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)]">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-[hsl(var(--app-foreground-900))] text-lg font-semibold">Real-time Updates</h2>
            <Icon
              icon="ph:arrows-clockwise"
              className="text-[hsl(var(--app-primary-500))] text-xl cursor-pointer"
              onClick={() => {/* Implement refresh logic */}}
            />
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="w-full h-20 rounded-lg bg-[hsl(var(--app-background-200))] animate-pulse" />
                ))}
              </div>
            ) : shipments.length === 0 ? (
              <div className="text-[hsl(var(--app-foreground-600))] flex flex-col items-center space-y-2">
                <Icon icon="ph:traffic-sign" className="text-4xl" />
                <p>No updates available at the moment.</p>
                <p>Check back later for new route information.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {shipments.map((shipment) => (
                  <li
                    key={shipment.Id}
                    className="flex items-center space-x-3 p-3 bg-[hsl(var(--app-background-100))] rounded-lg border border-[hsl(var(--app-background-200))]"
                  >
                    <Icon
                      icon="ph:traffic-signal"
                      className="text-[hsl(var(--app-primary-500))] text-2xl"
                      aria-hidden="true"
                    />
                    <div className="flex-grow">
                      <p className="text-[hsl(var(--app-foreground-900))] font-medium">
                        {shipment.Origin} to {shipment.Destination}
                      </p>
                      <p className="text-[hsl(var(--app-foreground-600))] text-sm">
                        Priority: {shipment.Priority}
                      </p>
                      <p className="text-[hsl(var(--app-foreground-500))] text-xs">
                        Updated: {new Date(shipment.UpdatedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]">
                        In Transit
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
