
        import {IDriverUseCase} from './interfaces';
        import {DriverEntity} from '../../domain';
        import {
            QueryDriverArgs,
            QueryDriversListArgs,
            MutationDriverCreateArgs, MutationDriverDeleteArgs, MutationDriverUpdateArgs,
            
        } from '../../definitions/schema';
        import {IDriverRepository, DriverRepository, IRepositoryParams} from '../../infrastructure';

        export class DriverUseCase implements IDriverUseCase {
              private readonly repository: IDriverRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new DriverRepository();
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

            async getDriver(params: IRepositoryParams<QueryDriverArgs>): Promise<DriverEntity | null> {
                        try {
                            return this.repository.getDriver(params)
                            .then((result) => new DriverEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getDriver'));
                        } catch (error) {
                            this.errorCatcher(error, 'getDriver');
                        }
            }

            async getDriverList(params: IRepositoryParams<QueryDriversListArgs>): Promise<{
                count: number;
                items: Array<DriverEntity>;
                }> {
                try {
                    return this.repository.getDriverList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new DriverEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getDriverList'));
                } catch (error) {
                    this.errorCatcher(error, 'getDriverList');
                }
            }

            async createDriver(params: IRepositoryParams<MutationDriverCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createDriver(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createDriver'));
                        } catch (error) {
                            this.errorCatcher(error, 'createDriver');
                        }
                    }

                    async deleteDriver(params: IRepositoryParams<MutationDriverDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteDriver(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteDriver'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteDriver');
                        }
                    }
                  
async updateDriver(params: IRepositoryParams<MutationDriverUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateDriver(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateDriver'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateDriver');
                        }
                    }

              
            }
    