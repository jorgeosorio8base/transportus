import React from 'react';
import { Card, CardHeader, CardBody, CheckboxGroup, Checkbox, Select, SelectItem, Button, DateRangePicker, Icon } from '@nextui-org/react';
import { ReportGeneratorComponentProps } from './';

export function ReportGeneratorComponent({
  analyticsData,
  isAnalyticsLoading,
  selectedDataPoints,
  handleDataPointSelection,
  dateRange,
  handleDateRangeChange,
  selectedClient,
  handleClientSelection,
  selectedPackageType,
  handlePackageTypeSelection,
  selectedVisualization,
  handleVisualizationChange,
  advancedOptions,
  handleAdvancedOptionsChange,
  handleGenerateReport,
  handleSaveTemplate,
  scheduleOption,
  handleScheduleChange,
  currentUser
}: ReportGeneratorComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans rounded-xl appShadow-[var(--app-box-shadow-small)] sticky top-0 z-10">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <Icon icon="ph:chart-pie-slice" className="text-[hsl(var(--app-primary-600))] text-3xl sm:text-4xl mr-2" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--app-primary-700))]">Report Generator</h1>
                <p className="text-sm sm:text-base text-[hsl(var(--app-foreground-600))]">Create and customize your analytics reports</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button auto color="primary" onClick={handleGenerateReport} className="w-full sm:w-auto">Generate Report</Button>
              <Button auto color="secondary" onClick={handleSaveTemplate} className="w-full sm:w-auto">Save Template</Button>
            </div>
          </CardHeader>
          <CardBody className="px-6 pb-6 pt-0">
            <p className="text-[hsl(var(--app-foreground-700))]">Welcome, {currentUser?.name || 'User'}! Start by selecting your data points and visualization options below.</p>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-xl appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">Select Data Points</h2>
          </CardHeader>
          <CardBody className="p-4">
            <CheckboxGroup value={selectedDataPoints} onValueChange={(value) => value.forEach(handleDataPointSelection)}>
              <Checkbox value="KPIs">KPIs</Checkbox>
              <Checkbox value="DeliveryTimes">Delivery Times</Checkbox>
              <Checkbox value="OperationalEfficiency">Operational Efficiency</Checkbox>
              <Checkbox value="ShippingActivity">Shipping Activity</Checkbox>
            </CheckboxGroup>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-xl appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">Apply Filters</h2>
          </CardHeader>
          <CardBody className="p-4 flex flex-col gap-4">
            <DateRangePicker
              label="Date Range"
              placeholder="Select date range"
              value={{
                start: new Date(dateRange.startDate),
                end: new Date(dateRange.endDate)
              }}
              onChange={(value) => {
                if (value.start && value.end) {
                  handleDateRangeChange(value.start.toISOString(), value.end.toISOString());
                }
              }}
            />
            <Select
              label="Client"
              placeholder="Select a client"
              selectedKeys={[selectedClient]}
              onSelectionChange={(keys) => handleClientSelection(keys.currentKey.toString())}
            >
              <SelectItem key="allClients">All Clients</SelectItem>
              <SelectItem key="client1">Client 1</SelectItem>
              <SelectItem key="client2">Client 2</SelectItem>
            </Select>
            <Select
              label="Package Type"
              placeholder="Select a package type"
              selectedKeys={[selectedPackageType]}
              onSelectionChange={(keys) => handlePackageTypeSelection(keys.currentKey.toString())}
            >
              <SelectItem key="allTypes">All Types</SelectItem>
              <SelectItem key="type1">Type 1</SelectItem>
              <SelectItem key="type2">Type 2</SelectItem>
            </Select>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-100))] rounded-xl appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">Choose Visualization</h2>
          </CardHeader>
          <CardBody className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { type: 'Bar Chart', icon: 'ph:chart-bar' },
              { type: 'Pie Chart', icon: 'ph:chart-pie-slice' },
              { type: 'Line Graph', icon: 'ph:chart-line-up' },
              { type: 'Table', icon: 'ph:table' }
            ].map(({ type, icon }) => (
              <Button
                key={type}
                isIconOnly
                className={`flex flex-col items-center justify-center p-4 ${selectedVisualization === type ? 'bg-[hsl(var(--app-primary-100))]' : 'bg-[hsl(var(--app-background-200))]'}`}
                onClick={() => handleVisualizationChange(type)}
                aria-label={type}
              >
                <Icon icon={icon} className="text-3xl" />
                <span className="mt-2 text-xs">{type}</span>
              </Button>
            ))}
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-100))] rounded-xl appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">Advanced Options</h2>
          </CardHeader>
          <CardBody className="p-4 flex flex-col sm:flex-row gap-4">
            <Checkbox
              isSelected={advancedOptions.dataPivoting}
              onValueChange={() => handleAdvancedOptionsChange('dataPivoting')}
            >
              Enable Data Pivoting
            </Checkbox>
            <Checkbox
              isSelected={advancedOptions.crossTabulation}
              onValueChange={() => handleAdvancedOptionsChange('crossTabulation')}
            >
              Enable Cross-tabulation
            </Checkbox>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <footer className="flex flex-col sm:flex-row justify-between items-center p-4 bg-[hsl(var(--app-background-50))] rounded-xl appShadow-[var(--app-box-shadow-small)]">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-0">
            <Button
              color="primary"
              onClick={handleGenerateReport}
              startContent={<Icon icon="ph:file-text" />}
            >
              Generate Report
            </Button>
            <Button
              variant="bordered"
              onClick={handleSaveTemplate}
              startContent={<Icon icon="ph:floppy-disk" />}
            >
              Save Template
            </Button>
          </div>
          <Select
            label="Schedule Report"
            placeholder="Select schedule"
            selectedKeys={[scheduleOption]}
            onSelectionChange={(keys) => handleScheduleChange(keys.currentKey.toString())}
            className="w-full sm:w-48"
          >
            <SelectItem key="never">Never</SelectItem>
            <SelectItem key="daily">Daily</SelectItem>
            <SelectItem key="weekly">Weekly</SelectItem>
            <SelectItem key="monthly">Monthly</SelectItem>
          </Select>
        </footer>
      </div>
    </main>
  );
}
