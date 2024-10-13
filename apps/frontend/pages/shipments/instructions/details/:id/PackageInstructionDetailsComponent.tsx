import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Text, Loading, Spacer, Divider, Grid, Container } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { PackageInstructionDetailsComponentProps } from './';

export function PackageInstructionDetailsComponent({
  packageDetails,
  isLoading,
  onSaveChanges,
  onMarkAsCompleted,
  onFlagIssue
}: PackageInstructionDetailsComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <Card className="col-span-12 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-col items-start gap-2 p-4">
          <div className="flex items-center gap-2 w-full justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="ph:clipboard-text" className="text-[hsl(var(--app-foreground-600))] text-2xl" />
              <h1 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Package Instruction Details</h1>
            </div>
          </div>
          {isLoading ? (
            <div className="w-full space-y-2">
              <Loading size="lg" />
            </div>
          ) : packageDetails ? (
            <div className="flex flex-col gap-1">
              <Text className="text-sm text-[hsl(var(--app-foreground-600))]">Package ID: {packageDetails.Id ?? 'N/A'}</Text>
              <Text className="text-sm text-[hsl(var(--app-foreground-600))]">Tracking Number: {packageDetails.TrackingNumber ?? 'N/A'}</Text>
              <Text className="text-sm text-[hsl(var(--app-foreground-600))]">Status: {packageDetails.Status ?? 'Unknown'}</Text>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[hsl(var(--app-foreground-600))]">
              <Icon icon="ph:info" className="text-xl" />
              <Text>No package details available. Please check the tracking number or try again later.</Text>
            </div>
          )}
        </CardHeader>

        <CardBody>
          <Container>
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Text h2 size="$xl">Package Information</Text>
              </Grid>
              <Grid xs={12} sm={4}>
                <Text>
                  <Text b>Client:</Text>
                  <br />
                  {packageDetails?.Client ?? 'N/A'}
                </Text>
              </Grid>
              <Grid xs={12} sm={8}>
                <Text>
                  <Text b>Destination:</Text>
                  <br />
                  {packageDetails?.Destination ?? 'N/A'}
                </Text>
              </Grid>
            </Grid.Container>

            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />

            <Text h2 size="$xl">Delivery Instructions</Text>
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Container css={{ backgroundColor: 'hsl(var(--app-warning-50))', borderRadius: '$lg', padding: '$4' }}>
                  <Text b>Special Handling Required:</Text>
                  <Text>Handle with care - Fragile contents</Text>
                </Container>
              </Grid>
              <Grid xs={12}>
                <Text b>Customer Preferences:</Text>
                <Text>Leave package at the back door if no one answers.</Text>
              </Grid>
              <Grid xs={12}>
                <Text b>Delivery Notes:</Text>
                <Text>Customer prefers afternoon delivery between 2-5 PM.</Text>
              </Grid>
            </Grid.Container>

            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />

            <Text h2 size="$xl">Instruction History</Text>
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Text b>Updated on: 2023-04-15 10:30 AM</Text>
                <Text>Added special handling instructions for fragile contents.</Text>
              </Grid>
              <Grid xs={12}>
                <Text b>Updated on: 2023-04-14 3:45 PM</Text>
                <Text>Changed preferred delivery time to afternoon.</Text>
              </Grid>
            </Grid.Container>
          </Container>
        </CardBody>

        <CardFooter className="flex flex-row justify-end items-center gap-4 p-4 bg-[hsl(var(--app-background-50))]">
          <Button
            variant="solid"
            color="primary"
            isLoading={isLoading}
            onPress={onSaveChanges}
            startContent={!isLoading && <Icon icon="ph:floppy-disk-back" />}
          >
            Save Changes
          </Button>
          <Button
            variant="bordered"
            color="success"
            isDisabled={!packageDetails}
            onPress={onMarkAsCompleted}
            startContent={<Icon icon="ph:check-circle" />}
          >
            Mark as Completed
          </Button>
          <Button
            variant="flat"
            color="warning"
            isDisabled={!packageDetails}
            onPress={onFlagIssue}
            startContent={<Icon icon="ph:flag" />}
          >
            Flag Issue
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
