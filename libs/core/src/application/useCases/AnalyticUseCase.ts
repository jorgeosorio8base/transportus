
        import {IAnalyticUseCase} from './interfaces';
        import {AnalyticEntity} from '../../domain';
        import {
            QueryAnalyticArgs,
            QueryAnalyticsListArgs,
            MutationAnalyticCreateArgs, MutationAnalyticDeleteArgs, MutationAnalyticUpdateArgs,
            
        } from '../../definitions/schema';
        import {IAnalyticRepository, AnalyticRepository, IRepositoryParams} from '../../infrastructure';

        export class AnalyticUseCase implements IAnalyticUseCase {
              private readonly repository: IAnalyticRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new AnalyticRepository();
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

            async getAnalytic(params: IRepositoryParams<QueryAnalyticArgs>): Promise<AnalyticEntity | null> {
                        try {
                            return this.repository.getAnalytic(params)
                            .then((result) => new AnalyticEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getAnalytic'));
                        } catch (error) {
                            this.errorCatcher(error, 'getAnalytic');
                        }
            }

            async getAnalyticList(params: IRepositoryParams<QueryAnalyticsListArgs>): Promise<{
                count: number;
                items: Array<AnalyticEntity>;
                }> {
                try {
                    return this.repository.getAnalyticsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new AnalyticEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getAnalyticsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getAnalyticsList');
                }
            }

            async createAnalytic(params: IRepositoryParams<MutationAnalyticCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createAnalytic(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createAnalytic'));
                        } catch (error) {
                            this.errorCatcher(error, 'createAnalytic');
                        }
                    }

                    async deleteAnalytic(params: IRepositoryParams<MutationAnalyticDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteAnalytic(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteAnalytic'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteAnalytic');
                        }
                    }
                  
async updateAnalytic(params: IRepositoryParams<MutationAnalyticUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateAnalytic(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateAnalytic'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateAnalytic');
                        }
                    }

              
            }
    