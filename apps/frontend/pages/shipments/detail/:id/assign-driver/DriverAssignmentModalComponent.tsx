import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { DriverAssignmentModalComponentProps } from './';

export function DriverAssignmentModalComponent({
  shipments,
  shipmentsCount,
  isLoading,
  searchTerm,
  sortOrder,
  selectedShipment,
  onSearchTermChange,
  onSortOrderChange,
  onSelectShipment,
  onAssignDriver
}: DriverAssignmentModalComponentProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardBody className="p-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <header className="flex flex-col items-start px-6 py-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-small)]">
              <h2 className="text-[hsl(var(--app-primary-900))] font-bold mb-2">Assign Driver to Shipment</h2>
              <p className="text-sm mb-4">Select a driver from the list below to assign them to the current shipment.</p>
              {selectedShipment ? (
                <div className="shipment-info flex items-center">
                  <Icon icon="ph:package-fill" className="mr-2 text-[hsl(var(--app-primary-500))]" />
                  <span className="text-sm">
                    Shipment ID: {selectedShipment.Id}
                  </span>
                </div>
              ) : (
                <div className="shipment-info flex items-center">
                  <Icon icon="ph:info" className="mr-2 text-[hsl(var(--app-secondary-500))]" />
                  <span className="text-sm">
                    No shipment selected. Please choose a shipment to proceed.
                  </span>
                </div>
              )}
            </header>
          </div>

          <div className="col-span-12 px-6 py-4">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Shipment Details</h2>
              {selectedShipment && (
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">Shipment ID: {selectedShipment.Id}</p>
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">Origin: {selectedShipment.Origin}</p>
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">Destination: {selectedShipment.Destination}</p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Available Drivers</h2>
              <input
                type="text"
                placeholder="Search drivers"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                className="w-full p-2 mb-4 border border-[hsl(var(--app-foreground-200))] rounded-md"
              />
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[hsl(var(--app-background-100))]">
                    <th className="p-2 text-left">Driver</th>
                    <th className="p-2 text-left">Current Location</th>
                    <th className="p-2 text-left">Workload</th>
                    <th className="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={4} className="text-center p-4">Loading drivers...</td>
                    </tr>
                  ) : shipments.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center p-4">No drivers found</td>
                    </tr>
                  ) : (
                    shipments.map((shipment) => (
                      <tr key={shipment.Id} className="border-b border-[hsl(var(--app-foreground-200))]">
                        <td className="p-2">{shipment.Driver?.Name || 'N/A'}</td>
                        <td className="p-2">{shipment.Driver?.CurrentLocation || 'N/A'}</td>
                        <td className="p-2">{shipment.Driver?.ActiveShipments || 0} active shipments</td>
                        <td className="p-2">
                          <button
                            onClick={() => onAssignDriver(shipment.Driver?.Id || '')}
                            className="bg-[hsl(var(--app-primary-500))] text-white px-3 py-1 rounded-md hover:bg-[hsl(var(--app-primary-600))] transition-colors"
                          >
                            Assign
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Route Optimization</h2>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Driver's current location
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Other assigned shipments
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <footer className="flex justify-end items-center gap-2 p-4 bg-[hsl(var(--app-background-50))] border-t border-[hsl(var(--app-foreground-200))]">
              <button
                className="px-4 py-2 text-[hsl(var(--app-danger-500))] hover:bg-[hsl(var(--app-danger-100))] rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[hsl(var(--app-primary-500))] text-white rounded-md hover:bg-[hsl(var(--app-primary-600))] transition-colors"
                disabled={!selectedShipment}
              >
                Confirm Assignment
              </button>
            </footer>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
