import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useClientList, useCurrentUser } from '@/src/hooks';
import { ClientEntity, UserEntity, ClientSort, ClientFilter, SortOrder } from '@transportus/core';
import { ClientProfileManagementComponent } from './ClientProfileManagement';

export interface ClientProfileManagementComponentProps {
  clients: ClientEntity[];
  count: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: ClientSort[];
  onSortOrderChange: (value: ClientSort[]) => void;
  onEditClient: (clientId: string, updatedData: Partial<ClientEntity>) => void;
  onUploadDocument: (clientId: string, file: File) => void;
  onQuickAction: (actionType: string, clientId: string) => void;
  currentUser: UserEntity | undefined;
}

export default function ClientProfileManagementPresenter() {
  const [sortOrder, setSortOrder] = useState<ClientSort[]>([{ company_name: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [clientDataState, setClientDataState] = useState<{
    clients: ClientEntity[];
    count: number;
  } | null>({
    clients: [],
    count: 0,
  });

  const clientFilters = useMemo<ClientFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      OR: [
        { company_name: { contains: searchTerm } },
        { primary_contact: { contains: searchTerm } },
        { email: { contains: searchTerm } },
      ],
    };
  }, [searchTerm]);

  const { data: clientsData, isLoading: clientsLoading, isError: isClientsError } = useClientList({
    filter: clientFilters,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: ClientSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (clientsLoading) {
      showLoading();
    } else {
      hideLoading();

      if (isClientsError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the clients list.',
          severity: 'error',
        });
      }
    }
  }, [clientsLoading, isClientsError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (clientsData) {
      setClientDataState({
        clients: clientsData.items || [],
        count: clientsData.count || 0,
      });
    }
  }, [clientsData]);

  const handleEditClient = useCallback((clientId: string, updatedData: Partial<ClientEntity>) => {
    // TODO: Implement client update logic using a mutation hook
    console.log('Editing client', clientId, updatedData);
  }, []);

  const handleUploadDocument = useCallback((clientId: string, file: File) => {
    // TODO: Implement document upload logic
    console.log('Uploading document for client', clientId, file);
  }, []);

  const handleQuickAction = useCallback((actionType: string, clientId: string) => {
    // TODO: Implement quick action logic
    console.log('Performing quick action', actionType, 'for client', clientId);
  }, []);

  const { data: currentUser } = useCurrentUser();

  return (
    <ClientProfileManagementComponent
      clients={clientDataState?.clients || []}
      count={clientDataState?.count || 0}
      isLoading={clientsLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      sortOrder={sortOrder}
      onSortOrderChange={handleSortOrder}
      onEditClient={handleEditClient}
      onUploadDocument={handleUploadDocument}
      onQuickAction={handleQuickAction}
      currentUser={currentUser}
    />
  );
}

ClientProfileManagementPresenter.layout = 'AppLayout';
ClientProfileManagementPresenter.auth = true;