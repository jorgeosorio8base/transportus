
        import {IRepositoryParams, IPackageRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Package,
            QueryPackageArgs,
            QueryPackagesListArgs,
            PackageListResponse,
            MutationPackageCreateArgs, MutationPackageDeleteArgs, MutationPackageUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class PackageRepository implements IPackageRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getPackage(params: IRepositoryParams<QueryPackageArgs>): Promise<Package | null> {
                return this.http.requestGraphQL<{
                    package: Package
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_PACKAGE(
                            $id: ID,$tracking_number: String
                        ) {
                            package(
                              id: $id,tracking_number: $tracking_number
                            ) {
                                id
createdAt
updatedAt
tracking_number
status
location

    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.package)?.catch(() => null);
            }

            async getPackageList(params: IRepositoryParams<QueryPackagesListArgs>): Promise<PackageListResponse> {
                return this.http.requestGraphQL<{
                    packagesList: PackageListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_PACKAGE (
                                  $first: Int
                                  $skip: Int
                                  $filter: PackageFilter
                                  $sort: [PackageSort!]
                            ) {
                                packagesList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
tracking_number
status
location


                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.packagesList);
            }

            
                    async createPackage(params: IRepositoryParams<MutationPackageCreateArgs>): Promise<Package | null> {
                        return this.http.requestGraphQL<{
                          packageCreate: Package
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_PACKAGE (
                                      $data: PackageCreateInput!
                                    ) {
                                         packageCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.packageCreate)?.catch(() => null);
                  }
                

                    async deletePackage(params: IRepositoryParams<MutationPackageDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_PACKAGE (
                                      $data: PackageDeleteInput!
                                      $filter: PackageKeyFilter
                                      $force: Boolean
                                    ) {
                                        packageDelete (
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
                  

                    async updatePackage(params: IRepositoryParams<MutationPackageUpdateArgs>): Promise<Package | null> {
                        return this.http.requestGraphQL<{
                          packageUpdate: Package
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_PACKAGE (
                                      $data: PackageUpdateInput!
                                    ) {
                                         packageUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.packageUpdate)?.catch(() => null);
                  }
                

            
        }
      