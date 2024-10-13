import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { PerformanceInsightsComponentProps } from './';

export function PerformanceInsightsComponent({
  trendAnalysisData,
  performanceComparisonData,
  metricDeviations,
  onSortChange,
  onGenerateReport,
  onSetKPIAlert
}: PerformanceInsightsComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))]">
      <Card className="mb-8 bg-[hsl(var(--app-background-100))] shadow-md">
        <CardBody className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon 
                icon="ph:chart-line-up" 
                className="text-[hsl(var(--app-primary-500))] text-3xl mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
                  Performance Insights
                </h1>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                  Analyze and track your delivery performance metrics
                </p>
              </div>
            </div>
            <button className="bg-[hsl(var(--app-primary-500))] hover:bg-[hsl(var(--app-primary-600))] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              Generate Report
            </button>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card shadow="md" className="h-full bg-[hsl(var(--app-background-100))] rounded-xl">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Trend Analysis</h2>
            <div className="h-48 bg-gray-200 rounded flex items-center justify-center mb-4">
              Chart Placeholder
            </div>
            <p className="text-sm text-[hsl(var(--app-foreground-600))]">
              Delivery time trends over the last 6 months
            </p>
          </CardBody>
        </Card>

        <Card shadow="md" className="h-full bg-[hsl(var(--app-background-100))] rounded-xl">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Comparison</h2>
            <div className="h-48 bg-gray-200 rounded flex items-center justify-center mb-4">
              Chart Placeholder
            </div>
            <p className="text-sm text-[hsl(var(--app-foreground-600))]">
              Comparison of current vs. previous quarter metrics
            </p>
          </CardBody>
        </Card>

        <Card shadow="md" className="h-full bg-[hsl(var(--app-background-100))] rounded-xl">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Metric Deviations</h2>
            <ul className="space-y-4">
              {metricDeviations.map((deviation, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon
                    icon={deviation.status === 'below' ? 'ph:warning-bold' : deviation.status === 'above' ? 'ph:check-circle-bold' : 'ph:info-bold'}
                    className={`text-2xl ${deviation.status === 'below' ? 'text-[hsl(var(--app-danger-500))]' : deviation.status === 'above' ? 'text-[hsl(var(--app-success-500))]' : 'text-[hsl(var(--app-warning-500))]'}`}
                  />
                  <span>{deviation.metric}: {deviation.value} (Target: {deviation.target})</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <Card className="mb-8 bg-[hsl(var(--app-background-100))] shadow-md rounded-xl">
        <CardBody className="p-6">
          <h2 className="text-xl font-semibold mb-4">Intelligent Recommendations</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Icon icon="ph:map-trifold-bold" className="text-[hsl(var(--app-primary-500))] text-2xl mr-3" />
              <div>
                <h3 className="font-semibold">Optimize Route Planning</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Implement AI-driven route optimization to reduce delivery times by an estimated 15%.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Icon icon="ph:chat-text-bold" className="text-[hsl(var(--app-primary-500))] text-2xl mr-3" />
              <div>
                <h3 className="font-semibold">Enhance Customer Communication</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Introduce real-time SMS updates to improve customer satisfaction scores.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Icon icon="ph:barcode-bold" className="text-[hsl(var(--app-primary-500))] text-2xl mr-3" />
              <div>
                <h3 className="font-semibold">Streamline Warehouse Operations</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Implement barcode scanning to reduce package processing time by 25%.</p>
              </div>
            </li>
          </ul>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-xl">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Historical Performance</h2>
            <div className="space-y-4">
              <select className="w-full p-2 border rounded">
                <option>On-time Delivery Rate</option>
                <option>Customer Satisfaction</option>
                <option>Fuel Efficiency</option>
              </select>
              <div className="flex space-x-4">
                <input type="date" className="w-1/2 p-2 border rounded" placeholder="Start Date" />
                <input type="date" className="w-1/2 p-2 border rounded" placeholder="End Date" />
              </div>
              <button className="w-full bg-[hsl(var(--app-primary-500))] text-white font-semibold py-2 px-4 rounded" onClick={() => onGenerateReport('delivery_time', '2023-01-01', '2023-06-30')}>
                Generate Report
              </button>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-xl">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-4">Custom KPI Alerts</h2>
            <div className="space-y-4">
              <select className="w-full p-2 border rounded">
                <option>On-time Delivery Rate</option>
                <option>Customer Satisfaction</option>
                <option>Fuel Efficiency</option>
              </select>
              <input type="number" className="w-full p-2 border rounded" placeholder="Enter threshold value" />
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Email
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  SMS
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  In-app
                </label>
              </div>
              <button className="w-full bg-[hsl(var(--app-primary-500))] text-white font-semibold py-2 px-4 rounded" onClick={() => onSetKPIAlert('delivery_time', 30, ['email', 'sms'])}>
                Set Alert
              </button>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-xl">
        <CardBody className="p-6">
          <h2 className="text-xl font-semibold mb-4">Collaborative Analysis</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full" />
              <div className="flex-grow">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Added a comment on On-time Delivery Rate</p>
                <p className="mt-2">The recent dip in on-time delivery rate seems to correlate with the introduction of new routes. We should review the efficiency of these routes.</p>
                <div className="mt-2 space-x-2">
                  <button className="text-[hsl(var(--app-primary-500))] font-semibold">Reply</button>
                  <button className="text-[hsl(var(--app-primary-500))] font-semibold">Share</button>
                </div>
              </div>
            </div>
            <textarea className="w-full p-2 border rounded" rows={3} placeholder="Add your analysis or comment..."></textarea>
            <button className="bg-[hsl(var(--app-primary-500))] text-white font-semibold py-2 px-4 rounded">
              Post Comment
            </button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
