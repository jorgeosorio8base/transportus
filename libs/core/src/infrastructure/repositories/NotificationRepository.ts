
        import {IRepositoryParams, INotificationRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Notification,
            QueryNotificationArgs,
            QueryNotificationsListArgs,
            NotificationListResponse,
            MutationNotificationCreateArgs, MutationNotificationDeleteArgs, MutationNotificationUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class NotificationRepository implements INotificationRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getNotification(params: IRepositoryParams<QueryNotificationArgs>): Promise<Notification | null> {
                return this.http.requestGraphQL<{
                    notification: Notification
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_NOTIFICATION(
                            $id: ID
                        ) {
                            notification(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
content
sent_at
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.notification)?.catch(() => null);
            }

            async getNotificationList(params: IRepositoryParams<QueryNotificationsListArgs>): Promise<NotificationListResponse> {
                return this.http.requestGraphQL<{
                    notificationsList: NotificationListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_NOTIFICATION (
                                  $first: Int
                                  $skip: Int
                                  $filter: NotificationFilter
                                  $sort: [NotificationSort!]
                            ) {
                                notificationsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
content
sent_at

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.notificationsList);
            }

            
                    async createNotification(params: IRepositoryParams<MutationNotificationCreateArgs>): Promise<Notification | null> {
                        return this.http.requestGraphQL<{
                          notificationCreate: Notification
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_NOTIFICATION (
                                      $data: NotificationCreateInput!
                                    ) {
                                         notificationCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.notificationCreate)?.catch(() => null);
                  }
                

                    async deleteNotification(params: IRepositoryParams<MutationNotificationDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_NOTIFICATION (
                                      $data: NotificationDeleteInput!
                                      $filter: NotificationKeyFilter
                                      $force: Boolean
                                    ) {
                                        notificationDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateNotification(params: IRepositoryParams<MutationNotificationUpdateArgs>): Promise<Notification | null> {
                        return this.http.requestGraphQL<{
                          notificationUpdate: Notification
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_NOTIFICATION (
                                      $data: NotificationUpdateInput!
                                    ) {
                                         notificationUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.notificationUpdate)?.catch(() => null);
                  }
                

            
        }
      