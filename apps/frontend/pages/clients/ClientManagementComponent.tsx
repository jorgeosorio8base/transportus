import React from 'react';
import { ClientManagementComponentProps } from '@transportus/core';
import { ClientManagementHeader } from './ClientManagementHeader';
import { ClientListSection } from './ClientListSection';
import { QuickActionsSection } from './QuickActionsSection';
import { RecentClientActivitySection } from './RecentClientActivitySection';

export function ClientManagementComponent({
  clients,
  clientsCount,
  isLoading,
  searchTerm,
  sortOrder,
  currentUser,
  recentClientActivity,
  onSearchTermChange,
  onSortOrderChange,
  onAddClient,
  onEditClient,
  onViewClientDetails
}: ClientManagementComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <ClientManagementHeader currentUser={currentUser} />
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <ClientListSection
            clients={clients}
            clientsCount={clientsCount}
            isLoading={isLoading}
            searchTerm={searchTerm}
            sortOrder={sortOrder}
            currentUser={currentUser}
            recentClientActivity={recentClientActivity}
            onSearchTermChange={onSearchTermChange}
            onSortOrderChange={onSortOrderChange}
            onAddClient={onAddClient}
            onEditClient={onEditClient}
            onViewClientDetails={onViewClientDetails}
          />
        </section>
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <QuickActionsSection isLoading={isLoading} />
          <RecentClientActivitySection
            recentClientActivity={recentClientActivity}
            isLoading={isLoading}
          />
        </aside>
      </div>
    </main>
  );
}
