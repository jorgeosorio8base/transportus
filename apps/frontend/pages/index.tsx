import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLoading, useAlert, useCurrentUser, useNotificationList, useShipmentList, useAnalyticList } from '@/src/hooks';
import { NotificationEntity, ShipmentEntity, AnalyticEntity, UserEntity, SortOrder } from '@transportus/core';
import { HomeComponent } from './Home';

export interface HomeComponentProps {
  dashboardData: {
    notifications: NotificationEntity[];
    shipments: ShipmentEntity[];
    analytics: AnalyticEntity[];
    currentUser: UserEntity | null;
  };
  isLoading: boolean;
  onCreateShipment: () => void;
  onViewAllShipments: () => void;
  onViewAllNotifications: () => void;
}

export default function HomePresenter() {
  const { showLoading, hideLoading } = useLoading();
  const { show: showAlert } = useAlert();
  const { data: currentUser } = useCurrentUser();

  const [notificationsData, setNotificationsData] = useState<{ items: NotificationEntity[]; count: number } | null>(null);
  const [shipmentsData, setShipmentsData] = useState<{ items: ShipmentEntity[]; count: number } | null>(null);
  const [analyticsData, setAnalyticsData] = useState<{ items: AnalyticEntity[]; count: number } | null>(null);

  const { data: notifications, isLoading: isNotificationsLoading, isError: isNotificationsError } = useNotificationList({
    first: 5,
    sort: [{ createdAt: SortOrder.Desc }]
  });

  const { data: shipments, isLoading: isShipmentsLoading, isError: isShipmentsError } = useShipmentList({
    first: 5,
    sort: [{ createdAt: SortOrder.Desc }]
  });

  const { data: analytics, isLoading: isAnalyticsLoading, isError: isAnalyticsError } = useAnalyticList({
    first: 5,
    sort: [{ createdAt: SortOrder.Desc }]
  });

  const isLoading = useMemo(() => {
    return isNotificationsLoading || isShipmentsLoading || isAnalyticsLoading;
  }, [isNotificationsLoading, isShipmentsLoading, isAnalyticsLoading]);

  const hasError = useMemo(() => {
    return isNotificationsError || isShipmentsError || isAnalyticsError;
  }, [isNotificationsError, isShipmentsError, isAnalyticsError]);

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
      if (hasError) {
        showAlert({
          title: "Error",
          message: "An error occurred while fetching dashboard data.",
          severity: "error"
        });
      }
    }
  }, [isLoading, hasError, showLoading, hideLoading, showAlert]);

  useEffect(() => {
    if (notifications) {
      setNotificationsData(notifications);
    }
  }, [notifications]);

  useEffect(() => {
    if (shipments) {
      setShipmentsData(shipments);
    }
  }, [shipments]);

  useEffect(() => {
    if (analytics) {
      setAnalyticsData(analytics);
    }
  }, [analytics]);

  const dashboardData = useMemo(() => {
    return {
      notifications: notificationsData?.items || [],
      shipments: shipmentsData?.items || [],
      analytics: analyticsData?.items || [],
      currentUser: currentUser || null
    };
  }, [notificationsData, shipmentsData, analyticsData, currentUser]);

  const handleCreateShipment = useCallback(() => {
    // TODO: Implement create shipment functionality
  }, []);

  const handleViewAllShipments = useCallback(() => {
    // TODO: Implement view all shipments functionality
  }, []);

  const handleViewAllNotifications = useCallback(() => {
    // TODO: Implement view all notifications functionality
  }, []);

  return (
    <HomeComponent
      dashboardData={dashboardData}
      isLoading={isLoading}
      onCreateShipment={handleCreateShipment}
      onViewAllShipments={handleViewAllShipments}
      onViewAllNotifications={handleViewAllNotifications}
    />
  );
}

HomePresenter.layout = "AppLayout";
HomePresenter.auth = true;