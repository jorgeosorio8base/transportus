
        import {IShipmentUseCase} from './interfaces';
        import {ShipmentEntity} from '../../domain';
        import {
            QueryShipmentArgs,
            QueryShipmentsListArgs,
            MutationShipmentCreateArgs, MutationShipmentDeleteArgs, MutationShipmentUpdateArgs,
            
        } from '../../definitions/schema';
        import {IShipmentRepository, ShipmentRepository, IRepositoryParams} from '../../infrastructure';

        export class ShipmentUseCase implements IShipmentUseCase {
              private readonly repository: IShipmentRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new ShipmentRepository();
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

            async getShipment(params: IRepositoryParams<QueryShipmentArgs>): Promise<ShipmentEntity | null> {
                        try {
                            return this.repository.getShipment(params)
                            .then((result) => new ShipmentEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getShipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'getShipment');
                        }
            }

            async getShipmentList(params: IRepositoryParams<QueryShipmentsListArgs>): Promise<{
                count: number;
                items: Array<ShipmentEntity>;
                }> {
                try {
                    return this.repository.getShipmentList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new ShipmentEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getShipmentList'));
                } catch (error) {
                    this.errorCatcher(error, 'getShipmentList');
                }
            }

            async createShipment(params: IRepositoryParams<MutationShipmentCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createShipment(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createShipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'createShipment');
                        }
                    }

                    async deleteShipment(params: IRepositoryParams<MutationShipmentDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteShipment(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteShipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteShipment');
                        }
                    }
                  
async updateShipment(params: IRepositoryParams<MutationShipmentUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateShipment(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateShipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateShipment');
                        }
                    }

              
            }
    