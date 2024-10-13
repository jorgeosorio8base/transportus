import { useState, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useUser, useUpdateUser } from '@/src/hooks';
import { UserEntity, AlertSeverity } from '@transportus/core';
import { Formik } from 'formik';
import { UserAccountDetailsComponent } from './UserAccountDetails';

export interface UserAccountDetailsComponentProps {
  user: UserEntity | null;
  isLoading: boolean;
  onSaveChanges: (values: UserAccountDetailsFormikProps) => Promise<void>;
  onResetPassword: () => void;
  onGoBack: () => void;
}

export interface UserAccountDetailsFormikProps {
  firstName: string;
  lastName: string;
  email: string;
}

export default function UserAccountDetailsPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const [userState, setUserState] = useState<UserEntity | null>(null);

  const { data: userData, isLoading: isUserLoading, isError: isUserError, refetch: refetchUser } = useUser(
    currentUser?.Id ? { id: currentUser.Id } : undefined
  );

  const { mutateAsync: updateUser, isPending: isUpdatingUser } = useUpdateUser();

  useEffect(() => {
    if (isUserLoading || isUpdatingUser) {
      showLoading();
    } else {
      hideLoading();

      if (isUserError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the user details.',
          severity: 'error',
        });
      }
    }
  }, [isUserLoading, isUserError, isUpdatingUser]);

  useEffect(() => {
    if (userData) {
      setUserState(userData);
    }
  }, [userData]);

  const handleSaveChanges = async (values: UserAccountDetailsFormikProps) => {
    try {
      const updatedUser = await updateUser({
        id: currentUser?.Id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      });

      if (updatedUser) {
        setUserState(updatedUser);
        showAlert({
          title: 'Success',
          message: 'User details updated successfully.',
          severity: 'success',
        });
        refetchUser();
      }
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'An error occurred while updating user details.',
        severity: 'error',
      });
    }
  };

  const handleResetPassword = () => {
    showAlert({
      title: 'Info',
      message: 'Password reset functionality not implemented yet.',
      severity: 'info',
    });
  };

  const handleGoBack = () => {
    showAlert({
      title: 'Info',
      message: 'Go back functionality not implemented yet.',
      severity: 'info',
    });
  };

  const initialValues: UserAccountDetailsFormikProps = {
    firstName: userState?.FirstName || '',
    lastName: userState?.LastName || '',
    email: userState?.Email || '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSaveChanges}
    >
      <UserAccountDetailsComponent
        user={userState}
        isLoading={isUserLoading || isUpdatingUser}
        onSaveChanges={handleSaveChanges}
        onResetPassword={handleResetPassword}
        onGoBack={handleGoBack}
      />
    </Formik>
  );
}

UserAccountDetailsPresenter.layout = 'AppLayout';
UserAccountDetailsPresenter.auth = true;