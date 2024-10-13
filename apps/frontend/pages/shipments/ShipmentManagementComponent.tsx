import React from 'react';
import { Card, CardHeader, CardBody, Input, Select, SelectItem, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, CircularProgress, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ShipmentManagementComponentProps, ShipmentEntity, CreateShipmentFormValues, ShipmentSort } from '@transportus/core';

export function ShipmentManagementComponent({
  shipments,
  shipmentsCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  onCreateShipment,
  isCreatingShipment,
  shipmentAnalytics,
  isAnalyticsLoading
}: ShipmentManagementComponentProps) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const handleSort = (column: string) => {
    const currentIndex = sortOrder.findIndex(sort => sort.startsWith(column));
    const newSortOrder = [...sortOrder];
    if (currentIndex === -1) {
      newSortOrder.unshift(`${column}_asc`);
    } else if (sortOrder[currentIndex].endsWith('asc')) {
      newSortOrder[currentIndex] = `${column}_desc`;
    } else {
      newSortOrder.splice(currentIndex, 1);
    }
    onSortOrderChange(newSortOrder);
  };

  const getSortIcon = (column: string) => {
    const sort = sortOrder.find(sort => sort.startsWith(column));
    if (!sort) return 'ph:arrow-up-down';
    return sort.endsWith('asc') ? 'ph:arrow-up' : 'ph:arrow-down';
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'high': return 'bg-danger-100 text-danger-800';
      case 'medium': return 'bg-warning-100 text-warning-800';
      case 'low': return 'bg-success-100 text-success-800';
      default: return 'bg-default-100 text-default-800';
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-large p-4 md:p-6">
            <CardHeader className="pb-3 border-b border-divider flex justify-between items-center">
              <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">Shipment Management</h1>
              <Tooltip content="Manage your shipments">
                <Icon 
                  icon="ph:package-fill" 
                  className="text-3xl text-[hsl(var(--app-primary-500))]" 
                  aria-label="Shipment management icon"
                />
              </Tooltip>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-3 gap-4">
                <Tooltip content="Total number of active shipments">
                  <div className="text-center">
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">Active Shipments</p>
                    <p className="text-2xl font-bold text-[hsl(var(--app-primary-500))]">
                      {isAnalyticsLoading ? <CircularProgress size="sm" /> : shipmentAnalytics?.totalActiveShipments}
                    </p>
                  </div>
                </Tooltip>
                <Tooltip content="Percentage of shipments delivered on time">
                  <div className="text-center">
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">On-Time Delivery Rate</p>
                    <p className="text-2xl font-bold text-[hsl(var(--app-success-500))]">
                      {isAnalyticsLoading ? <CircularProgress size="sm" /> : `${shipmentAnalytics?.onTimeDeliveryRate}%`}
                    </p>
                  </div>
                </Tooltip>
                <Tooltip content="Average time taken for delivery">
                  <div className="text-center">
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">Avg. Delivery Time</p>
                    <p className="text-2xl font-bold text-[hsl(var(--app-secondary-500))]">
                      {isAnalyticsLoading ? <CircularProgress size="sm" /> : `${shipmentAnalytics?.averageDeliveryTime} days`}
                    </p>
                  </div>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-4">
          <Card className="h-full bg-[hsl(var(--app-background-50))] rounded-xl shadow-[var(--app-box-shadow-medium)]">
            <CardHeader className="px-6 py-4 border-b border-[hsl(var(--app-background-200))]">
              <h2 className="text-xl md:text-2xl font-semibold text-[hsl(var(--app-foreground-900))]">
                Create New Shipment
              </h2>
            </CardHeader>
            <CardBody className="p-6">
              <form className="flex flex-col gap-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const values = Object.fromEntries(formData.entries()) as unknown as CreateShipmentFormValues;
                onCreateShipment(values);
              }}>
                <Select
                  label="Client"
                  placeholder="Select a client"
                  name="clientId"
                  startContent={<Icon icon="ph:user" />}
                >
                  <SelectItem key="client1" value="client1">Client 1</SelectItem>
                  <SelectItem key="client2" value="client2">Client 2</SelectItem>
                </Select>
                <Input
                  label="Origin"
                  placeholder="Enter origin address"
                  name="origin"
                  startContent={<Icon icon="ph:map-pin" />}
                />
                <Input
                  label="Destination"
                  placeholder="Enter destination address"
                  name="destination"
                  startContent={<Icon icon="ph:map-pin-line" />}
                />
                <Select
                  label="Assign Driver"
                  placeholder="Select a driver"
                  name="driverId"
                  startContent={<Icon icon="ph:user-gear" />}
                >
                  <SelectItem key="driver1" value="driver1">Driver 1</SelectItem>
                  <SelectItem key="driver2" value="driver2">Driver 2</SelectItem>
                </Select>
                <Button
                  type="submit"
                  color="primary"
                  className="mt-6"
                  isLoading={isCreatingShipment}
                >
                  Create Shipment
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-8">
          <Card className="h-full w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-large p-4 md:p-6">
            <CardHeader className="pb-3 border-b border-divider flex justify-between items-center">
              <div className="flex items-center">
                <Icon icon="ph:truck" className="text-2xl mr-2 text-[hsl(var(--app-primary-500))]" />
                <h2 className="text-xl md:text-2xl font-semibold text-[hsl(var(--app-foreground-900))]">
                  Active Shipments
                </h2>
              </div>
              <span className="text-sm text-[hsl(var(--app-foreground-600))]">
                Total: {shipmentsCount}
              </span>
            </CardHeader>
            <CardBody className="pt-4">
              <Input
                placeholder="Search shipments..."
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                startContent={<Icon icon="ph:magnifying-glass" />}
                className="mb-4"
              />
              <Table
                aria-label="Active shipments table"
                classNames={{
                  base: 'max-h-[400px] overflow-y-auto',
                  table: 'min-w-[800px]',
                }}
              >
                <TableHeader>
                  {[
                    { key: 'id', label: 'SHIPMENT ID' },
                    { key: 'client', label: 'CLIENT' },
                    { key: 'origin', label: 'ORIGIN', className: 'hidden md:table-cell' },
                    { key: 'destination', label: 'DESTINATION', className: 'hidden md:table-cell' },
                    { key: 'status', label: 'STATUS' },
                    { key: 'actions', label: 'ACTIONS' },
                  ].map(({ key, label, className }) => (
                    <TableColumn 
                      key={key} 
                      className={className}
                      allowsSorting={key !== 'actions'}
                      onClick={() => key !== 'actions' && handleSort(key)}
                    >
                      <div className="flex items-center">
                        {label}
                        {key !== 'actions' && (
                          <Icon icon={getSortIcon(key)} className="ml-1" />
                        )}
                      </div>
                    </TableColumn>
                  ))}
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <div className="flex justify-center items-center h-64">
                          <CircularProgress size="lg" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : shipments.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <div className="flex flex-col justify-center items-center h-64">
                          <Icon icon="ph:package" className="text-6xl text-gray-400" />
                          <p className="mt-4 text-gray-500">No active shipments found. Create a new shipment to get started.</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    shipments.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((shipment: ShipmentEntity) => (
                      <TableRow key={shipment.id} className="group">
                        <TableCell>{shipment.id}</TableCell>
                        <TableCell>{shipment.clientName}</TableCell>
                        <TableCell className="hidden md:table-cell">{shipment.origin}</TableCell>
                        <TableCell className="hidden md:table-cell">{shipment.destination}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(shipment.priority)}`}>
                            {shipment.priority}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" color="primary" className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                            <Icon icon="ph:pencil-simple" className="mr-1" />
                            Update Status
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
              <div className="flex justify-between items-center mt-4">
                <span className="text-small text-default-400">
                  Total {shipmentsCount} shipments
                </span>
                <Pagination
                  total={Math.ceil(shipmentsCount / rowsPerPage)}
                  page={page}
                  onChange={setPage}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
}
