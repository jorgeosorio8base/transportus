
        import {IRepositoryParams, IStatusUpdateRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            StatusUpdate,
            QueryStatusUpdateArgs,
            QueryStatusUpdatesListArgs,
            StatusUpdateListResponse,
            MutationStatusUpdateCreateArgs, MutationStatusUpdateDeleteArgs, MutationStatusUpdateUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class StatusUpdateRepository implements IStatusUpdateRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getStatusUpdate(params: IRepositoryParams<QueryStatusUpdateArgs>): Promise<StatusUpdate | null> {
                return this.http.requestGraphQL<{
                    statusUpdate: StatusUpdate
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_STATUSUPDATE(
                            $id: ID
                        ) {
                            statusUpdate(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
status
timestamp
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.statusUpdate)?.catch(() => null);
            }

            async getStatusUpdateList(params: IRepositoryParams<QueryStatusUpdatesListArgs>): Promise<StatusUpdateListResponse> {
                return this.http.requestGraphQL<{
                    statusUpdatesList: StatusUpdateListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_STATUSUPDATE (
                                  $first: Int
                                  $skip: Int
                                  $filter: StatusUpdateFilter
                                  $sort: [StatusUpdateSort!]
                            ) {
                                statusUpdatesList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
status
timestamp

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.statusUpdatesList);
            }

            
                    async createStatusUpdate(params: IRepositoryParams<MutationStatusUpdateCreateArgs>): Promise<StatusUpdate | null> {
                        return this.http.requestGraphQL<{
                          statusUpdateCreate: StatusUpdate
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_STATUSUPDATE (
                                      $data: StatusUpdateCreateInput!
                                    ) {
                                         statusUpdateCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.statusUpdateCreate)?.catch(() => null);
                  }
                

                    async deleteStatusUpdate(params: IRepositoryParams<MutationStatusUpdateDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_STATUSUPDATE (
                                      $data: StatusUpdateDeleteInput!
                                      $filter: StatusUpdateKeyFilter
                                      $force: Boolean
                                    ) {
                                        statusUpdateDelete (
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
                  

                    async updateStatusUpdate(params: IRepositoryParams<MutationStatusUpdateUpdateArgs>): Promise<StatusUpdate | null> {
                        return this.http.requestGraphQL<{
                          statusUpdateUpdate: StatusUpdate
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_STATUSUPDATE (
                                      $data: StatusUpdateUpdateInput!
                                    ) {
                                         statusUpdateUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.statusUpdateUpdate)?.catch(() => null);
                  }
                

            
        }
      