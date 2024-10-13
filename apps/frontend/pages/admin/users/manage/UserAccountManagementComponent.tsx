import React from 'react';
import { Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination, CircularProgress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { UserEntity, UserSort } from '@transportus/core';

interface UserAccountManagementComponentProps {
  usersData: {
    users: UserEntity[];
    count: number;
  };
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: UserSort[];
  onSortOrderChange: (value: UserSort[]) => void;
  onCreateUser: () => void;
  onEditUser: (userId: string) => void;
  onDeactivateUser: (userId: string) => void;
}

export function UserAccountManagementComponent({
  usersData,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  onCreateUser,
  onEditUser,
  onDeactivateUser
}: UserAccountManagementComponentProps) {
  const handleSort = (columnKey: string) => {
    const newSortOrder = sortOrder.map(sort => {
      if (sort.field === columnKey) {
        return { ...sort, direction: sort.direction === 'ASC' ? 'DESC' : 'ASC' };
      }
      return sort;
    });
    onSortOrderChange(newSortOrder);
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-6 bg-[hsl(var(--app-background-50))]">
      <header className="col-span-12 flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
          User Account Management
        </h1>
        <div className="flex items-center space-x-4">
          <Input
            className="w-64 hover:border-[hsl(var(--app-primary-400))] focus:border-[hsl(var(--app-primary-500))]"
            type="search"
            label="Search users"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            startContent={<Icon icon="ph:user-focus" className="text-[hsl(var(--app-foreground-400))]" />}
            size="md"
            isDisabled={isLoading}
          />
          <Button
            color="primary"
            variant="solid"
            onClick={onCreateUser}
            startContent={<Icon icon="ph:user-plus-fill" />}
            size="md"
            isDisabled={isLoading}
            aria-label="Create new user account"
            className="hover:bg-[hsl(var(--app-primary-600))] focus:ring-2 focus:ring-[hsl(var(--app-primary-500))] focus:ring-offset-2"
          >
            Create New Account
          </Button>
        </div>
      </header>

      <section className="col-span-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <CircularProgress aria-label="Loading..." />
          </div>
        ) : usersData.users.length === 0 ? (
          <div className="text-center text-[hsl(var(--app-foreground-600))]">
            No users found.
          </div>
        ) : (
          <Table aria-label="User accounts table" color="primary" className="rounded-lg overflow-hidden">
            <TableHeader>
              <TableColumn onClick={() => handleSort('FirstName')}>USERNAME</TableColumn>
              <TableColumn onClick={() => handleSort('Origin')}>ROLE</TableColumn>
              <TableColumn onClick={() => handleSort('Status')}>STATUS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {usersData.users.map((user) => (
                <TableRow key={user.Id}>
                  <TableCell>{`${user.FirstName} ${user.LastName}`}</TableCell>
                  <TableCell>{user.Origin || 'N/A'}</TableCell>
                  <TableCell>
                    <Chip
                      color={user.Status === 'Active' ? 'success' : user.Status === 'Inactive' ? 'warning' : 'default'}
                      variant="flat"
                    >
                      {user.Status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button
                        size="sm"
                        variant="light"
                        onClick={() => onEditUser(user.Id || '')}
                        startContent={<Icon icon="ph:user-pencil" />}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => onDeactivateUser(user.Id || '')}
                        startContent={<Icon icon="ph:user-minus" />}
                      >
                        Deactivate
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>

      <footer className="col-span-12 flex justify-between items-center mt-4">
        <div className="text-sm text-[hsl(var(--app-foreground-600))]">
          Showing 1 to {usersData.users.length} of {usersData.count} results
        </div>
        <Pagination
          total={Math.ceil(usersData.count / 10)}
          initialPage={1}
          onChange={(page) => {
            // Handle page change
          }}
          color="primary"
        />
      </footer>
    </main>
  );
}
