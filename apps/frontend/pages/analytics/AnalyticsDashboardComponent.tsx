import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { AnalyticsDashboardComponentProps } from './';
import { AnalyticsDashboardHeader } from './AnalyticsDashboardHeader';
import { AnalyticsDashboardSummaryCards } from './AnalyticsDashboardSummaryCards';
import { AnalyticsDashboardCharts } from './AnalyticsDashboardCharts';
import { TopPerformingRoutesCard } from './TopPerformingRoutesCard';
import { GenerateCustomReportButton } from './GenerateCustomReportButton';

export function AnalyticsDashboardComponent({
  totalDeliveries,
  onTimeDeliveryRate,
  averageDeliveryTime,
  customerSatisfaction,
  deliveryPerformanceData,
  packageStatusDistribution,
  topPerformingRoutes,
  handleSearchTerm,
  handleSortOrder,
  isLoading
}: AnalyticsDashboardComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))]">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <AnalyticsDashboardHeader
            totalDeliveries={totalDeliveries}
            onTimeDeliveryRate={onTimeDeliveryRate}
            averageDeliveryTime={averageDeliveryTime}
            customerSatisfaction={customerSatisfaction}
            isLoading={isLoading}
          />
        </section>

        <section className="col-span-12">
          <AnalyticsDashboardSummaryCards
            totalDeliveries={totalDeliveries}
            onTimeDeliveryRate={onTimeDeliveryRate}
            averageDeliveryTime={averageDeliveryTime}
            customerSatisfaction={customerSatisfaction}
            isLoading={isLoading}
          />
        </section>

        <section className="col-span-12">
          <AnalyticsDashboardCharts
            totalDeliveries={totalDeliveries}
            onTimeDeliveryRate={onTimeDeliveryRate}
            averageDeliveryTime={averageDeliveryTime}
            customerSatisfaction={customerSatisfaction}
            deliveryPerformanceData={deliveryPerformanceData}
            packageStatusDistribution={packageStatusDistribution}
            topPerformingRoutes={topPerformingRoutes}
            handleSearchTerm={handleSearchTerm}
            handleSortOrder={handleSortOrder}
            isLoading={isLoading}
          />
        </section>

        <section className="col-span-12">
          <Card className="w-full h-full bg-[hsl(var(--app-background-100))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
            <CardBody>
              <TopPerformingRoutesCard
                topPerformingRoutes={topPerformingRoutes}
                isLoading={isLoading}
              />
            </CardBody>
          </Card>
        </section>
      </div>

      <GenerateCustomReportButton />
    </main>
  );
}
