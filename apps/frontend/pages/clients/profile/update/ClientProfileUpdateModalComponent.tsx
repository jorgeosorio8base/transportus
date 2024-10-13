import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { ClientProfileUpdateModalComponentProps } from './';
import { Icon } from '@iconify/react';

export function ClientProfileUpdateModalComponent({
  clientData,
  isLoading,
  onSubmit,
  onCancel
}: ClientProfileUpdateModalComponentProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-[hsl(var(--app-background-50))] shadow-lg">
      <CardBody className="p-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="flex flex-col items-start px-6 py-4 border-b border-[hsl(var(--app-background-200))] bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)]">
              {isLoading ? (
                <div className="w-full flex items-center justify-center">
                  <Icon icon="ph:spinner" className="animate-spin text-[hsl(var(--app-primary-500))] text-2xl" />
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex items-center mb-2">
                    <Icon icon="ph:user-circle-gear" className="text-[hsl(var(--app-primary-500))] text-2xl mr-2" />
                    <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] leading-tight">
                      Update Client Profile
                    </h2>
                  </div>
                  {clientData && (
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                      {clientData.CompanyName}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="col-span-12 px-6 py-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Icon icon="ph:spinner" className="animate-spin text-[hsl(var(--app-primary-500))] text-2xl" />
                <span className="ml-2 text-[hsl(var(--app-foreground-700))]">Loading client data...</span>
              </div>
            ) : !clientData ? (
              <div className="text-center text-[hsl(var(--app-foreground-700))]">No client data available.</div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const values = Object.fromEntries(formData.entries());
                onSubmit(values as any);
              }}>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    defaultValue={clientData.CompanyName || ''}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                    required
                  />
                </div>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    defaultValue={clientData.PrimaryContact || ''}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                  />
                </div>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={clientData.Email || ''}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                    required
                  />
                </div>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    defaultValue={clientData.PhoneNumber || ''}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Address</label>
                  <textarea
                    name="address"
                    defaultValue={clientData.Address || ''}
                    rows={3}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-1">Shipping Preferences</label>
                  <select
                    name="shippingPreferences"
                    defaultValue={clientData.PreferredShippingMethods || ''}
                    className="w-full px-3 py-2 border border-[hsl(var(--app-background-200))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-500))]" 
                  >
                    <option value="Standard Shipping">Standard Shipping</option>
                    <option value="Express Shipping">Express Shipping</option>
                    <option value="Overnight Shipping">Overnight Shipping</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <h3 className="font-semibold mb-2 text-[hsl(var(--app-foreground-800))]">Notification Preferences</h3>
                  <div className="flex flex-col gap-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="emailNotifications" defaultChecked className="form-checkbox text-[hsl(var(--app-primary-500))] rounded" />
                      <span className="ml-2">Email notifications</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="smsNotifications" className="form-checkbox text-[hsl(var(--app-primary-500))] rounded" />
                      <span className="ml-2">SMS notifications</span>
                    </label>
                  </div>
                </div>
                <div className="col-span-full mt-6">
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--app-foreground-900))]">Change Log</h3>
                  <ul className="list-disc pl-5 text-[hsl(var(--app-foreground-700))]">
                    <li>2023-06-15: Updated contact email</li>
                    <li>2023-05-20: Changed shipping preference to Express</li>
                    <li>2023-04-10: Updated company address</li>
                  </ul>
                </div>
              </form>
            )}
          </div>

          <div className="col-span-12 flex flex-row justify-end items-center gap-4 p-6 bg-[hsl(var(--app-background-50))] border-t border-[hsl(var(--app-background-200))]">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-[hsl(var(--app-foreground-600))] hover:bg-[hsl(var(--app-background-100))] transition-colors rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit({} as any)} // Replace with actual form data
              className="px-4 py-2 bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] hover:bg-[hsl(var(--app-primary-600))] transition-colors rounded-md flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon icon="ph:spinner" className="animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Icon icon="ph:check-circle" className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
