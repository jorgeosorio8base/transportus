import { useState, useCallback, useEffect } from 'react';
import { useLoading, useAlert, useCurrentUser, useCreateNotification } from '@/src/hooks';
import { UserEntity, NotificationCreateInput } from '@transportus/core';
import { ComposeMessageComponent } from './ComposeMessage';

export interface ComposeMessageComponentProps {
  recipients: string[];
  subject: string;
  body: string;
  priority: string;
  deliveryMethods: string[];
  attachments: File[];
  onRecipientsChange: (recipients: string[]) => void;
  onSubjectChange: (subject: string) => void;
  onBodyChange: (body: string) => void;
  onPriorityChange: (priority: string) => void;
  onDeliveryMethodsChange: (methods: string[]) => void;
  onAttachmentsChange: (files: File[]) => void;
  onPreview: () => void;
  onSendMessage: () => void;
  isLoading: boolean;
}

export default function ComposeMessagePresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser, isLoading: isCurrentUserLoading } = useCurrentUser();

  const [recipients, setRecipients] = useState<string[]>([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('Normal');
  const [deliveryMethods, setDeliveryMethods] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);

  const { mutateAsync: createNotification, isPending: isCreatingNotification } = useCreateNotification();

  const handleRecipientsChange = useCallback((newRecipients: string[]) => {
    setRecipients(newRecipients);
  }, []);

  const handleSubjectChange = useCallback((newSubject: string) => {
    setSubject(newSubject);
  }, []);

  const handleBodyChange = useCallback((newBody: string) => {
    setBody(newBody);
  }, []);

  const handlePriorityChange = useCallback((newPriority: string) => {
    setPriority(newPriority);
  }, []);

  const handleDeliveryMethodsChange = useCallback((newDeliveryMethods: string[]) => {
    setDeliveryMethods(newDeliveryMethods);
  }, []);

  const handleAttachmentsChange = useCallback((newAttachments: File[]) => {
    setAttachments(newAttachments);
  }, []);

  const handlePreview = useCallback(() => {
    // Implement preview logic here
    showAlert({
      title: 'Preview',
      message: 'Preview functionality not implemented yet.',
      severity: 'info'
    });
  }, [showAlert]);

  const handleSendMessage = useCallback(async () => {
    if (!currentUser) {
      showAlert({
        title: 'Error',
        message: 'User not authenticated',
        severity: 'error'
      });
      return;
    }

    try {
      showLoading();
      const notificationContent = JSON.stringify({
        recipients,
        subject,
        body,
        priority,
        deliveryMethods,
        attachments: attachments.map(file => file.name)
      });

      await createNotification({
        data: {
          content: notificationContent,
          sent_at: new Date().toISOString(),
          userID: { connect: { id: currentUser.Id } }
        }
      });

      showAlert({
        title: 'Success',
        message: 'Message sent successfully',
        severity: 'success'
      });

      // Reset form fields
      setRecipients([]);
      setSubject('');
      setBody('');
      setPriority('Normal');
      setDeliveryMethods([]);
      setAttachments([]);
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to send message',
        severity: 'error'
      });
    } finally {
      hideLoading();
    }
  }, [currentUser, recipients, subject, body, priority, deliveryMethods, attachments, createNotification, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (isCurrentUserLoading || isCreatingNotification) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isCurrentUserLoading, isCreatingNotification, showLoading, hideLoading]);

  return (
    <ComposeMessageComponent
      recipients={recipients}
      subject={subject}
      body={body}
      priority={priority}
      deliveryMethods={deliveryMethods}
      attachments={attachments}
      onRecipientsChange={handleRecipientsChange}
      onSubjectChange={handleSubjectChange}
      onBodyChange={handleBodyChange}
      onPriorityChange={handlePriorityChange}
      onDeliveryMethodsChange={handleDeliveryMethodsChange}
      onAttachmentsChange={handleAttachmentsChange}
      onPreview={handlePreview}
      onSendMessage={handleSendMessage}
      isLoading={isCurrentUserLoading || isCreatingNotification}
    />
  );
}

ComposeMessagePresenter.layout = 'AppLayout';
ComposeMessagePresenter.auth = true;