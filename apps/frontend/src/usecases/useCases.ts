
            import {IUserUseCase, UserUseCase, IClientUseCase, ClientUseCase, IPackageUseCase, PackageUseCase, IShipmentUseCase, ShipmentUseCase, IDriverUseCase, DriverUseCase, INotificationUseCase, NotificationUseCase, IStatusUpdateUseCase, StatusUpdateUseCase, IAnalyticUseCase, AnalyticUseCase } from '@transportus/core';
            
            export interface IUseCases {
                User: IUserUseCase, Client: IClientUseCase, Package: IPackageUseCase, Shipment: IShipmentUseCase, Driver: IDriverUseCase, Notification: INotificationUseCase, StatusUpdate: IStatusUpdateUseCase, Analytic: IAnalyticUseCase
            }

            export const UseCases: IUseCases = {
                User: new UserUseCase(), Client: new ClientUseCase(), Package: new PackageUseCase(), Shipment: new ShipmentUseCase(), Driver: new DriverUseCase(), Notification: new NotificationUseCase(), StatusUpdate: new StatusUpdateUseCase(), Analytic: new AnalyticUseCase()
            };
        