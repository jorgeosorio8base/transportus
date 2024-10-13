
        import {IRepositoryParams, IShipmentRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Shipment,
            QueryShipmentArgs,
            QueryShipmentsListArgs,
            ShipmentListResponse,
            MutationShipmentCreateArgs, MutationShipmentDeleteArgs, MutationShipmentUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class ShipmentRepository implements IShipmentRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getShipment(params: IRepositoryParams<QueryShipmentArgs>): Promise<Shipment | null> {
                return this.http.requestGraphQL<{
                    shipment: Shipment
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_SHIPMENT(
                            $id: ID
                        ) {
                            shipment(
                              id: $id
                            ) {
                                id
createdAt
updatedAt

origin
destination
priority
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.shipment)?.catch(() => null);
            }

            async getShipmentList(params: IRepositoryParams<QueryShipmentsListArgs>): Promise<ShipmentListResponse> {
                return this.http.requestGraphQL<{
                    shipmentsList: ShipmentListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_SHIPMENT (
                                  $first: Int
                                  $skip: Int
                                  $filter: ShipmentFilter
                                  $sort: [ShipmentSort!]
                            ) {
                                shipmentsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt

origin
destination
priority

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.shipmentsList);
            }

            
                    async createShipment(params: IRepositoryParams<MutationShipmentCreateArgs>): Promise<Shipment | null> {
                        return this.http.requestGraphQL<{
                          shipmentCreate: Shipment
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_SHIPMENT (
                                      $data: ShipmentCreateInput!
                                    ) {
                                         shipmentCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.shipmentCreate)?.catch(() => null);
                  }
                

                    async deleteShipment(params: IRepositoryParams<MutationShipmentDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_SHIPMENT (
                                      $data: ShipmentDeleteInput!
                                      $filter: ShipmentKeyFilter
                                      $force: Boolean
                                    ) {
                                        shipmentDelete (
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
                  

                    async updateShipment(params: IRepositoryParams<MutationShipmentUpdateArgs>): Promise<Shipment | null> {
                        return this.http.requestGraphQL<{
                          shipmentUpdate: Shipment
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_SHIPMENT (
                                      $data: ShipmentUpdateInput!
                                    ) {
                                         shipmentUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.shipmentUpdate)?.catch(() => null);
                  }
                

            
        }
      