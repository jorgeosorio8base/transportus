import { useState, useCallback, useMemo, useEffect } from 'react';
import { UserEntity, UserSort, UserFilter, SortOrder, CreateUserInput } from '@transportus/core';
import { useUserList, useCreateUser, useCurrentUser, useLoading, useAlert } from '@/src/hooks';
import { UserManagementComponent } from './UserManagement';
import { Formik } from 'formik';
import * as Yup from 'yup';

export interface UserManagementComponentProps {
  usersDataState: {
    users: UserEntity[];
    count: number;
  };
  sortOrder: UserSort[];
  handleSortOrder: (value: UserSort[]) => void;
  searchTerm: string;
  handleSearchTerm: (value: string) => void;
  handleCreateUser: (userData: CreateUserInput) => Promise<void>;
  isAdmin: boolean;
}

export interface UserManagementFormikProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: UserManagementFormikProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
});

export default function UserManagementPresenter() {
  const [sortOrder, setSortOrder] = useState<UserSort[]>([{email: SortOrder.Asc}]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {showLoading, hideLoading} = useLoading();
  const {show: showAlert} = useAlert();
  const [usersDataState, setUsersDataState] = useState<{
    users: UserEntity[];
    count: number;
  }>({users: [], count: 0});

  const usersFilters = useMemo<UserFilter>(() => {
    if (!searchTerm) return {};
    return {
      OR: [
        {firstName: {contains: searchTerm}},
        {lastName: {contains: searchTerm}},
        {email: {contains: searchTerm}}
      ]
    };
  }, [searchTerm]);

  const {data: usersData, isLoading: usersLoading, isError: isUsersError} = useUserList({
    filter: usersFilters,
    sort: sortOrder
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: UserSort[]) => {
    setSortOrder(value);
  }, []);

  const {mutateAsync: createUser, isPending: isCreatingUser} = useCreateUser();

  const handleCreateUser = useCallback(async (userData: CreateUserInput) => {
    try {
      showLoading();
      await createUser({data: userData});
      showAlert({title: 'Success', message: 'User created successfully', severity: 'success'});
    } catch (error) {
      showAlert({title: 'Error', message: 'Failed to create user', severity: 'error'});
    } finally {
      hideLoading();
    }
  }, [createUser, showAlert, showLoading, hideLoading]);

  useEffect(() => {
    if (usersLoading || isCreatingUser) {
      showLoading();
    } else {
      hideLoading();
      if (isUsersError) {
        showAlert({title: 'Error', message: 'An error occurred while fetching the users list.', severity: 'error'});
      }
    }
  }, [usersLoading, isUsersError, isCreatingUser, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (usersData) {
      setUsersDataState({
        users: usersData.items || [],
        count: usersData.count || 0
      });
    }
  }, [usersData]);

  const {data: currentUser} = useCurrentUser();

  const isAdmin = useMemo(() => {
    return currentUser?.roles?.some(role => role.name === 'Admin');
  }, [currentUser]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleCreateUser}
    >
      <UserManagementComponent
        usersDataState={usersDataState}
        sortOrder={sortOrder}
        handleSortOrder={handleSortOrder}
        searchTerm={searchTerm}
        handleSearchTerm={handleSearchTerm}
        handleCreateUser={handleCreateUser}
        isAdmin={isAdmin}
      />
    </Formik>
  );
}

UserManagementPresenter.layout = 'AppLayout';
UserManagementPresenter.auth = true;