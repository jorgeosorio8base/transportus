import React from 'react';
import { Card } from '@nextui-org/react';
import { ShipmentDetailsModalComponentProps } from './';

export function ShipmentDetailsModalComponent({ shipment, isLoading, onRefresh, onClose }: ShipmentDetailsModalComponentProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-[hsl(var(--app-background-50))] shadow-lg">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <CardHeader className="flex flex-col items-start px-6 py-4 bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))] appShadow-[var(--app-box-shadow-small)]">
            <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]" id="shipment-details-title">
              Shipment Details
            </h1>
            {isLoading ? (
              <div className="flex items-center mt-2" aria-live="polite" aria-busy="true">
                <Spinner size="sm" color="primary" aria-label="Loading shipment details" />
                <span className="ml-2 text-[hsl(var(--app-foreground-600))]">
                  Loading shipment details...
                </span>
              </div>
            ) : shipment ? (
              <div className="flex items-center mt-2" aria-labelledby="shipment-details-title">
                <Icon icon="ph:package" className="mr-2 text-[hsl(var(--app-primary-500))]" aria-hidden="true" />
                <span className="text-[hsl(var(--app-foreground-700))]">
                  <strong>Tracking ID:</strong> {shipment.Id}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-start mt-2" aria-live="polite">
                <div className="flex items-center">
                  <Icon icon="ph:warning-circle" className="mr-2 text-[hsl(var(--app-warning-500))]" aria-hidden="true" />
                  <span className="text-[hsl(var(--app-foreground-600))]">
                    No shipment details available
                  </span>
                </div>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="mt-2"
                  onClick={onRefresh}
                  startContent={<Icon icon="ph:arrows-clockwise" />}
                >
                  Retry Loading
                </Button>
              </div>
            )}
          </CardHeader>
        </div>
        <div className="col-span-12">
          <CardBody className="flex flex-col gap-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
            {isLoading ? (
              <>
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-32 rounded-lg bg-default-300"></div>
                </Skeleton>
              </>
            ) : shipment ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                      Tracking Number
                    </span>
                    <span className="text-base font-semibold">{shipment.Id}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                      Status
                    </span>
                    <Badge color={getStatusColor(shipment.Priority)} variant="flat">
                      {shipment.Priority}
                    </Badge>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                      Estimated Delivery
                    </span>
                    <span className="text-base font-semibold">{shipment.UpdatedAt}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                      Origin
                    </span>
                    <span className="text-base">{shipment.Origin}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                      Destination
                    </span>
                    <span className="text-base">{shipment.Destination}</span>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-semibold mb-2">Package Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                        Weight
                      </span>
                      <span className="text-base">5.2 kg</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                        Dimensions
                      </span>
                      <span className="text-base">30cm x 25cm x 20cm</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[hsl(var(--app-foreground-500))]">
                        Contents
                      </span>
                      <span className="text-base">Electronics</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-semibold mb-2">Shipment Timeline</h3>
                  {[
                    { date: shipment.CreatedAt, description: 'Shipment created' },
                    { date: '2024-06-11', description: 'Package picked up' },
                    { date: '2024-06-12', description: 'In transit to destination' },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start mb-3">
                      <Icon icon="ph:circle-fill" className="w-6 h-6 mr-3 text-[hsl(var(--app-primary-500))]" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{event.date}</span>
                        <span className="text-sm">{event.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-semibold mb-2">Shipment Route</h3>
                  <div className="w-full aspect-video bg-[hsl(var(--app-background-100))] flex items-center justify-center">
                    <span className="text-[hsl(var(--app-foreground-500))]">
                      Interactive map loading... Click to view detailed route.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-semibold mb-2">Documents</h3>
                  <ButtonGroup fullWidth>
                    <Button color="primary">
                      View Proof of Delivery
                    </Button>
                    <Button color="secondary">
                      Download Invoice
                    </Button>
                  </ButtonGroup>
                </div>

                <Button 
                  onClick={onRefresh} 
                  color="primary" 
                  variant="light" 
                  startContent={<Icon icon="ph:arrows-clockwise" />}
                  className="self-end"
                >
                  Refresh
                </Button>
              </>
            ) : (
              <p className="text-[hsl(var(--app-foreground-500))]">
                No shipment details available. Please try refreshing or contact support.
              </p>
            )}
          </CardBody>
        </div>
        <div className="col-span-12">
          <CardFooter
            className="flex justify-end p-4 bg-[hsl(var(--app-background-50))]"
            divider={true}
          >
            <Button
              variant="light"
              color="default"
              size="sm"
              onPress={onClose}
              startContent={<Icon icon="ph:x-bold" />}
              className="text-[hsl(var(--app-foreground-600))] hover:bg-[hsl(var(--app-background-100))] transition-colors"
              aria-label="Close modal"
              hoverOpacity={0.8}
            >
              Close
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'in transit': return 'primary';
    case 'delivered': return 'success';
    case 'delayed': return 'warning';
    case 'cancelled': return 'danger';
    default: return 'default';
  }
};