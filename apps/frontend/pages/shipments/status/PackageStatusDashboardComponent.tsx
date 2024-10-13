import React from 'react';
import { PackageStatusDashboardHeader } from './PackageStatusDashboardHeader';
import { ShipmentStatusContainer } from './ShipmentStatusContainer';
import { RecentExceptionsContainer } from './RecentExceptionsContainer';
import { PackageStatusDashboardComponentProps } from './';

export function PackageStatusDashboardComponent({
  shipments,
  totalShipments,
  currentPage,
  onPageChange,
  onSearchTerm,
  onClientFilter,
  onStatusFilter,
  onSortOrder,
  isLoading,
  onTimeDeliveryRate,
  packagesWithExceptions,
  totalActiveShipments,
  recentExceptions,
  onResolveException,
  currentUser
}: PackageStatusDashboardComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <PackageStatusDashboardHeader
            onTimeDeliveryRate={onTimeDeliveryRate}
            packagesWithExceptions={packagesWithExceptions}
            totalActiveShipments={totalActiveShipments}
            isLoading={isLoading}
          />
        </section>

        <section className="col-span-12 lg:col-span-8">
          <ShipmentStatusContainer
            shipments={shipments}
            totalShipments={totalShipments}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onSearchTerm={onSearchTerm}
            onClientFilter={onClientFilter}
            onStatusFilter={onStatusFilter}
            onSortOrder={onSortOrder}
            isLoading={isLoading}
            onTimeDeliveryRate={onTimeDeliveryRate}
            packagesWithExceptions={packagesWithExceptions}
            totalActiveShipments={totalActiveShipments}
            recentExceptions={recentExceptions}
            onResolveException={onResolveException}
            currentUser={currentUser}
          />
        </section>

        <section className="col-span-12 lg:col-span-4">
          <RecentExceptionsContainer
            recentExceptions={recentExceptions}
            onResolveException={onResolveException}
            isLoading={isLoading}
            error={null}
          />
        </section>
      </div>
    </main>
  );
}
