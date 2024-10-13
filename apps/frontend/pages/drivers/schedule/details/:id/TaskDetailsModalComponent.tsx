import React from 'react';
import { Card, CardHeader, CardBody, Button, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { TaskDetailsModalComponentProps } from './';

export function TaskDetailsModalComponent({
  shipmentId,
  taskDetails,
  isLoading,
  onMarkAsComplete,
  onReportIssue,
  onContactCustomer,
  onReassignTask,
  onAdjustSchedule,
  onRefreshShipment
}: TaskDetailsModalComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <Card shadow="md" className="col-span-12">
        <CardHeader className="flex justify-between items-center p-4 border-b border-[hsl(var(--app-foreground-200))]">
          <h1 className="text-2xl font-bold sm:text-xl">
            {isLoading ? (
              <span className="flex items-center">
                <Icon icon="ph:spinner" className="animate-spin mr-2" />
                Loading...
              </span>
            ) : taskDetails ? (
              taskDetails.title
            ) : (
              'Task Details'
            )}
          </h1>
          <Button
            isIconOnly
            variant="light"
            aria-label="Refresh shipment"
            onClick={onRefreshShipment}
          >
            <Icon icon="ph:arrow-clockwise" className="text-xl" />
          </Button>
        </CardHeader>
        <CardBody className="p-4">
          {isLoading ? (
            <p>Loading task details...</p>
          ) : taskDetails ? (
            <div className="grid grid-cols-12 gap-6">
              <section className="col-span-12 md:col-span-6 bg-[hsl(var(--app-background-100))] p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">Customer Information</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Name:</span>
                    <span>{taskDetails.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Origin:</span>
                    <span>{taskDetails.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Destination:</span>
                    <span>{taskDetails.destination}</span>
                  </div>
                </div>
              </section>

              <section className="col-span-12 md:col-span-6 bg-[hsl(var(--app-background-100))] p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">Package Information</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Tracking Number:</span>
                    <span>{shipmentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Priority:</span>
                    <span>{taskDetails.priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Created At:</span>
                    <span>{taskDetails.createdAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[hsl(var(--app-foreground-700))]">Updated At:</span>
                    <span>{taskDetails.updatedAt}</span>
                  </div>
                </div>
              </section>

              <section className="col-span-12 bg-[hsl(var(--app-warning-50))] p-4 rounded-md">
                <h2 className="text-lg font-semibold text-[hsl(var(--app-warning-900))] mb-2">Special Instructions</h2>
                <p className="text-[hsl(var(--app-warning-800))]">Please handle with care. Fragile items inside.</p>
              </section>

              <section className="col-span-12">
                <h2 className="text-lg font-semibold mb-2">Estimated Arrival Time</h2>
                <p className="text-xl font-bold">2:30 PM - 3:30 PM</p>
              </section>

              <div className="col-span-12 flex flex-wrap gap-4 mt-6">
                <Button color="success" onPress={onMarkAsComplete} startContent={<Icon icon="ph:check" />}>
                  Mark as Complete
                </Button>
                <Button color="warning" onPress={onReportIssue} startContent={<Icon icon="ph:warning" />}>
                  Report Issue
                </Button>
                <Button color="primary" onPress={onContactCustomer} startContent={<Icon icon="ph:phone" />}>
                  Contact Customer
                </Button>
              </div>

              <Divider className="col-span-12 my-4" />

              <section className="col-span-12">
                <h2 className="text-sm font-medium text-[hsl(var(--app-foreground-600))] mb-2">Task Management (For Logistics Managers)</h2>
                <div className="flex gap-4">
                  <Button color="secondary" onPress={onReassignTask}>
                    Reassign Task
                  </Button>
                  <Button color="secondary" onPress={onAdjustSchedule}>
                    Adjust Schedule
                  </Button>
                </div>
              </section>
            </div>
          ) : (
            <p className="text-[hsl(var(--app-foreground-700))]">No task details available.</p>
          )}
        </CardBody>
      </Card>
    </main>
  );
}
