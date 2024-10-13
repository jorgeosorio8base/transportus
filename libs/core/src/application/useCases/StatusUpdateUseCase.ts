
        import {IStatusUpdateUseCase} from './interfaces';
        import {StatusUpdateEntity} from '../../domain';
        import {
            QueryStatusUpdateArgs,
            QueryStatusUpdatesListArgs,
            MutationStatusUpdateCreateArgs, MutationStatusUpdateDeleteArgs, MutationStatusUpdateUpdateArgs,
            
        } from '../../definitions/schema';
        import {IStatusUpdateRepository, StatusUpdateRepository, IRepositoryParams} from '../../infrastructure';

        export class StatusUpdateUseCase implements IStatusUpdateUseCase {
              private readonly repository: IStatusUpdateRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new StatusUpdateRepository();
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

            async getStatusUpdate(params: IRepositoryParams<QueryStatusUpdateArgs>): Promise<StatusUpdateEntity | null> {
                        try {
                            return this.repository.getStatusUpdate(params)
                            .then((result) => new StatusUpdateEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getStatusUpdate'));
                        } catch (error) {
                            this.errorCatcher(error, 'getStatusUpdate');
                        }
            }

            async getStatusUpdateList(params: IRepositoryParams<QueryStatusUpdatesListArgs>): Promise<{
                count: number;
                items: Array<StatusUpdateEntity>;
                }> {
                try {
                    return this.repository.getStatusUpdateList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new StatusUpdateEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getStatusUpdateList'));
                } catch (error) {
                    this.errorCatcher(error, 'getStatusUpdateList');
                }
            }

            async createStatusUpdate(params: IRepositoryParams<MutationStatusUpdateCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createStatusUpdate(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createStatusUpdate'));
                        } catch (error) {
                            this.errorCatcher(error, 'createStatusUpdate');
                        }
                    }

                    async deleteStatusUpdate(params: IRepositoryParams<MutationStatusUpdateDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteStatusUpdate(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteStatusUpdate'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteStatusUpdate');
                        }
                    }
                  
async updateStatusUpdate(params: IRepositoryParams<MutationStatusUpdateUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateStatusUpdate(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateStatusUpdate'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateStatusUpdate');
                        }
                    }

              
            }
    