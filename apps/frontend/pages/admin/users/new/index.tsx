import { useState, useCallback, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useCreateUser } from '@/src/hooks';
import { UserCreateInput, UserEntity } from '@transportus/core';
import { FormikProps, Formik } from 'formik';
import { CreateNewUserAccountComponent } from './CreateNewUserAccount';

export interface CreateNewUserAccountComponentProps {
  formikProps: FormikProps<CreateNewUserAccountFormikProps>;
  handleCancel: () => void;
  isLoading: boolean;
}

export interface CreateNewUserAccountFormikProps {
  username: string;
  email: string;
  temporaryPassword: string;
  role: string;
  permissions: string[];
}

export default function CreateNewUserAccountPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser, isLoading: isCurrentUserLoading } = useCurrentUser();

  const [formValues, setFormValues] = useState<CreateNewUserAccountFormikProps>({
    username: '',
    email: '',
    temporaryPassword: '',
    role: '',
    permissions: []
  });

  const { mutate: createUser, isPending: isCreatingUser } = useCreateUser();

  const handleCreateUser = useCallback(async (values: CreateNewUserAccountFormikProps) => {
    try {
      showLoading();
      await createUser({
        data: {
          email: values.email,
          firstName: values.username.split(' ')[0],
          lastName: values.username.split(' ')[1] || '',
          status: 'ACTIVE',
          timezone: currentUser?.Timezone || 'UTC',
          roles: {
            connect: [{ name: values.role }]
          }
        }
      }, {
        onSuccess: () => {
          showAlert({
            title: 'Success',
            message: 'User account created successfully',
            severity: 'success'
          });
          setFormValues({
            username: '',
            email: '',
            temporaryPassword: '',
            role: '',
            permissions: []
          });
        },
        onError: (error) => {
          showAlert({
            title: 'Error',
            message: 'Failed to create user account',
            severity: 'error'
          });
          console.error('Error creating user:', error);
        }
      });
    } finally {
      hideLoading();
    }
  }, [createUser, showLoading, hideLoading, showAlert, currentUser]);

  const handleCancel = useCallback(() => {
    setFormValues({
      username: '',
      email: '',
      temporaryPassword: '',
      role: '',
      permissions: []
    });
  }, []);

  useEffect(() => {
    if (isCurrentUserLoading || isCreatingUser) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isCurrentUserLoading, isCreatingUser, showLoading, hideLoading]);

  const formikProps: FormikProps<CreateNewUserAccountFormikProps> = {
    initialValues: formValues,
    onSubmit: handleCreateUser,
    validate: (values) => {
      const errors: Partial<CreateNewUserAccountFormikProps> = {};
      if (!values.username) errors.username = 'Required';
      if (!values.email) errors.email = 'Required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.temporaryPassword) errors.temporaryPassword = 'Required';
      if (!values.role) errors.role = 'Required';
      return errors;
    }
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleCreateUser}
      validate={formikProps.validate}
    >
      <CreateNewUserAccountComponent
        formikProps={formikProps}
        handleCancel={handleCancel}
        isLoading={isCurrentUserLoading || isCreatingUser}
      />
    </Formik>
  );
}

CreateNewUserAccountPresenter.layout = 'AppLayout';
CreateNewUserAccountPresenter.auth = true;