import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Textarea, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { PackageStatusUpdateComponentProps } from './';

export function PackageStatusUpdateComponent({
  packageInfo,
  packageHistory,
  isLoading,
  onPackageIdChange,
  onStatusUpdate
}: PackageStatusUpdateComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-6 p-4 md:p-6">
      <section className="col-span-12">
        <Card className="w-full" shadow="sm">
          <CardHeader className="flex justify-between items-center bg-[hsl(var(--app-background-100))] p-4">
            <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
              Package Status Update
            </h1>
            <Icon icon="ph:package-fill" className="text-3xl text-[hsl(var(--app-primary-500))]" />
          </CardHeader>
          <CardBody className="p-4">
            <div className="flex flex-wrap items-center space-x-4 space-y-2 sm:space-y-0">
              <Input
                label="Package ID"
                placeholder="Enter Package ID"
                value={packageInfo?.TrackingNumber || ''}
                onChange={(e) => onPackageIdChange(e.target.value)}
                className="flex-grow min-w-[200px]"
                startContent={<Icon icon="ph:barcode-bold" className="text-[hsl(var(--app-foreground-400))]" />}
                isClearable
              />
              <Button
                color="primary"
                variant="solid"
                isLoading={isLoading}
                isDisabled={isLoading}
                className="bg-[hsl(var(--app-primary-500))] text-white"
              >
                {isLoading ? 'Searching...' : 'Search'}
              </Button>
            </div>
            {packageInfo?.Status && (
              <p className="mt-4 text-[hsl(var(--app-foreground-700))]">
                Current Status: <span className="font-semibold">{packageInfo.Status}</span>
              </p>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="w-full h-full">
          <CardHeader>
            <h2 className="text-lg font-semibold">Update Package Status</h2>
          </CardHeader>
          <CardBody className="gap-4">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              onStatusUpdate({
                location: formData.get('location') as string,
                notes: formData.get('notes') as string,
                status: formData.get('status') as string
              });
            }} className="space-y-4">
              <Input
                label="Package ID"
                value={packageInfo?.TrackingNumber || ''}
                isReadOnly
                variant="bordered"
                size="lg"
              />
              <Input
                label="Current Status"
                value={packageInfo?.Status || ''}
                isReadOnly
                variant="bordered"
                size="lg"
              />
              <Input
                name="location"
                label="Location"
                placeholder="Enter current location"
                variant="bordered"
                size="lg"
                required
              />
              <Textarea
                name="notes"
                label="Additional Notes"
                placeholder="Enter any additional notes"
                minRows={3}
                variant="bordered"
                size="lg"
              />
              <Input
                type="file"
                label="Proof of Delivery"
                accept="image/png,image/jpeg,application/pdf"
                variant="bordered"
                size="lg"
                startContent={
                  <Button isIconOnly variant="light">
                    <Icon icon="ph:upload-simple" className="text-2xl" />
                  </Button>
                }
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full"
              >
                Update Status
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="w-full h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Package History</h2>
          </CardHeader>
          <CardBody>
            <Table
              aria-label="Package history table"
              className="w-full"
              isHeaderSticky
              emptyContent={isLoading ? <Spinner color="primary" /> : "No package history available."}
            >
              <TableHeader>
                <TableColumn className="bg-[hsl(var(--app-background-200))] font-medium text-[hsl(var(--app-foreground-700))]">Date</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-200))] font-medium text-[hsl(var(--app-foreground-700))]">Status</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-200))] font-medium text-[hsl(var(--app-foreground-700))]">Location</TableColumn>
              </TableHeader>
              <TableBody>
                {packageHistory.map((item) => (
                  <TableRow key={item.Id} className="border-b border-[hsl(var(--app-background-200))] last:border-b-0">
                    <TableCell>{new Date(item.Timestamp).toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Icon icon={`ph:${getStatusIcon(item.Status)}`} className="mr-2" />
                        {item.Status}
                      </div>
                    </TableCell>
                    <TableCell>{item.Location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

function getStatusIcon(status: string): string {
  switch (status.toLowerCase()) {
    case 'in transit':
      return 'arrow-right';
    case 'delivered':
      return 'arrow-circle-down';
    case 'pending':
      return 'arrow-circle-right';
    default:
      return 'package';
  }
}