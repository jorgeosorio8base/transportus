import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLoading, useAlert, usePackageList } from '@/src/hooks';
import { PackageEntity, PackageFilter, PackageSort, SortOrder } from '@transportus/core';
import { PackageInstructionDetailsComponent } from './PackageInstructionDetails';

export interface PackageInstructionDetailsComponentProps {
  packageDetails: PackageEntity | null;
  isLoading: boolean;
  onSaveChanges: () => void;
  onMarkAsCompleted: () => void;
  onFlagIssue: () => void;
}

export default function PackageInstructionDetailsPresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [packageId, setPackageId] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<PackageSort[]>([{ createdAt: SortOrder.Desc }]);

  const packageFilter = useMemo<PackageFilter>(() => {
    return {
      id: { equals: packageId }
    };
  }, [packageId]);

  const { data: packageData, isLoading: isPackageLoading, isError: isPackageError } = usePackageList({
    filter: packageFilter,
    sort: sortOrder,
    first: 1
  });

  const [packageDetails, setPackageDetails] = useState<PackageEntity | null>(null);

  useEffect(() => {
    if (isPackageLoading) {
      showLoading();
    } else {
      hideLoading();
      if (isPackageError) {
        showAlert({
          title: 'Error',
          message: 'An error occurred while fetching the package details.',
          severity: 'error'
        });
      }
    }
  }, [isPackageLoading, isPackageError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (packageData && packageData.items.length > 0) {
      setPackageDetails(packageData.items[0]);
    }
  }, [packageData]);

  const handleSaveChanges = useCallback(() => {
    // Implement save changes logic
    showAlert({
      title: 'Success',
      message: 'Changes saved successfully.',
      severity: 'success'
    });
  }, [showAlert]);

  const handleMarkAsCompleted = useCallback(() => {
    // Implement mark as completed logic
    showAlert({
      title: 'Success',
      message: 'Package instruction marked as completed.',
      severity: 'success'
    });
  }, [showAlert]);

  const handleFlagIssue = useCallback(() => {
    // Implement flag issue logic
    showAlert({
      title: 'Info',
      message: 'Issue has been flagged for review.',
      severity: 'info'
    });
  }, [showAlert]);

  const packageInstructionDetailsProps: PackageInstructionDetailsComponentProps = {
    packageDetails,
    isLoading: isPackageLoading,
    onSaveChanges: handleSaveChanges,
    onMarkAsCompleted: handleMarkAsCompleted,
    onFlagIssue: handleFlagIssue
  };

  return (
    <PackageInstructionDetailsComponent
      {...packageInstructionDetailsProps}
    />
  );
}

PackageInstructionDetailsPresenter.layout = 'AppLayout';
PackageInstructionDetailsPresenter.auth = true;