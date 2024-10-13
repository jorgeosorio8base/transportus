
        import {IRepositoryParams, IDriverRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Driver,
            QueryDriverArgs,
            QueryDriversListArgs,
            DriverListResponse,
            MutationDriverCreateArgs, MutationDriverDeleteArgs, MutationDriverUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class DriverRepository implements IDriverRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getDriver(params: IRepositoryParams<QueryDriverArgs>): Promise<Driver | null> {
                return this.http.requestGraphQL<{
                    driver: Driver
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DRIVER(
                            $id: ID,$license_number: String
                        ) {
                            driver(
                              id: $id,license_number: $license_number
                            ) {
                                id
createdAt
updatedAt
name
license_number
availability_status    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.driver)?.catch(() => null);
            }

            async getDriverList(params: IRepositoryParams<QueryDriversListArgs>): Promise<DriverListResponse> {
                return this.http.requestGraphQL<{
                    driversList: DriverListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DRIVER (
                                  $first: Int
                                  $skip: Int
                                  $filter: DriverFilter
                                  $sort: [DriverSort!]
                            ) {
                                driversList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
name
license_number
availability_status
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.driversList);
            }

            
                    async createDriver(params: IRepositoryParams<MutationDriverCreateArgs>): Promise<Driver | null> {
                        return this.http.requestGraphQL<{
                          driverCreate: Driver
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_DRIVER (
                                      $data: DriverCreateInput!
                                    ) {
                                         driverCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.driverCreate)?.catch(() => null);
                  }
                

                    async deleteDriver(params: IRepositoryParams<MutationDriverDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_DRIVER (
                                      $data: DriverDeleteInput!
                                      $filter: DriverKeyFilter
                                      $force: Boolean
                                    ) {
                                        driverDelete (
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
                  

                    async updateDriver(params: IRepositoryParams<MutationDriverUpdateArgs>): Promise<Driver | null> {
                        return this.http.requestGraphQL<{
                          driverUpdate: Driver
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_DRIVER (
                                      $data: DriverUpdateInput!
                                    ) {
                                         driverUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.driverUpdate)?.catch(() => null);
                  }
                

            
        }
      