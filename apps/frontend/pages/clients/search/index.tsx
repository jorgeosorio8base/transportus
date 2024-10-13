import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useClientList, useCurrentUser } from '@/src/hooks';
import { ClientEntity, ClientSort, ClientFilter, SortOrder, UserEntity } from '@transportus/core';
import { ClientSearchandListComponent } from './ClientSearchandList';

export interface ClientSearchandListComponentProps {
  clients: ClientEntity[];
  totalClients: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSortChange: (value: ClientSort[]) => void;
  onSearch: (value: string) => void;
  searchTerm: string;
  sortOrder: ClientSort[];
  isLoading: boolean;
  currentUser: UserEntity | undefined;
}

export default function ClientSearchandListPresenter() {
  const [sortOrder, setSortOrder] = useState<ClientSort[]>([{ company_name: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

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
        { address: { contains: searchTerm } },
      ],
    };
  }, [searchTerm]);

  const { data: clientsData, isLoading: clientsLoading, isError: isClientsError } = useClientList({
    filter: clientsFilters,
    sort: sortOrder,
    skip: (currentPage - 1) * itemsPerPage,
    first: itemsPerPage,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  }, []);

  const handleSortOrder = useCallback((value: ClientSort[]) => {
    setSortOrder(value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
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

  const totalPages = Math.ceil((clientsDataState?.count || 0) / itemsPerPage);

  const { data: currentUserData } = useCurrentUser();

  const clientListProps = {
    clients: clientsDataState?.clients || [],
    totalClients: clientsDataState?.count || 0,
    currentPage,
    totalPages,
    onPageChange: handlePageChange,
    onSortChange: handleSortOrder,
    onSearch: handleSearchTerm,
    searchTerm,
    sortOrder,
    isLoading: clientsLoading,
    currentUser: currentUserData,
  };

  return <ClientSearchandListComponent {...clientListProps} />;
}

ClientSearchandListPresenter.layout = 'AppLayout';
ClientSearchandListPresenter.auth = true;