import React from 'react';
import { Input, Select, SelectItem, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Link, Skeleton, Pagination, Tooltip, Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ClientEntity, UserEntity, ClientSort, ClientFilter } from '@transportus/core';

interface ClientSearchandListComponentProps {
  clients: ClientEntity[];
  totalClients: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSortChange: (value: ClientSort[]) => void;
  onSearch: (value: string) => void;
  searchTerm: string;
  sortOrder: ClientSort[];
  isLoading: boolean;
  currentUser: UserEntity | undefined;
}

export function ClientSearchandListComponent({
  clients,
  totalClients,
  currentPage,
  totalPages,
  onPageChange,
  onSortChange,
  onSearch,
  searchTerm,
  sortOrder,
  isLoading,
  currentUser
}: ClientSearchandListComponentProps) {
  const columns = [
    { key: 'companyName', label: 'COMPANY' },
    { key: 'primaryContact', label: 'PRIMARY CONTACT' },
    { key: 'address', label: 'LOCATION' },
    { key: 'status', label: 'STATUS' },
    { key: 'actions', label: 'ACTIONS' }
  ];

  const renderCell = (client: ClientEntity, columnKey: React.Key) => {
    switch (columnKey) {
      case 'companyName':
        return <div className="font-semibold">{client.CompanyName}</div>;
      case 'primaryContact':
        return client.PrimaryContact;
      case 'address':
        return client.Address;
      case 'status':
        return (
          <Chip color={client.Status === 'Active' ? 'success' : client.Status === 'Pending' ? 'warning' : 'danger'}>
            {client.Status}
          </Chip>
        );
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <Link href={`/clients/${client.Id}/view`} color="primary">
              <Icon icon="ph:eye" className="text-lg" />
            </Link>
            <Link href={`/clients/${client.Id}/edit`} color="primary">
              <Icon icon="ph:pencil-simple" className="text-lg" />
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
          Client Search and List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-4">
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onValueChange={onSearch}
              startContent={<Icon icon="ph:magnifying-glass" />}
              className="w-full"
            />
          </div>
          <div className="md:col-span-3">
            <Select
              placeholder="Filter by status"
              className="w-full"
            >
              <SelectItem key="active" value="active">Active</SelectItem>
              <SelectItem key="inactive" value="inactive">Inactive</SelectItem>
              <SelectItem key="pending" value="pending">Pending</SelectItem>
            </Select>
          </div>
          <div className="md:col-span-3">
            <Select
              placeholder="Sort by"
              selectedKeys={new Set(sortOrder.map(s => s.field))}
              onSelectionChange={(keys) => onSortChange(Array.from(keys).map(k => ({ field: k as keyof ClientEntity, direction: 'asc' })))}
              className="w-full"
            >
              <SelectItem key="companyName" value="companyName">Company Name</SelectItem>
              <SelectItem key="primaryContact" value="primaryContact">Primary Contact</SelectItem>
              <SelectItem key="createdAt" value="createdAt">Created Date</SelectItem>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Button 
              color="primary"
              className="w-full"
              startContent={<Icon icon="ph:funnel" />}
            >
              Advanced Search
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-[hsl(var(--app-background-50))] rounded-medium shadow-[var(--app-box-shadow-small)]">
        <Table
          aria-label="Client list table"
          className="w-full"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                total={totalPages}
                page={currentPage}
                onChange={onPageChange}
                color="primary"
              />
            </div>
          }
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key} className="text-[hsl(var(--app-foreground-900))]">
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody 
            items={clients}
            loadingContent={<Spinner />}
            loadingState={isLoading ? 'loading' : 'idle'}
            emptyContent={isLoading ? null : 'No clients found'}
          >
            {(client) => (
              <TableRow key={client.Id}>
                {(columnKey) => (
                  <TableCell className="text-[hsl(var(--app-foreground-700))]">
                    {renderCell(client, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      <footer className="mt-4 text-center text-sm text-[hsl(var(--app-foreground-600))]">
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <span>Showing {clients.length} of {totalClients} clients | Page {currentPage} of {totalPages}</span>
        )}
      </footer>
    </main>
  );
}
