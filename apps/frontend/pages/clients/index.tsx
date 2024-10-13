import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useClientList, useCurrentUser } from '@/src/hooks';
import { ClientEntity, UserEntity, ClientSort, ClientFilter, SortOrder } from '@transportus/core';
import { ClientManagementComponent } from './ClientManagement';

export interface ClientManagementComponentProps {
  clients: ClientEntity[];
  clientsCount: number;
  isLoading: boolean;
  searchTerm: string;
  sortOrder: ClientSort[];
  currentUser: UserEntity | undefined;
  recentClientActivity: RecentActivity[];
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: ClientSort[]) => void;
  onAddClient: () => void;
  onEditClient: (clientId: string) => void;
  onViewClientDetails: (clientId: string) => void;
}

interface RecentActivity {
  id: string;
  clientName: string;
  activityType: string;
  timestamp: string;
}

export default function ClientManagementPresenter() {
  const [sortOrder, setSortOrder] = useState<ClientSort[]>([{ company_name: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [clientsDataState, setClientsDataState] = useState<{
    clients: ClientEntity[];
    count: number;
  } | null>({
    clients: [],
    count: 0,
  });

  const clientsFilters = useMemo<ClientFilter>(() => {
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
    filter: clientsFilters,
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
      setClientsDataState({
        clients: clientsData.items || [],
        count: clientsData.count || 0,
      });
    }
  }, [clientsData]);

  const { data: currentUser } = useCurrentUser();

  const handleAddClient = useCallback(() => {
    // Logic for adding a new client
  }, []);

  const handleEditClient = useCallback((clientId: string) => {
    // Logic for editing a client
  }, []);

  const handleViewClientDetails = useCallback((clientId: string) => {
    // Logic for viewing client details
  }, []);

  const recentClientActivity = useMemo(() => {
    // Logic to generate recent client activity
    return [];
  }, [clientsDataState]);

  return (
    <ClientManagementComponent
      clients={clientsDataState?.clients || []}
      clientsCount={clientsDataState?.count || 0}
      isLoading={clientsLoading}
      searchTerm={searchTerm}
      sortOrder={sortOrder}
      currentUser={currentUser}
      recentClientActivity={recentClientActivity}
      onSearchTermChange={handleSearchTerm}
      onSortOrderChange={handleSortOrder}
      onAddClient={handleAddClient}
      onEditClient={handleEditClient}
      onViewClientDetails={handleViewClientDetails}
    />
  );
}

ClientManagementPresenter.layout = 'AppLayout';
ClientManagementPresenter.auth = true;