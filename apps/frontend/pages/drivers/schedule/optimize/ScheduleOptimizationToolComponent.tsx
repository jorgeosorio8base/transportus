import React from 'react';
import { Card, CardHeader, CardBody, Text, Button, Progress, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ScheduleOptimizationToolComponentProps, DriverEntity, DriverSort, SortOrder } from './';

export function ScheduleOptimizationToolComponent({
  drivers,
  driversCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  currentUser
}: ScheduleOptimizationToolComponentProps) {
  const [timeSlots, setTimeSlots] = React.useState([
    { id: 'slot1', time: '8:00 AM' },
    { id: 'slot2', time: '9:00 AM' },
    { id: 'slot3', time: '10:00 AM' },
    { id: 'slot4', time: '11:00 AM' },
    { id: 'slot5', time: '12:00 PM' },
    { id: 'slot6', time: '1:00 PM' },
    { id: 'slot7', time: '2:00 PM' },
    { id: 'slot8', time: '3:00 PM' }
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const newTimeSlots = Array.from(timeSlots);
    const [reorderedItem] = newTimeSlots.splice(result.source.index, 1);
    newTimeSlots.splice(result.destination.index, 0, reorderedItem);
    setTimeSlots(newTimeSlots);
  };

  const colorMap: { [key: string]: string } = {
    'Package Pickup': 'bg-blue-200 dark:bg-blue-800',
    'Delivery': 'bg-green-200 dark:bg-green-800',
    'Break': 'bg-yellow-200 dark:bg-yellow-800'
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4 w-full min-h-screen bg-[hsl(var(--app-background-50))] dark:bg-[hsl(var(--app-background-900))] font-sans text-sm md:text-base">
      <section className="col-span-12">
        <Card shadow="md" className="w-full bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))] transition-colors">
          <CardHeader className="flex justify-between items-center p-4 sm:p-6">
            <div className="flex items-center">
              <Icon
                icon="ph:calendar-bold"
                className="text-[hsl(var(--app-primary-500))] text-2xl sm:text-3xl mr-2"
              />
              <h1 className="text-[hsl(var(--app-foreground-900))] text-2xl sm:text-3xl font-bold">
                Schedule Optimization Tool
              </h1>
            </div>
          </CardHeader>
          <CardBody className="p-4 sm:p-6">
            <Text className="text-[hsl(var(--app-foreground-700))] text-sm sm:text-base">
              Optimize your driver schedules and improve efficiency
            </Text>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-8 lg:col-span-9">
        <Card className="h-full bg-[hsl(var(--app-background-100))] dark:bg-[hsl(var(--app-background-800))] rounded-lg p-4 shadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Driver Schedules</h2>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search drivers"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                startContent={<Icon icon="ph:magnifying-glass" />}
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Sort</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Sort options"
                  onAction={(key) => {
                    const newSortOrder: DriverSort[] = [{ [key as keyof DriverEntity]: SortOrder.Asc }];
                    onSortOrderChange(newSortOrder);
                  }}
                >
                  <DropdownItem key="Name">Name</DropdownItem>
                  <DropdownItem key="LicenseNumber">License Number</DropdownItem>
                  <DropdownItem key="AvailabilityStatus">Availability Status</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div className="max-h-[60vh] overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Progress
                    size="sm"
                    isIndeterminate
                    aria-label="Loading driver schedules"
                  />
                </div>
              ) : drivers.length > 0 ? (
                <ul>
                  {drivers.map((driver) => (
                    <li key={driver.Id} className="mb-4 p-2 bg-[hsl(var(--app-background-50))] dark:bg-[hsl(var(--app-background-700))] rounded-lg hover:bg-[hsl(var(--app-background-200))] dark:hover:bg-[hsl(var(--app-background-600))]">
                      <h3 className="font-medium">{driver.Name}</h3>
                      <p>License: {driver.LicenseNumber}</p>
                      <p>Status: {driver.AvailabilityStatus}</p>
                      <div className="mt-2">
                        {['Package Pickup', 'Delivery', 'Break'].map((task, index) => (
                          <div key={index} className={`${colorMap[task]} p-1 mt-1 rounded text-xs`}>
                            {task}: {8 + index}:00 AM - {9 + index}:00 AM
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No drivers available.</p>
              )}
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
        <Card className="h-full bg-[hsl(var(--app-background-100))] dark:bg-[hsl(var(--app-background-800))] rounded-lg p-4 shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Optimization Tools</h2>
          </CardHeader>
          <CardBody>
            <Button
              color="primary"
              className="w-full mb-2 py-6 md:py-4"
              startContent={<Icon icon="ph:magic-wand" />}
            >
              Auto-Optimize Routes
            </Button>
            <Button
              color="success"
              className="w-full mb-2 py-6 md:py-4"
              startContent={<Icon icon="ph:scales" />}
            >
              Balance Workloads
            </Button>
            <Button
              color="warning"
              className="w-full py-6 md:py-4"
              startContent={<Icon icon="ph:chart-line" />}
            >
              Simulate Scenarios
            </Button>
          </CardBody>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-100))] dark:bg-[hsl(var(--app-background-800))] rounded-lg p-4 shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Efficiency Metrics</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <p>Average Delivery Time</p>
                <Progress value={75} color="primary" aria-label="Average Delivery Time" />
                <p className="text-xs mt-1">Current average delivery time: 75%</p>
              </div>
              <div>
                <p>Route Optimization</p>
                <Progress value={60} color="success" aria-label="Route Optimization" />
                <p className="text-xs mt-1">Current route optimization: 60%</p>
              </div>
              <div>
                <p>Driver Utilization</p>
                <Progress value={80} color="warning" aria-label="Driver Utilization" />
                <p className="text-xs mt-1">Current driver utilization: 80%</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <Text h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
              Drag-and-Drop Rescheduling
            </Text>
          </CardHeader>
          <CardBody>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="timeSlots">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2"
                  >
                    {timeSlots.map((slot, index) => (
                      <Draggable key={slot.id} draggableId={slot.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-[hsl(var(--app-background-100))] p-2 text-center rounded-lg hover:bg-[hsl(var(--app-background-200))] hover:shadow-md hover:scale-105 transition-all"
                            aria-label={`Time slot for ${slot.time}`}
                          >
                            <Text small className="font-medium text-[hsl(var(--app-foreground-700))]">
                              {slot.time}
                            </Text>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
