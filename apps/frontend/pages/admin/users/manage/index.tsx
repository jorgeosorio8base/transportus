import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useUserList } from '@/src/hooks';
import { UserEntity, UserFilter, UserSort, SortOrder } from '@transportus/core';
import { UserAccountManagementComponent } from './UserAccountManagement';

export interface UserAccountManagementComponentProps {
  usersData: {
    users: UserEntity[];
    count: number;
  };
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  sortOrder: UserSort[];
  onSortOrderChange: (value: UserSort[]) => void;
  onCreateUser: () => void;
  onEditUser: (userId: string) => void;
  onDeactivateUser: (userId: string) => void;
}

export default function UserAccountManagementPresenter() {
  const [sortOrder, setSortOrder] = useState<UserSort[]>([{ email: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [usersDataState, setUsersDataState] = useState<{
    users: UserEntity[];
    count: number;
  }>({ users: [], count: 0 });

  const usersFilters = useMemo<UserFilter>(() => {
    if (!searchTerm) return {};
    return {
      OR: [
        { firstName: { contains: searchTerm } },
        { lastName: { contains: searchTerm } },
        { email: { contains: searchTerm } }
      ]
    };
  }, [searchTerm]);

  const { data: usersData, isLoading: usersLoading, isError: isUsersError } = useUserList({
    filter: usersFilters,
    sort: sortOrder
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: UserSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (usersLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isUsersError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the users list.',
          severity: 'error'
        });
      }
    }
  }, [usersLoading, isUsersError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (usersData) {
      setUsersDataState({
        users: usersData.items || [],
        count: usersData.count || 0
      });
    }
  }, [usersData]);

  const handleCreateUser = useCallback(() => {
    // TODO: Implement user creation logic
    console.log('Create user');
  }, []);

  const handleEditUser = useCallback((userId: string) => {
    // TODO: Implement user editing logic
    console.log('Edit user', userId);
  }, []);

  const handleDeactivateUser = useCallback((userId: string) => {
    // TODO: Implement user deactivation logic
    console.log('Deactivate user', userId);
  }, []);

  return (
    <UserAccountManagementComponent
      usersData={usersDataState}
      isLoading={usersLoading}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTerm}
      sortOrder={sortOrder}
      onSortOrderChange={handleSortOrder}
      onCreateUser={handleCreateUser}
      onEditUser={handleEditUser}
      onDeactivateUser={handleDeactivateUser}
    />
  );
}

UserAccountManagementPresenter.layout = 'AppLayout';
UserAccountManagementPresenter.auth = true;