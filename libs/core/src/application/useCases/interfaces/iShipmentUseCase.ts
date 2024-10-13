
        import {
            QueryShipmentArgs,
            QueryShipmentsListArgs,
            MutationShipmentCreateArgs, MutationShipmentDeleteArgs, MutationShipmentUpdateArgs,
            
        } from '../../../definitions/schema';
        import {ShipmentEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IShipmentUseCase {
            getShipment(params: IRepositoryParams<QueryShipmentArgs>): Promise<ShipmentEntity | null>;
            getShipmentList(params: IRepositoryParams<QueryShipmentsListArgs>): Promise<{
                count: number;
                items: Array<ShipmentEntity>;
            }>;
            createShipment(params: IRepositoryParams<MutationShipmentCreateArgs>): Promise<boolean>;
deleteShipment(params: IRepositoryParams<MutationShipmentDeleteArgs>): Promise<boolean>;
updateShipment(params: IRepositoryParams<MutationShipmentUpdateArgs>): Promise<boolean>;
              
        }
    