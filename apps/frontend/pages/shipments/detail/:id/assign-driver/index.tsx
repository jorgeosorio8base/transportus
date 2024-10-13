import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useShipmentList } from '@/src/hooks';
import { ShipmentEntity, ShipmentSort, ShipmentFilter, SortOrder } from '@transportus/core';
import { DriverAssignmentModalComponent } from './DriverAssignmentModal';

export interface DriverAssignmentModalComponentProps {
  shipments: ShipmentEntity[];
  shipmentsCount: number;
  isLoading: boolean;
  searchTerm: string;
  sortOrder: ShipmentSort[];
  selectedShipment: ShipmentEntity | null;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: ShipmentSort[]) => void;
  onSelectShipment: (shipment: ShipmentEntity) => void;
  onAssignDriver: (driverId: string) => Promise<void>;
}

export default function DriverAssignmentModalPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [selectedShipment, setSelectedShipment] = useState<ShipmentEntity | null>(null);

  const shipmentFilters = useMemo<ShipmentFilter>(() => {
    if (!searchTerm) {
      return {};
    }
    return {
      OR: [
        { origin: { contains: searchTerm } },
        { destination: { contains: searchTerm } },
        { priority: { contains: searchTerm } }
      ]
    };
  }, [searchTerm]);

  const { data: shipmentData, isLoading: isShipmentsLoading, isError: isShipmentsError } = useShipmentList({
    filter: shipmentFilters,
    sort: sortOrder
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: ShipmentSort[]) => {
    setSortOrder(value);
  }, []);

  const handleSelectShipment = useCallback((shipment: ShipmentEntity) => {
    setSelectedShipment(shipment);
  }, []);

  const handleAssignDriver = useCallback(async (driverId: string) => {
    if (!selectedShipment) {
      showAlert({
        title: 'Error',
        message: 'Please select a shipment first.',
        severity: 'error'
      });
      return;
    }

    try {
      showLoading();
      // Here you would call the mutation to assign the driver
      // const response = await assignDriverMutation({ shipmentId: selectedShipment.Id, driverId });
      hideLoading();
      showAlert({
        title: 'Success',
        message: 'Driver assigned successfully.',
        severity: 'success'
      });
    } catch (error) {
      hideLoading();
      showAlert({
        title: 'Error',
        message: 'Failed to assign driver. Please try again.',
        severity: 'error'
      });
    }
  }, [selectedShipment, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (isShipmentsLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isShipmentsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the shipments list.',
          severity: 'error'
        });
      }
    }
  }, [isShipmentsLoading, isShipmentsError, showLoading, hideLoading, showAlert]);

  const shipments = useMemo(() => shipmentData?.items || [], [shipmentData]);
  const shipmentsCount = useMemo(() => shipmentData?.count || 0, [shipmentData]);

  return (
    <DriverAssignmentModalComponent
      shipments={shipments}
      shipmentsCount={shipmentsCount}
      isLoading={isShipmentsLoading}
      searchTerm={searchTerm}
      sortOrder={sortOrder}
      selectedShipment={selectedShipment}
      onSearchTermChange={handleSearchTerm}
      onSortOrderChange={handleSortOrder}
      onSelectShipment={handleSelectShipment}
      onAssignDriver={handleAssignDriver}
    />
  );
}

DriverAssignmentModalPresenter.layout = 'AppLayout';
DriverAssignmentModalPresenter.auth = true;