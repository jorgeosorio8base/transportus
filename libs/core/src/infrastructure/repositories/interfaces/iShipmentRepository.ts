
        import {
            Shipment,
            QueryShipmentArgs,
            QueryShipmentsListArgs,
            ShipmentListResponse,
            MutationShipmentCreateArgs, MutationShipmentDeleteArgs, MutationShipmentUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IShipmentRepository {
            getShipment(params: IRepositoryParams<QueryShipmentArgs>): Promise<Shipment | null>;
            getShipmentList(params: IRepositoryParams<QueryShipmentsListArgs>): Promise<ShipmentListResponse>;
            createShipment(params: IRepositoryParams<MutationShipmentCreateArgs>): Promise<Shipment | null>;
deleteShipment(params: IRepositoryParams<MutationShipmentDeleteArgs>): Promise<SuccessResponse | null>;
updateShipment(params: IRepositoryParams<MutationShipmentUpdateArgs>): Promise<Shipment | null>;
            
          }
    