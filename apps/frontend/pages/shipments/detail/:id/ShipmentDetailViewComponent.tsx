import React from 'react';
import { Card, CardBody, CardHeader, Tooltip, Spinner, Badge, Pagination, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ShipmentDetailViewComponentProps } from '@transportus/core';

export function ShipmentDetailViewComponent({
  headerProps,
  infoCardProps,
  trackingHistoryCardProps,
  actionsCardProps,
  routeInformationCardProps
}: ShipmentDetailViewComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      <section className="col-span-12">
        <header className="flex justify-between items-center py-4 px-4 border-b border-[hsl(var(--app-background-300))]">
          <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))]">
            Shipment #{headerProps.shipmentNumber || 'N/A'}
          </h1>
          {headerProps.status && (
            <Badge
              content={
                <>
                  <Icon icon="ph:package-fill" className="mr-2" />
                  {headerProps.status}
                </>
              }
              color="primary"
              variant="flat"
              size="lg"
              className="text-lg px-3 py-1"
            />
          )}
        </header>
      </section>

      <section className="col-span-12 lg:col-span-8">
        <Card className="w-full h-full bg-[var(--app-background-50)] shadow-md">
          <CardHeader className="flex justify-between items-center p-4 border-b border-[hsl(var(--nextui-border))]">
            <h2 className="text-xl font-bold">Shipment Details</h2>
          </CardHeader>
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoItem label="Origin" value={infoCardProps.origin} iconName="map-pin" />
              <InfoItem label="Destination" value={infoCardProps.destination} iconName="map-pin" />
              <InfoItem label="Estimated Delivery" value={infoCardProps.estimatedDelivery} iconName="calendar" />
              <InfoItem label="Client" value={infoCardProps.client} iconName="user" />
            </div>
            {infoCardProps.packageSpecs && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3">Package Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {infoCardProps.packageSpecs.split(',').map((spec, index) => {
                    const [key, value] = spec.split(':');
                    return (
                      <div key={index} className="flex flex-col">
                        <span className="text-sm font-medium text-[hsl(var(--nextui-foreground-600))]">{key.trim()}</span>
                        <span className="text-base font-semibold">{value.trim()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 lg:col-span-4">
        <Card className="w-full h-full bg-[var(--app-background-50)] shadow-md">
          <CardBody>
            <h3 className="text-xl font-semibold text-[var(--app-foreground-900)] mb-4">Actions</h3>
            <div className="grid grid-cols-1 gap-2">
              <Button
                color="primary"
                variant="solid"
                className="flex items-center justify-center gap-2"
                onClick={() => actionsCardProps.onUpdateStatus('new_status')}
                startContent={<Icon icon="ph:pencil-simple" />}
              >
                Update Status
              </Button>
              <Button
                color="secondary"
                variant="solid"
                className="flex items-center justify-center gap-2"
                onClick={actionsCardProps.onContactDriver}
                startContent={<Icon icon="ph:phone-call" />}
              >
                Contact Driver
              </Button>
              <Button
                color="success"
                variant="solid"
                className="flex items-center justify-center gap-2"
                onClick={actionsCardProps.onContactClient}
                startContent={<Icon icon="ph:user-circle" />}
              >
                Contact Client
              </Button>
              <Button
                color="warning"
                variant="solid"
                className="flex items-center justify-center gap-2"
                onClick={actionsCardProps.onReportIssue}
                startContent={<Icon icon="ph:warning-circle" />}
              >
                Report Issue
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[var(--app-background-50)] shadow-md p-4 sm:p-6 mb-4">
          <CardHeader>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--app-foreground-900)] mb-2">
              Tracking History ({trackingHistoryCardProps.totalCount} events)
            </h2>
          </CardHeader>
          <CardBody className="max-h-[400px] overflow-y-auto">
            <ol className="relative border-l border-[var(--app-background-200)] space-y-4">
              {trackingHistoryCardProps.statusUpdates.map((update, index) => (
                <li key={update.Id || index} className="ml-4 transition-all duration-200 ease-in-out hover:bg-[var(--app-background-100)] active:bg-[var(--app-background-200)] p-2 rounded-md">
                  <div className="absolute w-3 h-3 bg-[var(--app-primary-500)] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-[var(--app-foreground-500)]">
                    {new Date(update.Timestamp || '').toLocaleString()}
                  </time>
                  <h3 className="text-lg font-semibold text-[var(--app-foreground-800)]">
                    {update.Status}
                  </h3>
                  <Tooltip content={update.Status}>
                    <div className="mt-2 flex items-center">
                      <Icon
                        icon={getStatusIcon(update.Status || '')}
                        className="w-6 h-6 text-[var(--app-primary-500)]"
                        aria-label={`Status: ${update.Status}`}
                      />
                      <span className="ml-2 text-sm text-[var(--app-foreground-600)]">
                        {getStatusDescription(update.Status || '')}
                      </span>
                    </div>
                  </Tooltip>
                </li>
              ))}
            </ol>
          </CardBody>
          <div className="flex justify-center mt-4">
            <Pagination
              total={Math.ceil(trackingHistoryCardProps.totalCount / trackingHistoryCardProps.itemsPerPage)}
              page={trackingHistoryCardProps.currentPage}
              onChange={trackingHistoryCardProps.onPageChange}
            />
          </div>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="w-full bg-[var(--app-background-50)] shadow-md">
          <CardBody className="flex flex-col gap-6 p-6">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">
              Route Information
            </h2>
            <div className="w-full aspect-[16/9] bg-[hsl(var(--app-background-100))] rounded-md flex items-center justify-center hover:bg-[hsl(var(--app-background-200))] transition-colors duration-300">
              <Icon
                icon="ph:map-trifold"
                className="w-16 h-16 text-[hsl(var(--app-primary-500))]"
                aria-hidden="true"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RouteInfoItem icon="map-pin" label="Current Location" value={routeInformationCardProps.currentLocation} />
              <RouteInfoItem icon="map-pin" label="Next Stop" value={routeInformationCardProps.nextStop} />
              <RouteInfoItem icon="map-trifold" label="Distance Traveled" value={routeInformationCardProps.distanceTraveled} />
              <RouteInfoItem icon="map-trifold" label="Remaining Distance" value={routeInformationCardProps.remainingDistance} />
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

function InfoItem({ label, value, iconName }: { label: string; value?: string; iconName: string }) {
  return (
    <Tooltip content={`${label}: ${value || 'N/A'}`}>
      <div className="flex items-start">
        <Icon icon={`ph:${iconName}`} className="text-[hsl(var(--nextui-primary-500))] text-xl mr-2 mt-1" />
        <div>
          <span className="text-sm font-medium text-[hsl(var(--nextui-foreground-600))]">{label}</span>
          <p className="text-base font-semibold truncate">{value || 'N/A'}</p>
        </div>
      </div>
    </Tooltip>
  );
}

function RouteInfoItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 group hover:bg-[hsl(var(--app-background-100))] p-2 rounded-md transition-colors duration-300">
      <Badge
        startContent={
          <Icon
            icon={`ph:${icon}`}
            className="w-4 h-4"
            aria-hidden="true"
          />
        }
        variant="flat"
        color="primary"
        className="mr-2"
      >
        {label}
      </Badge>
      <span className="text-sm font-semibold text-[hsl(var(--app-foreground-900))] ml-auto group-hover:text-[hsl(var(--app-primary-500))] transition-colors duration-300">
        {value}
      </span>
    </div>
  );
}

function getStatusIcon(status: string): string {
  switch (status.toLowerCase()) {
    case 'shipped':
      return 'ph:package-fill';
    case 'in transit':
      return 'ph:truck-fill';
    case 'delivered':
      return 'ph:check-circle-fill';
    case 'delayed':
      return 'ph:clock-fill';
    default:
      return 'ph:question-fill';
  }
}

function getStatusDescription(status: string): string {
  switch (status.toLowerCase()) {
    case 'shipped':
      return 'Package has been shipped';
    case 'in transit':
      return 'Package is on its way';
    case 'delivered':
      return 'Package has been delivered';
    case 'delayed':
      return 'Package is experiencing a delay';
    default:
      return 'Status unknown';
  }
}