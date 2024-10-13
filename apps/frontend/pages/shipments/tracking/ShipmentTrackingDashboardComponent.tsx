import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar, Spinner, Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ShipmentTrackingDashboardComponentProps } from './';

export function ShipmentTrackingDashboardComponent({
  shipmentsDataState,
  isLoading,
  searchTerm,
  sortOrder,
  currentUser,
  onSearchChange,
  onSortChange,
  onCreateShipment,
  onContactDriver,
  onGenerateReport
}: ShipmentTrackingDashboardComponentProps) {
  return (
    <main className="flex flex-col min-h-screen bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <Navbar className="bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-primary-200))]">
        <NavbarBrand>
          <h1 className="text-2xl font-bold text-[hsl(var(--app-primary-900))] m-0">
            Shipment Tracking Dashboard
          </h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Input
              className="max-w-xs"
              placeholder="Search shipments"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              startContent={<Icon icon="ph:magnifying-glass" />}
              aria-label="Search shipments"
            />
          </NavbarItem>
          <NavbarItem>
            <Button
              color="primary"
              onClick={onCreateShipment}
              startContent={<Icon icon="ph:plus" />}
              aria-label="Create new shipment"
            >
              New Shipment
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {isLoading ? (
              <Spinner size="sm" color="primary" />
            ) : (
              <div className="flex items-center gap-2">
                {currentUser && (
                  <>
                    <span className="text-[hsl(var(--app-foreground-900))]">
                      {currentUser.FirstName} {currentUser.LastName}
                    </span>
                    <Avatar
                      src={currentUser.Avatar?.url}
                      alt={`${currentUser.FirstName} ${currentUser.LastName}`}
                      size="sm"
                    />
                  </>
                )}
              </div>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex-grow p-6 grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <Card className="h-full">
            <CardHeader className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Shipments</h2>
              <div className="flex gap-2">
                <Button 
                  color="primary" 
                  onPress={() => {/* TODO: Implement filter functionality */}}
                  aria-label="Open shipment filters"
                  className="hover:bg-[hsl(var(--app-primary-600))] focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]">
                  <Icon icon="ph:funnel" /> Filter
                </Button>
                <Input
                  label="Search shipments"
                  placeholder="Search shipments"
                  value={searchTerm}
                  onValueChange={onSearchChange}
                  startContent={<Icon icon="ph:magnifying-glass" />}
                  className="focus-within:ring-2 focus-within:ring-[hsl(var(--app-primary-500))]"
                />
              </div>
            </CardHeader>
            <CardBody>
              <div className="h-80 w-full rounded-lg overflow-hidden bg-[hsl(var(--app-background-100))] mb-4">
                <p className="text-center p-4">Interactive map showing current shipment locations</p>
              </div>
              <Table aria-label="Active Shipments">
                <TableHeader>
                  <TableColumn>SHIPMENT ID</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>EST. DELIVERY</TableColumn>
                  <TableColumn>ORIGIN</TableColumn>
                  <TableColumn>DESTINATION</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <p className="text-center">Loading shipments...</p>
                      </TableCell>
                    </TableRow>
                  ) : shipmentsDataState?.shipments.length ? (
                    shipmentsDataState.shipments.map((shipment) => (
                      <TableRow key={shipment.Id}>
                        <TableCell>{shipment.Id}</TableCell>
                        <TableCell>
                          <Chip 
                            color="success" 
                            variant="flat"
                            aria-label={`Shipment status: In Transit`}
                          >
                            In Transit
                          </Chip>
                        </TableCell>
                        <TableCell>{new Date(shipment.CreatedAt || '').toLocaleString()}</TableCell>
                        <TableCell>{shipment.Origin}</TableCell>
                        <TableCell>{shipment.Destination}</TableCell>
                        <TableCell>
                          <Link 
                            href={`#view-shipment-${shipment.Id}`} 
                            color="primary"
                            aria-label={`View shipment details for shipment ${shipment.Id}`}
                            className="hover:underline focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]"
                          >
                            View
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <p className="text-center">No shipments found.</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold">Potential Issues</h2>
            </CardHeader>
            <CardBody>
              <ul className="space-y-4">
                <li className="border-l-4 border-[hsl(var(--app-danger-500))] rounded-r-lg p-4 bg-[hsl(var(--app-danger-100))]">
                  <h3 className="font-semibold">Delayed Shipment</h3>
                  <p>Shipment SH002 is experiencing delays due to weather conditions. Estimated delay: 2 hours.</p>
                </li>
                <li className="border-l-4 border-[hsl(var(--app-warning-500))] rounded-r-lg p-4 bg-[hsl(var(--app-warning-100))]">
                  <h3 className="font-semibold">Route Optimization Needed</h3>
                  <p>Multiple shipments to Houston area. Consider optimizing routes for better efficiency.</p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold">Quick Actions</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 gap-4">
                <Button 
                  color="primary" 
                  onPress={onCreateShipment} 
                  aria-label="Create new shipment"
                  fullWidth
                  className="hover:bg-[hsl(var(--app-primary-600))] focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]"
                >
                  <Icon icon="ph:plus" /> New Shipment
                </Button>
                <Button 
                  color="success" 
                  onPress={onContactDriver} 
                  aria-label="Contact shipment driver"
                  fullWidth
                  className="hover:bg-[hsl(var(--app-success-600))] focus:ring-2 focus:ring-[hsl(var(--app-success-500))]"
                >
                  <Icon icon="ph:phone" /> Contact Driver
                </Button>
                <Button 
                  color="secondary" 
                  onPress={onGenerateReport} 
                  aria-label="Generate shipment report"
                  fullWidth
                  className="hover:bg-[hsl(var(--app-secondary-600))] focus:ring-2 focus:ring-[hsl(var(--app-secondary-500))]"
                >
                  <Icon icon="ph:file-text" /> Generate Report
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
