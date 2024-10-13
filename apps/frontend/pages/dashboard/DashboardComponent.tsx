import React from 'react';
import { Card, CardHeader, CardBody, Button, CircularProgress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { DashboardComponentProps } from '@transportus/core';

export function DashboardComponent({
  shipments,
  shipmentCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  keyMetrics,
  currentUser,
  onCreateNewShipment,
  onUpdatePackageStatus,
  onSendNotification,
  onGenerateReport
}: DashboardComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: 'Active Shipments', value: keyMetrics.activeShipments, icon: 'ph:package-fill' },
            { title: 'On-Time Deliveries', value: `${keyMetrics.onTimeDeliveries}%`, icon: 'ph:check-circle' },
            { title: 'Avg. Delivery Time', value: `${keyMetrics.avgDeliveryTime.toFixed(1)} days`, icon: 'ph:clock-countdown' },
            { title: 'Customer Satisfaction', value: `${keyMetrics.customerSatisfaction.toFixed(1)}/5`, icon: 'ph:smiley-fill' },
          ].map((metric, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Icon icon={metric.icon} className="text-2xl text-[hsl(var(--app-primary-500))] mb-2" />
                <h3 className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">{metric.title}</h3>
              </CardHeader>
              <CardBody className="py-2 px-4">
                <p className="text-4xl md:text-5xl font-bold text-[hsl(var(--app-foreground-900))]">{metric.value}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="col-span-12 lg:col-span-8">
        <Card className="bg-white rounded-lg shadow-sm h-full">
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <span className="text-sm text-[hsl(var(--app-foreground-500))]">Total Shipments: {shipmentCount}</span>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <CircularProgress aria-label="Loading..." />
              </div>
            ) : shipments.length === 0 ? (
              <p className="text-center text-[hsl(var(--app-foreground-500))]">No shipments available</p>
            ) : (
              <ul className="space-y-2">
                {shipments.slice(0, 3).map((shipment) => (
                  <li key={shipment.Id} className="flex justify-between items-center py-2 border-b border-[hsl(var(--app-border))]">
                    <div>
                      <p className="font-semibold text-[hsl(var(--app-foreground-900))]">
                        New shipment created
                      </p>
                      <p className="text-sm text-[hsl(var(--app-foreground-500))]">
                        Client: {shipment.ClientName}
                      </p>
                    </div>
                    <span className="text-sm text-[hsl(var(--app-foreground-400))]">
                      {new Date(shipment.CreatedAt).toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 lg:col-span-4">
        <Card className="bg-white rounded-lg shadow-sm h-full">
          <CardHeader>
            <h3 className="text-lg font-semibold">Quick Actions</h3>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-2">
              <Button color="primary" startContent={<Icon icon="ph:package-bold" />} onClick={onCreateNewShipment}>
                Create New Shipment
              </Button>
              <Button color="success" startContent={<Icon icon="ph:check-circle-bold" />} onClick={onUpdatePackageStatus}>
                Update Package Status
              </Button>
              <Button color="warning" startContent={<Icon icon="ph:bell-bold" />} onClick={onSendNotification}>
                Send Notification
              </Button>
              <Button color="secondary" startContent={<Icon icon="ph:chart-bar-bold" />} onClick={onGenerateReport}>
                Generate Report
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 lg:col-span-8">
        <Card className="bg-white rounded-lg shadow-sm h-full">
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Shipment Map</h3>
            <Button isIconOnly aria-label="Refresh map" className="bg-transparent">
              <Icon icon="ph:arrows-clockwise" className="w-5 h-5 text-[hsl(var(--app-foreground-600))]" />
            </Button>
          </CardHeader>
          <CardBody className="p-4 h-[calc(100%-4rem)]">
            <div className="w-full h-full bg-[hsl(var(--app-background-100))] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKICA8cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPHBhdGggZD0iTTIwIDEwdjQwTTMwIDEwdjQwTTQwIDEwdjQwTTEwIDIwaDQwTTEwIDMwaDQwTTEwIDQwaDQwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+Cjwvc3ZnPg==')] bg-repeat" />
              <p className="text-[hsl(var(--app-foreground-600))] z-10">Interactive Map Coming Soon</p>
              <div className="mt-4 z-10">
                {shipments.slice(0, 3).map((shipment, index) => (
                  <div key={shipment.Id} className="flex items-center mb-2">
                    <Icon icon="ph:map-pin" className="w-5 h-5 mr-2 text-[hsl(var(--app-primary-500))]" />
                    <span className="text-sm text-[hsl(var(--app-foreground-700))]">
                      {shipment.Origin} → {shipment.Destination} ({shipment.Priority})
                    </span>
                  </div>
                ))}
                {shipments.length > 3 && (
                  <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                    +{shipments.length - 3} more shipments
                  </p>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 lg:col-span-4">
        <Card className="bg-white rounded-lg shadow-sm h-full">
          <CardHeader>
            <h3 className="text-lg font-semibold">Notifications</h3>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="list-none p-0 m-0 max-h-[300px] overflow-y-auto">
              {shipments.slice(0, 3).map((shipment, index) => (
                <li key={index} className="flex items-center py-2 px-4 border-b border-[hsl(var(--app-background-200))] last:border-b-0 hover:bg-[hsl(var(--app-background-100))] transition-colors duration-150">
                  <Icon
                    icon={shipment.Priority === 'High' ? 'ph:warning-circle-fill' : 'ph:info-fill'}
                    className={`w-5 h-5 mr-3 ${shipment.Priority === 'High' ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-primary-500))]'}`}
                  />
                  <span className="text-sm text-[hsl(var(--app-foreground-700))]">
                    Shipment {shipment.Id}: {shipment.Origin} to {shipment.Destination}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
