import { useState, useCallback, useMemo, useEffect } from 'react';
import { useShipmentList, useLoading, useAlert, useCurrentUser, useCreateStatusUpdate } from '@/src/hooks';
import { ShipmentEntity, UserEntity, ShipmentFilter, ShipmentSort, SortOrder } from '@transportus/core';
import { CommunicationModalComponent } from './CommunicationModal';

export interface CommunicationModalComponentProps {
  shipments: ShipmentEntity[];
  totalShipments: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: ShipmentSort[];
  onSortOrderChange: (value: ShipmentSort[]) => void;
  selectedShipment: ShipmentEntity | null;
  onShipmentSelect: (shipmentId: string) => void;
  onSendMessage: (message: string) => void;
  isSendingMessage: boolean;
  currentUser: UserEntity | null;
  participants: Array<{ id: string; name: string; role: string }>;
  onAddParticipant: (newParticipant: { id: string; name: string; role: string }) => void;
  onRemoveParticipant: (participantId: string) => void;
}

export default function CommunicationModalPresenter() {
  const [sortOrder, setSortOrder] = useState<ShipmentSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [selectedShipmentId, setSelectedShipmentId] = useState<string | null>(null);

  const shipmentFilters = useMemo<ShipmentFilter>(() => {
    if (!searchTerm) {
      return {};
    }
    return {
      OR: [
        { destination: { contains: searchTerm } },
        { origin: { contains: searchTerm } },
        { priority: { contains: searchTerm } }
      ]
    };
  }, [searchTerm]);

  const { data: shipmentData, isLoading: isShipmentLoading, isError: isShipmentError } = useShipmentList({
    filter: shipmentFilters,
    sort: sortOrder
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: ShipmentSort[]) => {
    setSortOrder(value);
  }, []);

  const handleShipmentSelect = useCallback((shipmentId: string) => {
    setSelectedShipmentId(shipmentId);
  }, []);

  useEffect(() => {
    if (isShipmentLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isShipmentError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the shipment list.',
          severity: 'error'
        });
      }
    }
  }, [isShipmentLoading, isShipmentError, showLoading, hideLoading, showAlert]);

  const selectedShipment = useMemo(() => {
    return shipmentData?.items.find(shipment => shipment.Id === selectedShipmentId) || null;
  }, [shipmentData, selectedShipmentId]);

  const { mutate: sendMessage, isPending: isSendingMessage } = useCreateStatusUpdate();

  const handleSendMessage = useCallback((message: string) => {
    if (!selectedShipmentId) {
      showAlert({
        title: 'Error',
        message: 'Please select a shipment before sending a message.',
        severity: 'error'
      });
      return;
    }

    sendMessage(
      {
        shipmentId: selectedShipmentId,
        message: message,
        type: 'COMMUNICATION'
      },
      {
        onSuccess: () => {
          showAlert({
            title: 'Success',
            message: 'Message sent successfully.',
            severity: 'success'
          });
        },
        onError: (error) => {
          showAlert({
            title: 'Error',
            message: 'Failed to send message. Please try again.',
            severity: 'error'
          });
        }
      }
    );
  }, [selectedShipmentId, sendMessage, showAlert]);

  const { data: currentUser } = useCurrentUser();

  const [participants, setParticipants] = useState<Array<{ id: string; name: string; role: string }>>([]);

  const handleAddParticipant = useCallback((newParticipant: { id: string; name: string; role: string }) => {
    setParticipants(prev => [...prev, newParticipant]);
  }, []);

  const handleRemoveParticipant = useCallback((participantId: string) => {
    setParticipants(prev => prev.filter(p => p.id !== participantId));
  }, []);

  return (
    <CommunicationModalComponent
      shipments={shipmentData?.items || []}
      totalShipments={shipmentData?.total || 0}
      isLoading={isShipmentLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      sortOrder={sortOrder}
      onSortOrderChange={handleSortOrder}
      selectedShipment={selectedShipment}
      onShipmentSelect={handleShipmentSelect}
      onSendMessage={handleSendMessage}
      isSendingMessage={isSendingMessage}
      currentUser={currentUser || null}
      participants={participants}
      onAddParticipant={handleAddParticipant}
      onRemoveParticipant={handleRemoveParticipant}
    />
  );
}

CommunicationModalPresenter.layout = 'AppLayout';
CommunicationModalPresenter.auth = true;