import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLoading, useAlert, useShipment, useStatusUpdateList } from '@/src/hooks';
import { ShipmentEntity, StatusUpdateEntity, StatusUpdateSort, SortOrder } from '@transportus/core';
import { ShipmentDetailViewComponent } from './ShipmentDetailView';

export interface ShipmentDetailViewComponentProps {
  headerProps: {
    shipmentNumber?: string;
    status?: string;
  };
  infoCardProps: {
    shipmentNumber?: string;
    origin?: string;
    destination?: string;
    estimatedDelivery: string;
    client: string;
    packageSpecs: string;
  };
  trackingHistoryCardProps: {
    statusUpdates: StatusUpdateEntity[];
    totalCount: number;
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
  };
  actionsCardProps: {
    onUpdateStatus: (newStatus: string) => Promise<void>;
    onContactDriver: () => void;
    onContactClient: () => void;
    onReportIssue: () => void;
  };
  routeInformationCardProps: {
    currentLocation: string;
    nextStop: string;
    distanceTraveled: string;
    remainingDistance: string;
  };
}

export default function ShipmentDetailViewPresenter() {
  const { id } = useParams<{ id: string }>();
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();

  const {
    data: shipmentData,
    isLoading: isShipmentLoading,
    isError: isShipmentError,
    refetch: refetchShipment
  } = useShipment({ id });

  const [statusUpdateSort, setStatusUpdateSort] = useState<StatusUpdateSort[]>([{ createdAt: SortOrder.Desc }]);
  const [statusUpdatePage, setStatusUpdatePage] = useState(1);
  const STATUS_UPDATES_PER_PAGE = 10;

  const {
    data: statusUpdatesData,
    isLoading: isStatusUpdatesLoading,
    isError: isStatusUpdatesError,
    refetch: refetchStatusUpdates
  } = useStatusUpdateList({
    filter: { shipment: { id: { eq: id } } },
    sort: statusUpdateSort,
    skip: (statusUpdatePage - 1) * STATUS_UPDATES_PER_PAGE,
    first: STATUS_UPDATES_PER_PAGE
  });

  useEffect(() => {
    if (isShipmentLoading || isStatusUpdatesLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isShipmentLoading, isStatusUpdatesLoading, showLoading, hideLoading]);

  useEffect(() => {
    if (isShipmentError) {
      showAlert({
        title: "Error",
        message: "Failed to fetch shipment details. Please try again.",
        severity: "error"
      });
    }
    if (isStatusUpdatesError) {
      showAlert({
        title: "Error",
        message: "Failed to fetch status updates. Please try again.",
        severity: "error"
      });
    }
  }, [isShipmentError, isStatusUpdatesError, showAlert]);

  const handleUpdateStatus = useCallback(async (newStatus: string) => {
    console.log("Updating status to:", newStatus);
    await refetchShipment();
    await refetchStatusUpdates();
  }, [refetchShipment, refetchStatusUpdates]);

  const handleContactDriver = useCallback(() => {
    console.log("Contacting driver");
  }, []);

  const handleContactClient = useCallback(() => {
    console.log("Contacting client");
  }, []);

  const handleReportIssue = useCallback(() => {
    console.log("Reporting issue");
  }, []);

  const handleStatusUpdatePageChange = useCallback((newPage: number) => {
    setStatusUpdatePage(newPage);
  }, []);

  const headerProps = useMemo(() => ({
    shipmentNumber: shipmentData?.Id,
    status: shipmentData?.Priority
  }), [shipmentData]);

  const infoCardProps = useMemo(() => ({
    shipmentNumber: shipmentData?.Id,
    origin: shipmentData?.Origin,
    destination: shipmentData?.Destination,
    estimatedDelivery: "N/A",
    client: "N/A",
    packageSpecs: "N/A"
  }), [shipmentData]);

  const trackingHistoryCardProps = useMemo(() => ({
    statusUpdates: statusUpdatesData?.items || [],
    totalCount: statusUpdatesData?.count || 0,
    currentPage: statusUpdatePage,
    itemsPerPage: STATUS_UPDATES_PER_PAGE,
    onPageChange: handleStatusUpdatePageChange
  }), [statusUpdatesData, statusUpdatePage, handleStatusUpdatePageChange]);

  const actionsCardProps = useMemo(() => ({
    onUpdateStatus: handleUpdateStatus,
    onContactDriver: handleContactDriver,
    onContactClient: handleContactClient,
    onReportIssue: handleReportIssue
  }), [handleUpdateStatus, handleContactDriver, handleContactClient, handleReportIssue]);

  const routeInformationCardProps = useMemo(() => ({
    currentLocation: "N/A",
    nextStop: "N/A",
    distanceTraveled: "N/A",
    remainingDistance: "N/A"
  }), []);

  return (
    <ShipmentDetailViewComponent
      headerProps={headerProps}
      infoCardProps={infoCardProps}
      trackingHistoryCardProps={trackingHistoryCardProps}
      actionsCardProps={actionsCardProps}
      routeInformationCardProps={routeInformationCardProps}
    />
  );
}

ShipmentDetailViewPresenter.layout = "AppLayout";
ShipmentDetailViewPresenter.auth = true;