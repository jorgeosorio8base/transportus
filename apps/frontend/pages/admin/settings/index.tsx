import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useUserList, useCurrentUser, useUpdateUser } from '@/src/hooks';
import { UserEntity, UserFilter, UserSort, SortOrder } from '@transportus/core';
import { SettingsComponent } from './Settings';

export interface SettingsComponentProps {
  users: UserEntity[];
  usersCount: number;
  isLoading: boolean;
  searchTerm: string;
  sortOrder: UserSort[];
  currentUser: UserEntity | null;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: UserSort[]) => void;
  onUpdateUser: (updatedUser: Partial<UserEntity>) => Promise<void>;
}

export default function SettingsPresenter() {
  const [sortOrder, setSortOrder] = useState<UserSort[]>([{ email: SortOrder.Asc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [usersDataState, setUsersDataState] = useState<{
    users: UserEntity[];
    count: number;
  } | null>({
    users: [],
    count: 0,
  });

  const usersFilters = useMemo<UserFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      OR: [
        { firstName: { contains: searchTerm } },
        { lastName: { contains: searchTerm } },
        { email: { contains: searchTerm } },
      ],
    };
  }, [searchTerm]);

  const { data: usersData, isLoading: usersLoading, isError: isUsersError } = useUserList({
    filter: usersFilters,
    sort: sortOrder,
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
          severity: 'error',
        });
      }
    }
  }, [usersLoading, isUsersError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (usersData) {
      setUsersDataState({
        users: usersData.items || [],
        count: usersData.count || 0,
      });
    }
  }, [usersData]);

  const { data: currentUser } = useCurrentUser();

  const handleUpdateUser = useCallback(async (updatedUser: Partial<UserEntity>) => {
    try {
      const { mutateAsync } = useUpdateUser();
      await mutateAsync({
        id: currentUser?.Id,
        ...updatedUser,
      });
      showAlert({
        title: 'Success',
        message: 'User settings updated successfully.',
        severity: 'success',
      });
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to update user settings.',
        severity: 'error',
      });
    }
  }, [currentUser, showAlert]);

  return (
    <SettingsComponent
      users={usersDataState?.users || []}
      usersCount={usersDataState?.count || 0}
      isLoading={usersLoading}
      searchTerm={searchTerm}
      sortOrder={sortOrder}
      currentUser={currentUser || null}
      onSearchTermChange={handleSearchTerm}
      onSortOrderChange={handleSortOrder}
      onUpdateUser={handleUpdateUser}
    />
  );
}

SettingsPresenter.layout = 'AppLayout';
SettingsPresenter.auth = true;