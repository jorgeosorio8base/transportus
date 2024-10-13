import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button, Input, Spinner, Card, CardHeader, CardBody, CardFooter, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { UserEntity, UserSort, CreateUserInput } from '@transportus/core';

interface UserManagementComponentProps {
  usersDataState: {
    users: UserEntity[];
    count: number;
  };
  sortOrder: UserSort[];
  handleSortOrder: (value: UserSort[]) => void;
  searchTerm: string;
  handleSearchTerm: (value: string) => void;
  handleCreateUser: (userData: CreateUserInput) => Promise<void>;
  isAdmin: boolean;
}

export function UserManagementComponent({
  usersDataState,
  sortOrder,
  handleSortOrder,
  searchTerm,
  handleSearchTerm,
  handleCreateUser,
  isAdmin
}: UserManagementComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-6 p-6">
      <section className="col-span-12">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Icon
              icon="ph:users-three"
              className="text-[hsl(var(--app-primary-500))] mr-2 text-2xl"
            />
            <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
              User Management
            </h1>
          </div>
        </header>
      </section>

      <section className="col-span-12 lg:col-span-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">
          User Accounts
        </h2>
        <Input
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => handleSearchTerm(e.target.value)}
          startContent={<Icon icon="ph:magnifying-glass" />}
          className="mb-4"
        />
        {usersDataState.users.length === 0 ? (
          <p className="text-[hsl(var(--app-foreground-600))]">No users found.</p>
        ) : (
          <Table
            aria-label="User accounts table"
            sortDescriptor={{ column: sortOrder[0], direction: 'ascending' }}
            onSortChange={(column) => handleSortOrder([column as UserSort])}
            className="min-w-full"
          >
            <TableHeader>
              <TableColumn key="name" allowsSorting>NAME</TableColumn>
              <TableColumn key="email" allowsSorting>EMAIL</TableColumn>
              <TableColumn key="role" allowsSorting>ROLE</TableColumn>
              <TableColumn key="status" allowsSorting>STATUS</TableColumn>
              <TableColumn key="actions">ACTIONS</TableColumn>
            </TableHeader>
            <TableBody items={usersDataState.users}>
              {(item) => (
                <TableRow key={item.Id}>
                  <TableCell>{`${item.FirstName || ''} ${item.LastName || ''}`}</TableCell>
                  <TableCell>{item.Email || 'N/A'}</TableCell>
                  <TableCell>{item.Is8Base ? 'Admin' : 'User'}</TableCell>
                  <TableCell>
                    <Chip
                      color={item.Status === 'Active' ? 'success' : 'warning'}
                      variant="flat"
                    >
                      {item.Status || 'Unknown'}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" color="primary" aria-label="Edit user">
                        <Icon icon="ph:pencil" className="mr-1" /> Edit
                      </Button>
                      {item.Status === 'Active' ? (
                        <Button size="sm" color="danger" aria-label="Deactivate user">
                          <Icon icon="ph:power" className="mr-1" /> Deactivate
                        </Button>
                      ) : (
                        <Button size="sm" color="success" aria-label="Approve user">
                          <Icon icon="ph:check" className="mr-1" /> Approve
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </section>

      <section className="col-span-12 lg:col-span-4 space-y-6">
        {isAdmin && (
          <Card className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">
              Add New User
            </h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const userData: CreateUserInput = {
                Email: formData.get('email') as string,
                Password: formData.get('password') as string,
                FirstName: formData.get('firstName') as string,
                LastName: formData.get('lastName') as string,
                Timezone: formData.get('timezone') as string
              };
              handleCreateUser(userData);
            }}>
              <Input
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
                isRequired
              />
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Enter last name"
                isRequired
              />
              <Input
                name="email"
                label="Email"
                placeholder="Enter email address"
                type="email"
                isRequired
              />
              <Input
                name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
                isRequired
              />
              <Select
                name="timezone"
                label="Timezone"
                placeholder="Select timezone"
                isRequired
              >
                {['UTC', 'GMT', 'EST', 'CST', 'MST', 'PST'].map((tz) => (
                  <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                ))}
              </Select>
              <Button
                type="submit"
                color="primary"
                className="w-full"
                startContent={<Icon icon="ph:user-plus-fill" />}
              >
                Add User
              </Button>
            </form>
          </Card>
        )}
      </section>

      <section className="col-span-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">
          Role Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Admin',
              permissions: [
                { icon: 'ph:users', text: 'Manage all users' },
                { icon: 'ph:pencil', text: 'Create and delete roles' },
                { icon: 'ph:gear', text: 'Access all system features' }
              ],
              color: 'bg-[hsl(var(--app-primary-500))]'
            },
            {
              title: 'Manager',
              permissions: [
                { icon: 'ph:users-three', text: 'Manage team members' },
                { icon: 'ph:chart-line', text: 'View reports and analytics' },
                { icon: 'ph:truck', text: 'Update shipment statuses' }
              ],
              color: 'bg-[hsl(var(--app-secondary-500))]'
            },
            {
              title: 'User',
              permissions: [
                { icon: 'ph:package', text: 'View assigned shipments' },
                { icon: 'ph:user-circle', text: 'Update personal profile' },
                { icon: 'ph:bell', text: 'Receive notifications' }
              ],
              color: 'bg-[hsl(var(--app-success-500))]'
            }
          ].map((role, index) => (
            <Card key={index} className="h-full">
              <CardHeader className={`${role.color} rounded-t-lg p-4`}>
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
              </CardHeader>
              <CardBody className="p-4">
                <ul className="list-none p-0">
                  {role.permissions.map((permission, permIndex) => (
                    <li key={permIndex} className="flex items-center mb-2 text-sm text-[hsl(var(--app-foreground-700))]">
                      <Icon
                        icon={permission.icon}
                        className="mr-2 w-4 h-4"
                        aria-hidden="true"
                      />
                      <span>{permission.text}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className="p-4 text-right">
                {isAdmin && (
                  <Button
                    size="sm"
                    color="primary"
                    variant="light"
                    onPress={() => console.log(`Edit permissions for ${role.title}`)}
                  >
                    Edit Permissions
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
