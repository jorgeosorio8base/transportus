import React from 'react';
import { Card, CardBody, Text } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { DeliveryHistoryDashboardComponentProps } from './';

export function DeliveryHistoryDashboardComponent({
  shipments,
  totalShipments,
  onTimeDeliveryRate,
  averageDeliveryTime,
  shippingTrends,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onSortChange,
  currentSort
}: DeliveryHistoryDashboardComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Icon
            icon="ph:truck-bold"
            className="text-[hsl(var(--app-primary-500))] mr-2"
            width="36"
            height="36"
          />
          <Text
            h1
            className="
              text-[hsl(var(--app-foreground-900))]
              font-bold
              text-3xl
              sm:text-4xl
              md:text-5xl
              bg-clip-text text-transparent
              bg-gradient-to-r from-[hsl(var(--app-primary-500))] to-[hsl(var(--app-secondary-500))]
            "
          >
            Delivery History Dashboard
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-[hsl(var(--app-background-100))] rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition-shadow">
          <CardBody>
            <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-medium text-[hsl(var(--app-foreground-500))] mb-2">
              Total Shipments
            </h3>
            <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[hsl(var(--app-primary-500))]">
              {totalShipments.toLocaleString()}
            </p>
          </CardBody>
        </Card>
        <Card className="bg-[hsl(var(--app-background-100))] rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition-shadow">
          <CardBody>
            <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-medium text-[hsl(var(--app-foreground-500))] mb-2">
              On-Time Delivery Rate
            </h3>
            <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[hsl(var(--app-primary-500))]">
              {onTimeDeliveryRate}
            </p>
          </CardBody>
        </Card>
        <Card className="bg-[hsl(var(--app-background-100))] rounded-lg shadow-md hover:shadow-lg focus:shadow-lg transition-shadow">
          <CardBody>
            <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-medium text-[hsl(var(--app-foreground-500))] mb-2">
              Average Delivery Time
            </h3>
            <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[hsl(var(--app-primary-500))]">
              {averageDeliveryTime.toFixed(1)} days
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="mb-8">
        <Card className="w-full h-full min-h-[400px] bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
          <CardBody className="h-[calc(100%-70px)] p-4">
            {/* ShippingTrendsCard component code here */}
          </CardBody>
        </Card>
      </div>

      <div>
        <Card className="bg-[hsl(var(--app-background-100))] rounded-lg shadow-[var(--app-box-shadow-medium)] border border-[hsl(var(--app-background-200))]">
          <CardBody>
            {/* PastShipmentsContainer component code here */}
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
