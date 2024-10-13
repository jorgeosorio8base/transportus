import React from 'react';
import { Card, CardHeader, CardBody, Tooltip, Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Button } from '@nextui-org/react';
import { PerformanceDashboardComponentProps } from './'; // Assuming the interface is in the same directory

export function PerformanceDashboardComponent({
  performanceMetrics,
  deliveryTrendData,
  shippingActivityData,
  topRoutes,
  onGenerateReport,
  onExportData,
  onCustomizeDashboard
}: PerformanceDashboardComponentProps) {
  const { deliveryPerformance, shippingVolume, customerSatisfaction } = performanceMetrics;

  const formatPercentage = (value: number) => `${value.toFixed(0)}%`;
  const formatDays = (value: number) => `${value.toFixed(1)} days`;
  const formatRating = (value: number) => `${value.toFixed(1)}/5`;

  const renderMetricCard = (
    icon: string,
    title: string,
    value: string,
    change: string,
    tooltipContent: string
  ) => (
    <Tooltip content={tooltipContent}>
      <Card isPressable isHoverable className="h-full">
        <CardHeader className="flex gap-3">
          <Icon icon={icon} className="text-[hsl(var(--app-primary-500))] text-xl" aria-hidden="true" />
          <p className="text-md">{title}</p>
        </CardHeader>
        <CardBody>
          <p className="text-2xl font-bold text-[hsl(var(--app-primary-500))]">{value}</p>
          <p className="text-sm text-[hsl(var(--app-foreground-500))]">{change}</p>
        </CardBody>
      </Card>
    </Tooltip>
  );

  const chartColors = [
    'hsl(var(--app-primary-500))',
    'hsl(var(--app-secondary-500))',
    'hsl(var(--app-success-500))',
    'hsl(var(--app-warning-500))'
  ];

  return (
    <main className="w-full p-4">
      <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Performance Dashboard</h1>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {renderMetricCard(
          'ph:truck-fill',
          'On-Time Deliveries',
          formatPercentage(deliveryPerformance),
          '+5% from last month',
          'Percentage of deliveries made on time'
        )}
        {renderMetricCard(
          'ph:clock-fill',
          'Average Delivery Time',
          formatDays(shippingVolume),
          '-0.2 days from last month',
          'Average time taken for deliveries'
        )}
        {renderMetricCard(
          'ph:smiley-fill',
          'Customer Satisfaction',
          formatRating(customerSatisfaction),
          '+0.2 from last month',
          'Average customer satisfaction rating'
        )}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card isHoverable isPressable fullWidth className="bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)] h-full">
          <CardHeader>
            <div className="flex items-center">
              <Icon icon="ph:chart-line-up" className="text-2xl mr-2 text-[hsl(var(--app-primary-500))]" />
              <h2 className="text-lg font-semibold">Delivery Performance Trend</h2>
            </div>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={deliveryTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                  label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  label={{ value: 'Performance', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <RechartsTooltip
                  formatter={(value) => [`${value}%`, 'Performance']}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Line
                  type="monotone"
                  dataKey="performance"
                  stroke={chartColors[0]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card isHoverable isPressable fullWidth className="bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)] h-full">
          <CardHeader>
            <div className="flex items-center">
              <Icon icon="ph:chart-bar" className="text-2xl mr-2 text-[hsl(var(--app-primary-500))]" />
              <h2 className="text-lg font-semibold">Shipping Activity by Region</h2>
            </div>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={shippingActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="region"
                  label={{ value: 'Region', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  label={{ value: 'Activity', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${value}k`}
                />
                <RechartsTooltip
                  formatter={(value) => [`${value}k`, 'Activity']}
                />
                <Legend />
                <Bar
                  dataKey="activity"
                  fill={chartColors[1]}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </section>

      <section className="mb-6">
        <Card className="bg-[hsl(var(--app-background-100))] rounded-lg p-6 appShadow-[var(--app-box-shadow-medium)]">
          <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">
            Top Performing Routes
          </h3>
          <Table
            aria-label="Top performing routes table with sorting and pagination"
            className="w-full bg-[hsl(var(--app-background-50))]"
          >
            <TableHeader>
              <TableColumn>Route</TableColumn>
              <TableColumn>On-Time %</TableColumn>
              <TableColumn>Avg. Delivery Time</TableColumn>
              <TableColumn>Volume</TableColumn>
            </TableHeader>
            <TableBody>
              {topRoutes.map((route) => (
                <TableRow key={route.route}>
                  <TableCell>{route.route}</TableCell>
                  <TableCell>
                    <span className={`font-semibold ${route.onTimePercentage >= 90 ? 'text-[hsl(var(--app-success-500))]' : 'text-[hsl(var(--app-warning-500))]'}`}>
                      {`${route.onTimePercentage}%`}
                    </span>
                  </TableCell>
                  <TableCell>{route.avgDeliveryTime}</TableCell>
                  <TableCell>{`${route.volume} packages`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      <section className="flex flex-row flex-wrap justify-end items-center gap-2">
        <Button
          variant="bordered"
          color="primary"
          size="md"
          onPress={onGenerateReport}
          startContent={<Icon icon="ph:file-text" />}
        >
          Generate Full Report
        </Button>
        <Button
          variant="bordered"
          color="primary"
          size="md"
          onPress={onExportData}
          startContent={<Icon icon="ph:export" />}
        >
          Export Data
        </Button>
        <Button
          variant="bordered"
          color="primary"
          size="md"
          onPress={onCustomizeDashboard}
          startContent={<Icon icon="ph:sliders" />}
        >
          Customize Dashboard
        </Button>
      </section>
    </main>
  );
}
