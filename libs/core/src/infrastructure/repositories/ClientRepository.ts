
        import {IRepositoryParams, IClientRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Client,
            QueryClientArgs,
            QueryClientsListArgs,
            ClientListResponse,
            MutationClientCreateArgs, MutationClientDeleteArgs, MutationClientUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class ClientRepository implements IClientRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getClient(params: IRepositoryParams<QueryClientArgs>): Promise<Client | null> {
                return this.http.requestGraphQL<{
                    client: Client
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_CLIENT(
                            $id: ID,$email: String
                        ) {
                            client(
                              id: $id,email: $email
                            ) {
                                id
createdAt
updatedAt
company_name
primary_contact
address
phone_number
email
preferred_shipping_methods
special_handling_instructions
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.client)?.catch(() => null);
            }

            async getClientList(params: IRepositoryParams<QueryClientsListArgs>): Promise<ClientListResponse> {
                return this.http.requestGraphQL<{
                    clientsList: ClientListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_CLIENT (
                                  $first: Int
                                  $skip: Int
                                  $filter: ClientFilter
                                  $sort: [ClientSort!]
                            ) {
                                clientsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
company_name
primary_contact
address
phone_number
email
preferred_shipping_methods
special_handling_instructions

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.clientsList);
            }

            
                    async createClient(params: IRepositoryParams<MutationClientCreateArgs>): Promise<Client | null> {
                        return this.http.requestGraphQL<{
                          clientCreate: Client
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_CLIENT (
                                      $data: ClientCreateInput!
                                    ) {
                                         clientCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.clientCreate)?.catch(() => null);
                  }
                

                    async deleteClient(params: IRepositoryParams<MutationClientDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_CLIENT (
                                      $data: ClientDeleteInput!
                                      $filter: ClientKeyFilter
                                      $force: Boolean
                                    ) {
                                        clientDelete (
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
                  

                    async updateClient(params: IRepositoryParams<MutationClientUpdateArgs>): Promise<Client | null> {
                        return this.http.requestGraphQL<{
                          clientUpdate: Client
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_CLIENT (
                                      $data: ClientUpdateInput!
                                    ) {
                                         clientUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.clientUpdate)?.catch(() => null);
                  }
                

            
        }
      