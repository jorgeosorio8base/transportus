import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLoading, useAlert, useCurrentUser } from '@/src/hooks';
import { UserEntity } from '@transportus/core';
import { UserProfileComponent } from './UserProfile';
import { Formik } from 'formik';

export interface UserProfileComponentProps {
  userProfile: UserEntity | null;
  isEditMode: boolean;
  handleEditProfile: () => void;
  handleCancelEdit: () => void;
  handleSubmit: (values: UserProfileFormikValues) => void;
  initialValues: UserProfileFormikValues;
}

export interface UserProfileFormikValues {
  FirstName: string;
  LastName: string;
  Email: string;
  Timezone: string;
}

export default function UserProfilePresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser, isLoading: isCurrentUserLoading, isError: isCurrentUserError } = useCurrentUser();

  const [userProfile, setUserProfile] = useState<UserEntity | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditProfile = useCallback(() => {
    setIsEditMode(true);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setIsEditMode(false);
  }, []);

  const handleSaveProfile = useCallback(async (updatedProfile: UserProfileFormikValues) => {
    try {
      showLoading();
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserProfile(prevProfile => ({ ...prevProfile, ...updatedProfile }));
      setIsEditMode(false);
      showAlert({
        title: 'Success',
        message: 'Profile updated successfully',
        severity: 'success'
      });
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to update profile',
        severity: 'error'
      });
    } finally {
      hideLoading();
    }
  }, [showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (isCurrentUserLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isCurrentUserError) {
        showAlert({
          title: 'Error',
          message: 'Failed to fetch user profile',
          severity: 'error'
        });
      }
    }
  }, [isCurrentUserLoading, isCurrentUserError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (currentUser) {
      setUserProfile(currentUser);
    }
  }, [currentUser]);

  const initialValues: UserProfileFormikValues = useMemo(() => ({
    FirstName: userProfile?.FirstName || '',
    LastName: userProfile?.LastName || '',
    Email: userProfile?.Email || '',
    Timezone: userProfile?.Timezone || ''
  }), [userProfile]);

  const handleSubmit = useCallback((values: UserProfileFormikValues) => {
    handleSaveProfile(values);
  }, [handleSaveProfile]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <UserProfileComponent
        userProfile={userProfile}
        isEditMode={isEditMode}
        handleEditProfile={handleEditProfile}
        handleCancelEdit={handleCancelEdit}
        handleSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </Formik>
  );
}

UserProfilePresenter.layout = 'AppLayout';
UserProfilePresenter.auth = true;