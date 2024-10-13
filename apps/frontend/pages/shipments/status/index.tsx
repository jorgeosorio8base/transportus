import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList, useCurrentUser } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentSort, ShipmentFilter, SortOrder } from '@transportus/core';
import { PackageStatusDashboardComponent } from './PackageStatusDashboard';

export interface PackageStatusDashboardComponentProps {
  shipments: ShipmentEntity[];
  totalShipments: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSearchTerm: (value: string) => void;
  onClientFilter: (value: string) => void;
  onStatusFilter: (value: string) => void;
  onSortOrder: (value: ShipmentSort[]) => void;
  isLoading: boolean;
  onTimeDeliveryRate: number;
  packagesWithExceptions: number;
  totalActiveShipments: number;
  recentExceptions: { id: string; packageId: string; description: string; }[];
  onResolveException: (exceptionId: string) => void;
  currentUser: UserEntity | null;
}

export default function PackageStatusDashboardPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [clientFilter, setClientFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();

  const shipmentFilters = useMemo<ShipmentFilter>(() => {
    const filters: ShipmentFilter = {};

    if (searchTerm) {
      filters.OR = [
        { origin: { contains: searchTerm } },
        { destination: { contains: searchTerm } },
        { Package: { some: { id: { contains: searchTerm } } } }
      ];
    }

    if (clientFilter) {
      filters.client_id = { id: { equals: clientFilter } };
    }

    if (statusFilter) {
      filters.Package = { some: { status: { equals: statusFilter } } };
    }

    return filters;
  }, [searchTerm, clientFilter, statusFilter]);

  const { data: shipmentsData, isLoading: isShipmentsLoading, isError: isShipmentsError } = useShipmentList({
    filter: shipmentFilters,
    sort: sortOrder,
    skip: (currentPage - 1) * itemsPerPage,
    first: itemsPerPage
  });

  const { data: currentUser } = useCurrentUser();

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleClientFilter = useCallback((value: string) => {
    setClientFilter(value);
    setCurrentPage(1);
  }, []);

  const handleStatusFilter = useCallback((value: string) => {
    setStatusFilter(value);
    setCurrentPage(1);
  }, []);

  const handleSortOrder = useCallback((value: ShipmentSort[]) => {
    setSortOrder(value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    if (isShipmentsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isShipmentsError) {
        showAlert({
          title: "Error",
          message: "An error occurred while fetching the shipments list.",
          severity: "error"
        });
      }
    }
  }, [isShipmentsLoading, isShipmentsError, showLoading, hideLoading, showAlert]);

  const onTimeDeliveryRate = useMemo(() => {
    return 95.5;
  }, []);

  const packagesWithExceptions = useMemo(() => {
    return 12;
  }, []);

  const totalActiveShipments = useMemo(() => {
    return shipmentsData?.count || 0;
  }, [shipmentsData]);

  const recentExceptions = useMemo(() => {
    return [
      { id: '1', packageId: 'PKG001', description: 'Delivery attempt failed' },
      { id: '2', packageId: 'PKG002', description: 'Package damaged during transit' },
      { id: '3', packageId: 'PKG003', description: 'Address not found' }
    ];
  }, []);

  const handleResolveException = useCallback((exceptionId: string) => {
    console.log(`Resolving exception with ID: ${exceptionId}`);
    showAlert({
      title: "Exception Resolved",
      message: `Exception ${exceptionId} has been marked as resolved.`,
      severity: "success"
    });
  }, [showAlert]);

  return (
    <PackageStatusDashboardComponent
      shipments={shipmentsData?.shipments || []}
      totalShipments={shipmentsData?.count || 0}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      onSearchTerm={handleSearchTerm}
      onClientFilter={handleClientFilter}
      onStatusFilter={handleStatusFilter}
      onSortOrder={handleSortOrder}
      isLoading={isShipmentsLoading}
      onTimeDeliveryRate={onTimeDeliveryRate}
      packagesWithExceptions={packagesWithExceptions}
      totalActiveShipments={totalActiveShipments}
      recentExceptions={recentExceptions}
      onResolveException={handleResolveException}
      currentUser={currentUser}
    />
  );
}

PackageStatusDashboardPresenter.layout = "AppLayout";
PackageStatusDashboardPresenter.auth = true;