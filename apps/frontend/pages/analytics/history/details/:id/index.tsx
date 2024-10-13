import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useLoading, useAlert, useShipment } from '@/src/hooks';
import { ShipmentEntity } from '@transportus/core';
import { ShipmentDetailsModalComponent } from './ShipmentDetailsModal';

export interface ShipmentDetailsModalComponentProps {
  shipment: ShipmentEntity | null;
  isLoading: boolean;
  onRefresh: () => void;
  onClose: () => void;
}

export default function ShipmentDetailsModalPresenter() {
  const { id } = useParams<{ id: string }>();

  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();

  const { data: shipmentData, isLoading: isShipmentLoading, isError: isShipmentError, refetch: refetchShipment } = useShipment({ id });

  const [shipment, setShipment] = useState<ShipmentEntity | null>(null);

  useEffect(() => {
    if (isShipmentLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isShipmentError) {
        showAlert({
          title: "Error",
          message: "An error occurred while fetching the shipment details.",
          severity: "error"
        });
      } else if (shipmentData) {
        setShipment(shipmentData);
      }
    }
  }, [isShipmentLoading, isShipmentError, shipmentData, showLoading, hideLoading, showAlert]);

  const handleRefresh = useCallback(() => {
    refetchShipment();
  }, [refetchShipment]);

  const handleClose = useCallback(() => {
    // Implement close functionality here
  }, []);

  return (
    <ShipmentDetailsModalComponent
      shipment={shipment}
      isLoading={isShipmentLoading}
      onRefresh={handleRefresh}
      onClose={handleClose}
    />
  );
}

ShipmentDetailsModalPresenter.layout = "AppLayout";
ShipmentDetailsModalPresenter.auth = true;