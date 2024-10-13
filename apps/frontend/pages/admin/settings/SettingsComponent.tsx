import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Checkbox, Button, Input, Select, SelectItem, Loading, Chip, Spacer } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { SettingsComponentProps, UserEntity, UserSort } from './';

export function SettingsComponent({
  users,
  usersCount,
  isLoading,
  searchTerm,
  sortOrder,
  currentUser,
  onSearchTermChange,
  onSortOrderChange,
  onUpdateUser
}: SettingsComponentProps) {
  const handleUpdateUser = async (updatedUser: Partial<UserEntity>) => {
    try {
      await onUpdateUser(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <SettingsHeader title="Settings" />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-bold">Email Templates</h2>
              <Spacer x={1} />
              <Button color="primary" auto>
                <Icon icon="ph:plus" className="mr-2" />
                Add New Template
              </Button>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {['Welcome Email', 'Shipment Confirmation', 'Delivery Update'].map((template, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{template}</span>
                    <Button auto color="primary" variant="light">Edit</Button>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-bold">Notification Settings</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Checkbox defaultSelected>Email Notifications</Checkbox>
                <Checkbox>SMS Notifications</Checkbox>
                <Checkbox>Push Notifications</Checkbox>
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" auto onClick={() => handleUpdateUser({})}>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-bold">Integration Management</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>GPS Tracking System</span>
                  <div>
                    <Chip color="success" className="mr-2">Connected</Chip>
                    <Button auto color="danger" size="sm">Disconnect</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Management Software</span>
                  <div>
                    <Chip color="warning" className="mr-2">Pending</Chip>
                    <Button auto color="primary" size="sm">Configure</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer CRM</span>
                  <div>
                    <Chip color="error" className="mr-2">Disconnected</Chip>
                    <Button auto color="primary" size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-bold">System Configuration</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Select
                  label="Default Timezone"
                  placeholder="Select a timezone"
                  defaultSelectedKeys={[currentUser?.Timezone || 'UTC']}
                >
                  <SelectItem key="UTC" value="UTC">UTC</SelectItem>
                </Select>
                <Select
                  label="Date Format"
                  placeholder="Select a date format"
                  defaultSelectedKeys={['MM/DD/YYYY']}
                >
                  <SelectItem key="MM/DD/YYYY" value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem key="DD/MM/YYYY" value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem key="YYYY-MM-DD" value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </Select>
                <Select
                  label="Default Language"
                  placeholder="Select a language"
                  defaultSelectedKeys={['English']}
                >
                  <SelectItem key="English" value="English">English</SelectItem>
                </Select>
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" auto onClick={() => handleUpdateUser({})}>Save Configuration</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">User Search and Sort</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <Input
                  placeholder="Search users"
                  value={searchTerm}
                  onChange={(e) => onSearchTermChange(e.target.value)}
                  startContent={<Icon icon="ph:magnifying-glass" />}
                />
                <Select
                  placeholder="Sort users"
                  selectedKeys={sortOrder}
                  selectionMode="multiple"
                  onChange={(e) => onSortOrderChange(e.target.value as UserSort[])}
                >
                  <SelectItem key="firstName_ASC" value={{ field: 'firstName', order: 'ASC' }}>First Name (A-Z)</SelectItem>
                  <SelectItem key="firstName_DESC" value={{ field: 'firstName', order: 'DESC' }}>First Name (Z-A)</SelectItem>
                  <SelectItem key="lastName_ASC" value={{ field: 'lastName', order: 'ASC' }}>Last Name (A-Z)</SelectItem>
                  <SelectItem key="lastName_DESC" value={{ field: 'lastName', order: 'DESC' }}>Last Name (Z-A)</SelectItem>
                  <SelectItem key="email_ASC" value={{ field: 'email', order: 'ASC' }}>Email (A-Z)</SelectItem>
                  <SelectItem key="email_DESC" value={{ field: 'email', order: 'DESC' }}>Email (Z-A)</SelectItem>
                </Select>
              </div>
            </CardBody>
            <CardFooter>
              <p>Total Users: {usersCount}</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

function SettingsHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-end p-4 bg-[hsl(var(--app-background-100))]">
      <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mr-auto">
        {title}
      </h1>
      <Icon
        icon="ph:gear-fill"
        className="text-3xl text-[hsl(var(--app-foreground-600))]"
      />
    </header>
  );
}