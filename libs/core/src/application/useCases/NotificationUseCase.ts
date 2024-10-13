
        import {INotificationUseCase} from './interfaces';
        import {NotificationEntity} from '../../domain';
        import {
            QueryNotificationArgs,
            QueryNotificationsListArgs,
            MutationNotificationCreateArgs, MutationNotificationDeleteArgs, MutationNotificationUpdateArgs,
            
        } from '../../definitions/schema';
        import {INotificationRepository, NotificationRepository, IRepositoryParams} from '../../infrastructure';

        export class NotificationUseCase implements INotificationUseCase {
              private readonly repository: INotificationRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new NotificationRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getNotification(params: IRepositoryParams<QueryNotificationArgs>): Promise<NotificationEntity | null> {
                        try {
                            return this.repository.getNotification(params)
                            .then((result) => new NotificationEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getNotification'));
                        } catch (error) {
                            this.errorCatcher(error, 'getNotification');
                        }
            }

            async getNotificationList(params: IRepositoryParams<QueryNotificationsListArgs>): Promise<{
                count: number;
                items: Array<NotificationEntity>;
                }> {
                try {
                    return this.repository.getNotificationList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new NotificationEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getNotificationList'));
                } catch (error) {
                    this.errorCatcher(error, 'getNotificationList');
                }
            }

            async createNotification(params: IRepositoryParams<MutationNotificationCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createNotification(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createNotification'));
                        } catch (error) {
                            this.errorCatcher(error, 'createNotification');
                        }
                    }

                    async deleteNotification(params: IRepositoryParams<MutationNotificationDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteNotification(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteNotification'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteNotification');
                        }
                    }
                  
async updateNotification(params: IRepositoryParams<MutationNotificationUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateNotification(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateNotification'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateNotification');
                        }
                    }

              
            }
    