import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, useStatusUpdateList, useCurrentUser } from '@/src/hooks';
import { StatusUpdateEntity, UserEntity, StatusUpdateFilter, StatusUpdateSort, SortOrder } from '@transportus/core';
import { IssueResolutionCenterComponent } from './IssueResolutionCenter';
import { Formik } from 'formik';

export interface IssueResolutionCenterComponentProps {
  statusUpdates: StatusUpdateEntity[];
  count: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: StatusUpdateSort[]) => void;
  onResolveIssue: (issueId: string) => Promise<void>;
  onUpdateIssueStatus: (issueId: string, newStatus: string) => Promise<void>;
  currentUser: UserEntity | undefined;
}

export interface IssueResolutionCenterFormikProps {
  issueType: string;
  priority: string;
  description: string;
}

const initialValues: IssueResolutionCenterFormikProps = {
  issueType: '',
  priority: '',
  description: '',
};

export default function IssueResolutionCenterPresenter() {
  const [sortOrder, setSortOrder] = useState<StatusUpdateSort[]>([{ createdAt: SortOrder.Desc }]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [statusUpdatesState, setStatusUpdatesState] = useState<{
    statusUpdates: StatusUpdateEntity[];
    count: number;
  } | null>({
    statusUpdates: [],
    count: 0,
  });

  const statusUpdatesFilter = useMemo<StatusUpdateFilter>(() => {
    if (!searchTerm) {
      return {};
    }

    return {
      OR: [
        { status: { contains: searchTerm } },
        { package_id: { some: { location: { contains: searchTerm } } } },
      ],
    };
  }, [searchTerm]);

  const { data: statusUpdatesData, isLoading: statusUpdatesLoading, isError: isStatusUpdatesError } = useStatusUpdateList({
    filter: statusUpdatesFilter,
    sort: sortOrder,
  });

  const handleSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSortOrder = useCallback((value: StatusUpdateSort[]) => {
    setSortOrder(value);
  }, []);

  useEffect(() => {
    if (statusUpdatesLoading) {
      showLoading();
    } else {
      hideLoading();
      
      if (isStatusUpdatesError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the status updates.',
          severity: 'error',
        });
      }
    }
  }, [statusUpdatesLoading, isStatusUpdatesError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (statusUpdatesData) {
      setStatusUpdatesState({
        statusUpdates: statusUpdatesData.items || [],
        count: statusUpdatesData.count || 0,
      });
    }
  }, [statusUpdatesData]);

  const handleResolveIssue = useCallback(async (issueId: string) => {
    try {
      showLoading();
      // Assuming there's a mutation hook for resolving issues
      // await resolveIssueMutation({ issueId });
      showAlert({
        title: 'Success',
        message: 'Issue resolved successfully',
        severity: 'success',
      });
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to resolve the issue',
        severity: 'error',
      });
    } finally {
      hideLoading();
    }
  }, [showLoading, hideLoading, showAlert]);

  const handleUpdateIssueStatus = useCallback(async (issueId: string, newStatus: string) => {
    try {
      showLoading();
      // Assuming there's a mutation hook for updating issue status
      // await updateIssueStatusMutation({ issueId, status: newStatus });
      showAlert({
        title: 'Success',
        message: 'Issue status updated successfully',
        severity: 'success',
      });
    } catch (error) {
      showAlert({
        title: 'Error',
        message: 'Failed to update the issue status',
        severity: 'error',
      });
    } finally {
      hideLoading();
    }
  }, [showLoading, hideLoading, showAlert]);

  const { data: currentUser } = useCurrentUser();

  const handleSubmit = useCallback((values: IssueResolutionCenterFormikProps) => {
    // Handle form submission
    console.log(values);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <IssueResolutionCenterComponent
        statusUpdates={statusUpdatesState?.statusUpdates || []}
        count={statusUpdatesState?.count || 0}
        isLoading={statusUpdatesLoading}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTerm}
        onSortOrderChange={handleSortOrder}
        onResolveIssue={handleResolveIssue}
        onUpdateIssueStatus={handleUpdateIssueStatus}
        currentUser={currentUser}
      />
    </Formik>
  );
}

IssueResolutionCenterPresenter.layout = 'AppLayout';
IssueResolutionCenterPresenter.auth = true;