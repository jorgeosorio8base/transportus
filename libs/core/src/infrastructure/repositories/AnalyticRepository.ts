
        import {IRepositoryParams, IAnalyticRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Analytic,
            QueryAnalyticArgs,
            QueryAnalyticsListArgs,
            AnalyticListResponse,
            MutationAnalyticCreateArgs, MutationAnalyticDeleteArgs, MutationAnalyticUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class AnalyticRepository implements IAnalyticRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getAnalytic(params: IRepositoryParams<QueryAnalyticArgs>): Promise<Analytic | null> {
                return this.http.requestGraphQL<{
                    analytic: Analytic
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_ANALYTIC(
                            $id: ID
                        ) {
                            analytic(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
report_name
data
generated_at    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.analytic)?.catch(() => null);
            }

            async getAnalyticsList(params: IRepositoryParams<QueryAnalyticsListArgs>): Promise<AnalyticListResponse> {
                return this.http.requestGraphQL<{
                    analyticsList: AnalyticListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_ANALYTICS (
                                  $first: Int
                                  $skip: Int
                                  $filter: AnalyticFilter
                                  $sort: [AnalyticSort!]
                            ) {
                                analyticsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
report_name
data
generated_at
                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.analyticsList);
            }

            
                    async createAnalytic(params: IRepositoryParams<MutationAnalyticCreateArgs>): Promise<Analytic | null> {
                        return this.http.requestGraphQL<{
                          analyticCreate: Analytic
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_ANALYTIC (
                                      $data: AnalyticCreateInput!
                                    ) {
                                         analyticCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.analyticCreate)?.catch(() => null);
                  }
                

                    async deleteAnalytic(params: IRepositoryParams<MutationAnalyticDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_ANALYTIC (
                                      $data: AnalyticDeleteInput!
                                      $filter: AnalyticKeyFilter
                                      $force: Boolean
                                    ) {
                                        analyticDelete (
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
                  

                    async updateAnalytic(params: IRepositoryParams<MutationAnalyticUpdateArgs>): Promise<Analytic | null> {
                        return this.http.requestGraphQL<{
                          analyticUpdate: Analytic
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_ANALYTIC (
                                      $data: AnalyticUpdateInput!
                                    ) {
                                         analyticUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.analyticUpdate)?.catch(() => null);
                  }
                

            
        }
      