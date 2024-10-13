import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Button, ButtonGroup, Tooltip } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, PieChart, Pie, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { NotificationEntity, ShipmentEntity, AnalyticEntity, UserEntity } from '@transportus/core';

interface HomeComponentProps {
  dashboardData: {
    notifications: NotificationEntity[];
    shipments: ShipmentEntity[];
    analytics: AnalyticEntity[];
    currentUser: UserEntity | null;
  };
  isLoading: boolean;
  onCreateShipment: () => void;
  onViewAllShipments: () => void;
  onViewAllNotifications: () => void;
}

export function HomeComponent({
  dashboardData,
  isLoading,
  onCreateShipment,
  onViewAllShipments,
  onViewAllNotifications
}: HomeComponentProps) {
  const { notifications, shipments, analytics, currentUser } = dashboardData;

  if (isLoading) {
    return (
      <main className="grid grid-cols-12 gap-6 bg-[color:hsl(var(--app-background-50))] p-6">
        <div className="col-span-12">
          <h1 className="text-2xl font-bold text-[color:hsl(var(--app-foreground-900))]">
            Welcome to Transport with US Dashboard
          </h1>
        </div>
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
              <CardHeader className="h-10 bg-[color:hsl(var(--app-background-200))]" />
              <CardBody className="h-40 bg-[color:hsl(var(--app-background-100))]" />
            </Card>
          ))}
        </div>
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Card key={i} className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
              <CardHeader className="h-10 bg-[color:hsl(var(--app-background-200))]" />
              <CardBody className="h-64 bg-[color:hsl(var(--app-background-100))]" />
            </Card>
          ))}
        </div>
      </main>
    );
  }

  const activeShipments = shipments.length;
  const onTimeDeliveries = shipments.filter(s => s.Priority === 'High').length / shipments.length * 100;
  const clientSatisfaction = analytics.find(a => a.ReportName === 'ClientSatisfaction')?.Data?.rating || 4.8;

  const recentActivities = notifications.slice(0, 3);
  const upcomingDeliveries = shipments.slice(0, 3);

  const performanceData = analytics.find(a => a.ReportName === 'DeliveryPerformance')?.Data?.monthlyData || [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 280 },
    { name: 'May', value: 590 },
  ];

  const clientDistributionData = analytics.find(a => a.ReportName === 'ClientDistribution')?.Data?.distribution || [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 300 },
    { name: 'D', value: 200 },
  ];

  return (
    <main className="grid grid-cols-12 gap-6 bg-[color:hsl(var(--app-background-50))] p-6">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-[color:hsl(var(--app-foreground-900))]">
          Welcome to Transport with US Dashboard
        </h1>
      </div>

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Quick Stats</h2>
          </CardHeader>
          <CardBody>
            <dl>
              <div className="flex justify-between mb-2">
                <Tooltip content="Total number of active shipments">
                  <dt>Active Shipments</dt>
                </Tooltip>
                <dd>{activeShipments}</dd>
              </div>
              <div className="flex justify-between mb-2">
                <Tooltip content="Percentage of deliveries made on time">
                  <dt>On-Time Deliveries</dt>
                </Tooltip>
                <dd>{onTimeDeliveries.toFixed(1)}%</dd>
              </div>
              <div className="flex justify-between">
                <Tooltip content="Average client satisfaction rating">
                  <dt>Client Satisfaction</dt>
                </Tooltip>
                <dd>{clientSatisfaction}/5</dd>
              </div>
            </dl>
          </CardBody>
        </Card>

        <Card className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardBody>
            <ul className="list-none p-0">
              {recentActivities.map((activity, index) => (
                <li key={index} className="flex items-center mb-2">
                  <Icon icon="ph:bell-ringing" className="mr-2 text-[color:hsl(var(--app-primary-500))]" aria-hidden="true" />
                  <span className="text-sm text-[color:hsl(var(--app-foreground-700))]">
                    {activity.Content}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Upcoming Deliveries</h2>
          </CardHeader>
          <CardBody>
            <ul className="list-none p-0">
              {upcomingDeliveries.map((delivery, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[color:hsl(var(--app-foreground-700))]">
                    Package #{delivery.Id}
                  </span>
                  <span className="text-sm font-semibold">
                    ETA: {new Date(delivery.CreatedAt).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Delivery Performance</h2>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <RechartsTooltip />
                <text x="50%" y="20" textAnchor="middle" dominantBaseline="hanging">
                  Delivery Performance Over Time
                </text>
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card className="h-full bg-[color:hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-lg font-semibold">Client Distribution</h2>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie dataKey="value" data={clientDistributionData} fill="#8884d8" label />
                <RechartsTooltip />
                <text x="50%" y="20" textAnchor="middle" dominantBaseline="hanging">
                  Client Distribution
                </text>
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 mt-6">
        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
        <ButtonGroup>
          <Button color="primary" onClick={onCreateShipment} aria-label="Create new shipment">
            <Icon icon="ph:package-plus" className="mr-1" aria-hidden="true" /> New Shipment
          </Button>
          <Button color="secondary" onClick={onViewAllShipments} aria-label="Track package">
            <Icon icon="ph:package-search" className="mr-1" aria-hidden="true" /> Track Package
          </Button>
          <Button color="success" onClick={() => {}} aria-label="Manage clients">
            <Icon icon="ph:users-three" className="mr-1" aria-hidden="true" /> Manage Clients
          </Button>
          <Button color="warning" onClick={onViewAllNotifications} aria-label="View reports">
            <Icon icon="ph:chart-line-up" className="mr-1" aria-hidden="true" /> View Reports
          </Button>
        </ButtonGroup>
      </div>
    </main>
  );
}
