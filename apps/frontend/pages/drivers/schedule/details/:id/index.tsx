import { useLoading, useAlert, useShipment, useCurrentUser } from '@/src/hooks';
import { ShipmentEntity, UserEntity } from '@transportus/core';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { TaskDetailsModalComponent } from './TaskDetailsModal';

export interface TaskDetailsModalComponentProps {
  shipmentId: string;
  taskDetails: {
    title: string;
    customerName: string;
    origin: string;
    destination: string;
    priority: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  isLoading: boolean;
  onMarkAsComplete: () => void;
  onReportIssue: () => void;
  onContactCustomer: () => void;
  onReassignTask: () => void;
  onAdjustSchedule: () => void;
  onRefreshShipment: () => void;
}

export default function TaskDetailsModalPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [shipmentId, setShipmentId] = useState<string>('');

  const {
    data: shipmentData,
    isLoading: isShipmentLoading,
    isError: isShipmentError,
    refetch: refetchShipment
  } = useShipment({ id: shipmentId });

  const [shipmentDetails, setShipmentDetails] = useState<ShipmentEntity | null>(null);

  useEffect(() => {
    if (isShipmentLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isShipmentError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the shipment details.',
          severity: 'error'
        });
      }
    }
  }, [isShipmentLoading, isShipmentError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (shipmentData) {
      setShipmentDetails(shipmentData);
    }
  }, [shipmentData]);

  const handleRefreshShipment = useCallback(() => {
    refetchShipment();
  }, [refetchShipment]);

  const { data: currentUser } = useCurrentUser();

  const taskDetails = useMemo(() => {
    if (!shipmentDetails) return null;
    return {
      title: `Shipment ${shipmentDetails.Id}`,
      customerName: `${currentUser?.FirstName} ${currentUser?.LastName}`,
      origin: shipmentDetails.Origin,
      destination: shipmentDetails.Destination,
      priority: shipmentDetails.Priority,
      createdAt: new Date(shipmentDetails.CreatedAt).toLocaleString(),
      updatedAt: new Date(shipmentDetails.UpdatedAt).toLocaleString()
    };
  }, [shipmentDetails, currentUser]);

  const handleMarkAsComplete = useCallback(() => {
    showAlert({
      title: 'Success',
      message: 'Task marked as complete.',
      severity: 'success'
    });
  }, [showAlert]);

  const handleReportIssue = useCallback(() => {
    showAlert({
      title: 'Issue Reported',
      message: 'Your issue has been reported.',
      severity: 'info'
    });
  }, [showAlert]);

  const handleContactCustomer = useCallback(() => {
    showAlert({
      title: 'Contact Customer',
      message: 'Contacting customer...',
      severity: 'info'
    });
  }, [showAlert]);

  const handleReassignTask = useCallback(() => {
    showAlert({
      title: 'Task Reassigned',
      message: 'The task has been reassigned.',
      severity: 'success'
    });
  }, [showAlert]);

  const handleAdjustSchedule = useCallback(() => {
    showAlert({
      title: 'Schedule Adjusted',
      message: 'The schedule has been adjusted.',
      severity: 'success'
    });
  }, [showAlert]);

  return (
    <TaskDetailsModalComponent
      shipmentId={shipmentId}
      taskDetails={taskDetails}
      isLoading={isShipmentLoading}
      onMarkAsComplete={handleMarkAsComplete}
      onReportIssue={handleReportIssue}
      onContactCustomer={handleContactCustomer}
      onReassignTask={handleReassignTask}
      onAdjustSchedule={handleAdjustSchedule}
      onRefreshShipment={handleRefreshShipment}
    />
  );
}

TaskDetailsModalPresenter.layout = 'AppLayout';
TaskDetailsModalPresenter.auth = true;