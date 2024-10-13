
        import {
            QueryNotificationArgs,
            QueryNotificationsListArgs,
            MutationNotificationCreateArgs, MutationNotificationDeleteArgs, MutationNotificationUpdateArgs,
            
        } from '../../../definitions/schema';
        import {NotificationEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface INotificationUseCase {
            getNotification(params: IRepositoryParams<QueryNotificationArgs>): Promise<NotificationEntity | null>;
            getNotificationList(params: IRepositoryParams<QueryNotificationsListArgs>): Promise<{
                count: number;
                items: Array<NotificationEntity>;
            }>;
            createNotification(params: IRepositoryParams<MutationNotificationCreateArgs>): Promise<boolean>;
deleteNotification(params: IRepositoryParams<MutationNotificationDeleteArgs>): Promise<boolean>;
updateNotification(params: IRepositoryParams<MutationNotificationUpdateArgs>): Promise<boolean>;
              
        }
    