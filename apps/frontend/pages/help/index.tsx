import { useCallback, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useCreateStatusUpdate } from '@/src/hooks';
import { UserEntity, StatusUpdateCreateInput } from '@transportus/core';
import { Formik } from 'formik';
import { HelpCenterComponent } from './HelpCenter';

export interface HelpCenterComponentProps {
  onSubmitSupportTicket: (values: HelpCenterFormikProps) => Promise<void>;
  helpResources: Array<{
    title: string;
    items: string[];
  }>;
  currentUser: UserEntity | undefined;
}

export interface HelpCenterFormikProps {
  message: string;
}

const initialValues: HelpCenterFormikProps = {
  message: ''
};

export default function HelpCenterPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const {
    mutate: createStatusUpdate,
    isPending: isCreatingStatusUpdate
  } = useCreateStatusUpdate();

  const handleSubmitSupportTicket = useCallback(
    async (values: HelpCenterFormikProps) => {
      try {
        showLoading();
        await createStatusUpdate({
          data: {
            status: values.message,
            timestamp: new Date().toISOString()
          }
        });
        showAlert({
          title: 'Success',
          message: 'Support ticket submitted successfully.',
          severity: 'success'
        });
      } catch (error) {
        showAlert({
          title: 'Error',
          message: 'Failed to submit support ticket. Please try again.',
          severity: 'error'
        });
      } finally {
        hideLoading();
      }
    },
    [createStatusUpdate, showLoading, hideLoading, showAlert]
  );

  useEffect(() => {
    if (isCreatingStatusUpdate) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isCreatingStatusUpdate, showLoading, hideLoading]);

  const helpResources = [
    {
      title: 'User Guides',
      items: ['Getting Started', 'Account Management', 'Shipping Process']
    },
    {
      title: 'FAQs',
      items: ['Common Issues', 'Billing Questions', 'Service Availability']
    },
    {
      title: 'Support Resources',
      items: ['Contact Support', 'System Status', 'Feature Requests']
    }
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitSupportTicket}
    >
      <HelpCenterComponent
        onSubmitSupportTicket={handleSubmitSupportTicket}
        helpResources={helpResources}
        currentUser={currentUser}
      />
    </Formik>
  );
}

HelpCenterPresenter.layout = 'AppLayout';
HelpCenterPresenter.auth = true;