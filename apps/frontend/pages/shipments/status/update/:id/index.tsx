import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLoading, useAlert, usePackage, useStatusUpdateList, useUpdatePackage } from '@/src/hooks';
import { PackageEntity, StatusUpdateEntity, PackageFilter, PackageSort, SortOrder } from '@transportus/core';
import { PackageStatusUpdateComponent } from './PackageStatusUpdate';
import { Formik } from 'formik';

export interface PackageStatusUpdateComponentProps {
  packageInfo: PackageEntity | undefined;
  packageHistory: StatusUpdateEntity[];
  isLoading: boolean;
  onPackageIdChange: (value: string) => void;
  onStatusUpdate: (values: PackageStatusUpdateFormikProps) => void;
}

export interface PackageStatusUpdateFormikProps {
  status: string;
  location: string;
  notes: string;
}

export default function PackageStatusUpdatePresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const [packageId, setPackageId] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<PackageSort[]>([{ updatedAt: SortOrder.Desc }]);

  const packageFilter = useMemo<PackageFilter>(() => {
    return packageId ? { id: { equals: packageId } } : {};
  }, [packageId]);

  const { data: packageData, isLoading: isPackageLoading, isError: isPackageError } = usePackage({
    filter: packageFilter,
    sort: sortOrder
  });

  const { data: packageHistoryData, isLoading: isHistoryLoading, isError: isHistoryError } = useStatusUpdateList({
    filter: { package_id: { id: { equals: packageId } } },
    sort: [{ timestamp: SortOrder.Desc }]
  });

  const { mutate: updatePackageStatus, isPending: isUpdating } = useUpdatePackage();

  useEffect(() => {
    if (isPackageLoading || isHistoryLoading || isUpdating) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isPackageLoading, isHistoryLoading, isUpdating]);

  useEffect(() => {
    if (isPackageError || isHistoryError) {
      showAlert({
        title: "Error",
        message: "An error occurred while fetching data.",
        severity: "error"
      });
    }
  }, [isPackageError, isHistoryError]);

  const handlePackageIdChange = useCallback((value: string) => {
    setPackageId(value);
  }, []);

  const handleStatusUpdate = useCallback((values: PackageStatusUpdateFormikProps) => {
    updatePackageStatus(
      {
        id: packageId,
        status: values.status,
        location: values.location
      },
      {
        onSuccess: () => {
          showAlert({
            title: "Success",
            message: "Package status updated successfully.",
            severity: "success"
          });
        },
        onError: (error) => {
          showAlert({
            title: "Error",
            message: "Failed to update package status.",
            severity: "error"
          });
        }
      }
    );
  }, [packageId, updatePackageStatus]);

  const packageInfo = useMemo(() => packageData?.items[0], [packageData]);
  const packageHistory = useMemo(() => packageHistoryData?.items || [], [packageHistoryData]);

  const initialValues = useMemo<PackageStatusUpdateFormikProps>(() => ({
    status: packageInfo?.Status || '',
    location: packageInfo?.Location || '',
    notes: ''
  }), [packageInfo]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleStatusUpdate}
    >
      <PackageStatusUpdateComponent
        packageInfo={packageInfo}
        packageHistory={packageHistory}
        isLoading={isPackageLoading || isHistoryLoading || isUpdating}
        onPackageIdChange={handlePackageIdChange}
        onStatusUpdate={handleStatusUpdate}
      />
    </Formik>
  );
}

PackageStatusUpdatePresenter.layout = "AppLayout";
PackageStatusUpdatePresenter.auth = true;