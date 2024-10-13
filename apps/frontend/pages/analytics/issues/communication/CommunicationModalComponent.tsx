import React from 'react';
import { Card, CardHeader, CardBody, Avatar, Input, Textarea, Button, Select, SelectItem, CircularProgress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { CommunicationModalComponentProps } from './';

export function CommunicationModalComponent({
  shipments,
  totalShipments,
  isLoading,
  searchTerm,
  onSearchTermChange,
  sortOrder,
  onSortOrderChange,
  selectedShipment,
  onShipmentSelect,
  onSendMessage,
  isSendingMessage,
  currentUser,
  participants,
  onAddParticipant,
  onRemoveParticipant
}: CommunicationModalComponentProps) {
  const [messageText, setMessageText] = React.useState('');
  const [newParticipantRole, setNewParticipantRole] = React.useState('');
  const [newParticipantName, setNewParticipantName] = React.useState('');

  const handleSendMessage = () => {
    onSendMessage(messageText);
    setMessageText('');
  };

  const handleAddParticipant = () => {
    onAddParticipant({ id: Date.now().toString(), name: newParticipantName, role: newParticipantRole });
    setNewParticipantName('');
    setNewParticipantRole('');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress size="lg" label="Loading..." />
      </div>
    );
  }

  return (
    <main className="grid grid-cols-12 gap-4 p-6 bg-white h-full max-h-[90vh] overflow-hidden">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Communication Modal</h1>
      </div>
      <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
        <Card className="bg-gray-50 rounded-lg h-full">
          <CardHeader>
            <h2 className="text-lg font-semibold">Shipment Information</h2>
          </CardHeader>
          <CardBody>
            {selectedShipment ? (
              <>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Tracking Number:</span>
                  <span>{selectedShipment.Id}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Client:</span>
                  <span>{selectedShipment.ClientName}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Status:</span>
                  <span>{selectedShipment.Status}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Estimated Delivery:</span>
                  <span>{new Date(selectedShipment.EstimatedDeliveryDate).toLocaleDateString()}</span>
                </div>
              </>
            ) : (
              <p>No shipment selected. Please select a shipment to view details.</p>
            )}
          </CardBody>
        </Card>

        <Card className="bg-gray-50 rounded-lg h-full">
          <CardHeader>
            <h2 className="text-lg font-semibold">Message History</h2>
          </CardHeader>
          <CardBody className="max-h-[300px] overflow-y-auto">
            {selectedShipment?.StatusUpdates?.map((update, index) => (
              <div key={index} className="border-b border-gray-200 pb-2 mb-2 last:border-b-0">
                <p className="font-semibold">{update.UserName} ({update.UserRole}) - {new Date(update.CreatedAt).toLocaleString()}</p>
                <p>{update.Message}</p>
              </div>
            ))}
          </CardBody>
        </Card>

        <Textarea
          placeholder="Type your message here..."
          className="mb-4"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />

        <div className="flex justify-between mb-4">
          <Button 
            color="primary" 
            onClick={handleSendMessage} 
            disabled={isSendingMessage || !messageText.trim()}
          >
            {isSendingMessage ? (
              <CircularProgress size="sm" color="current" />
            ) : (
              <>
                <Icon icon="ph:paper-plane-tilt" className="mr-2" />
                Send Message
              </>
            )}
          </Button>
          <Button color="secondary">
            <Icon icon="ph:paperclip-horizontal" className="mr-2" />
            Attach File
          </Button>
          <Button color="danger">
            <Icon icon="ph:warning-circle" className="mr-2" />
            Escalate Issue
          </Button>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
        <Card className="bg-gray-50 rounded-lg h-full">
          <CardHeader>
            <h2 className="text-lg font-semibold">Participants</h2>
          </CardHeader>
          <CardBody>
            {participants.map((participant) => (
              <div key={participant.id} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Avatar
                    name={participant.name}
                    size="sm"
                    className="mr-2"
                  />
                  <span>{participant.name} ({participant.role})</span>
                </div>
                <Button
                  size="sm"
                  color="danger"
                  variant="light"
                  onClick={() => onRemoveParticipant(participant.id)}
                >
                  <Icon icon="ph:x" />
                </Button>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card className="bg-gray-50 rounded-lg h-full">
          <CardHeader>
            <h2 className="text-lg font-semibold">Add Participant</h2>
          </CardHeader>
          <CardBody>
            <Select
              placeholder="Select role..."
              className="mb-2"
              value={newParticipantRole}
              onChange={(e) => setNewParticipantRole(e.target.value)}
            >
              <SelectItem value="logistics">Logistics Manager</SelectItem>
              <SelectItem value="client">Client</SelectItem>
              <SelectItem value="driver">Driver</SelectItem>
            </Select>
            <Input
              placeholder="Enter name or email"
              className="mb-2"
              value={newParticipantName}
              onChange={(e) => setNewParticipantName(e.target.value)}
            />
            <Button 
              color="primary" 
              className="w-full"
              onClick={handleAddParticipant}
              disabled={!newParticipantRole || !newParticipantName.trim()}
            >
              Add to Conversation
            </Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
