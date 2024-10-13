import { useState, useEffect, useCallback } from 'react';
import { useLoading, useAlert, useCurrentUser, useClientList } from '@/src/hooks';
import { ClientEntity, AlertSeverity } from '@transportus/core';
import { Formik } from 'formik';
import { ClientProfileUpdateModalComponent } from './ClientProfileUpdateModal';

export interface ClientProfileUpdateModalComponentProps {
  clientData: ClientEntity | null;
  isLoading: boolean;
  onSubmit: (values: ClientProfileUpdateModalFormikProps) => Promise<void>;
  onCancel: () => void;
}

export interface ClientProfileUpdateModalFormikProps {
  CompanyName: string;
  PrimaryContact: string;
  Address: string;
  PhoneNumber: string;
  Email: string;
  PreferredShippingMethods: string;
  SpecialHandlingInstructions: string;
}

export default function ClientProfileUpdateModalPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const [clientData, setClientData] = useState<ClientEntity | null>(null);

  const { data: clientListData, isLoading: isClientLoading, isError: isClientError } = useClientList({
    filter: {
      id: { equals: currentUser?.Id }
    }
  });

  useEffect(() => {
    if (isClientLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isClientError) {
        showAlert({
          title: 'Error',
          message: 'Failed to fetch client data',
          severity: 'error'
        });
      }
    }
  }, [isClientLoading, isClientError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (clientListData && clientListData.items.length > 0) {
      setClientData(clientListData.items[0]);
    }
  }, [clientListData]);

  const handleUpdateClient = useCallback(async (values: ClientProfileUpdateModalFormikProps) => {
    try {
      showLoading();
      // Implement the mutation to update client data here
      // For example: await updateClientMutation({ variables: { input: values } });
      showAlert({
        title: 'Success',
        message: 'Client profile updated successfully',
        severity: 'success'
      });
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to update client profile',
        severity: 'error'
      });
    } finally {
      hideLoading();
    }
  }, [showLoading, hideLoading, showAlert]);

  const handleCancel = useCallback(() => {
    // Implement cancel logic here
  }, []);

  const initialValues: ClientProfileUpdateModalFormikProps = {
    CompanyName: clientData?.CompanyName || '',
    PrimaryContact: clientData?.PrimaryContact || '',
    Address: clientData?.Address || '',
    PhoneNumber: clientData?.PhoneNumber || '',
    Email: clientData?.Email || '',
    PreferredShippingMethods: clientData?.PreferredShippingMethods || '',
    SpecialHandlingInstructions: clientData?.SpecialHandlingInstructions || ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleUpdateClient}
    >
      <ClientProfileUpdateModalComponent
        clientData={clientData}
        isLoading={isClientLoading}
        onSubmit={handleUpdateClient}
        onCancel={handleCancel}
      />
    </Formik>
  );
}

ClientProfileUpdateModalPresenter.layout = 'AppLayout';
ClientProfileUpdateModalPresenter.auth = true;