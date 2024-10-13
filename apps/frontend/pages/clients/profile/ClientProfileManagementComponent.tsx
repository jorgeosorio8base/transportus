import React from 'react';
import { Input, Textarea, Button, Select, SelectItem, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ClientProfileManagementComponentProps } from './';

export function ClientProfileManagementComponent({
  clients,
  count,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  onEditClient,
  onUploadDocument,
  onQuickAction,
  currentUser
}: ClientProfileManagementComponentProps) {
  const client = clients[0]; // Assuming we're displaying the first client's profile

  if (isLoading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <Spinner size="lg" color="primary" />
      </main>
    );
  }

  if (clients.length === 0) {
    return (
      <main className="text-center p-4">
        <p className="text-lg">No clients found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))]">
          Client Profile Management
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <section className="md:col-span-8 bg-white rounded-lg shadow-md p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company Name"
              value={client.CompanyName}
              onChange={(e) => onEditClient(client.Id, { CompanyName: e.target.value })}
              className="w-full"
            />
            <Input
              label="Primary Contact"
              value={client.PrimaryContact}
              onChange={(e) => onEditClient(client.Id, { PrimaryContact: e.target.value })}
              className="w-full"
            />
            <Input
              label="Email"
              value={client.Email}
              onChange={(e) => onEditClient(client.Id, { Email: e.target.value })}
              className="w-full"
            />
            <Input
              label="Phone"
              value={client.PhoneNumber}
              onChange={(e) => onEditClient(client.Id, { PhoneNumber: e.target.value })}
              className="w-full"
            />
          </div>
          <Textarea
            label="Address"
            value={client.Address}
            onChange={(e) => onEditClient(client.Id, { Address: e.target.value })}
            className="w-full mt-4"
          />
        </section>

        <section className="md:col-span-4 bg-white rounded-lg shadow-md p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            <Button
              color="primary"
              onClick={() => onQuickAction('edit', client.Id)}
              className="w-full bg-[hsl(var(--app-primary-500))]"
            >
              Edit Profile
            </Button>
            <Button
              color="success"
              onClick={() => onQuickAction('newShipment', client.Id)}
              className="w-full bg-[hsl(var(--app-success-500))]"
            >
              New Shipment
            </Button>
            <Button
              color="danger"
              onClick={() => onQuickAction('viewHistory', client.Id)}
              className="w-full bg-[hsl(var(--app-danger-500))]"
            >
              View History
            </Button>
            <Button
              color="primary"
              onClick={() => onQuickAction('sendMessage', client.Id)}
              className="w-full bg-[hsl(var(--app-primary-500))]"
            >
              Send Message
            </Button>
          </div>
        </section>

        <section className="md:col-span-6 bg-white rounded-lg shadow-md p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Shipping Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Preferred Carrier"
              placeholder="Select a carrier"
              className="w-full"
            >
              <SelectItem key="ups">UPS</SelectItem>
              <SelectItem key="fedex">FedEx</SelectItem>
              <SelectItem key="dhl">DHL</SelectItem>
            </Select>
            <Select
              label="Package Type"
              placeholder="Select a package type"
              className="w-full"
            >
              <SelectItem key="box">Box</SelectItem>
              <SelectItem key="envelope">Envelope</SelectItem>
              <SelectItem key="pallet">Pallet</SelectItem>
            </Select>
            <Select
              label="Delivery Speed"
              placeholder="Select delivery speed"
              className="w-full"
            >
              <SelectItem key="standard">Standard</SelectItem>
              <SelectItem key="express">Express</SelectItem>
              <SelectItem key="overnight">Overnight</SelectItem>
            </Select>
          </div>
        </section>

        <section className="md:col-span-6 bg-white rounded-lg shadow-md p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Historical Data</h2>
          <Table 
            aria-label="Recent shipments"
            onSortChange={(column) => {
              const newSortOrder = sortOrder.includes(column as any)
                ? sortOrder.filter((sort) => sort !== column)
                : [...sortOrder, column as any];
              onSortOrderChange(newSortOrder);
            }}
          >
            <TableHeader>
              <TableColumn key="date" allowsSorting>Date</TableColumn>
              <TableColumn key="shipmentId" allowsSorting>Shipment ID</TableColumn>
              <TableColumn key="status" allowsSorting>Status</TableColumn>
              <TableColumn key="destination" allowsSorting>Destination</TableColumn>
            </TableHeader>
            <TableBody>
              {client.ShipmentHistory?.map((shipment, index) => (
                <TableRow key={index}>
                  <TableCell>{new Date(shipment.Date).toLocaleDateString()}</TableCell>
                  <TableCell>{shipment.ShipmentId}</TableCell>
                  <TableCell>{shipment.Status}</TableCell>
                  <TableCell>{shipment.Destination}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="md:col-span-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                onUploadDocument(client.Id, e.dataTransfer.files[0]);
              }
            }}
          >
            <Icon icon="ph:upload" className="text-4xl text-gray-400 mb-2" />
            <p className="text-lg text-gray-600">Drag and drop files here or</p>
            <Button
              color="primary"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) onUploadDocument(client.Id, file);
                };
                input.click();
              }}
              className="mt-4 bg-[hsl(var(--app-primary-500))]"
            >
              Browse Files
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
