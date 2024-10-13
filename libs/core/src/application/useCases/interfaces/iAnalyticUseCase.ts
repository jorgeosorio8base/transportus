
        import {
            QueryAnalyticArgs,
            QueryAnalyticsListArgs,
            MutationAnalyticCreateArgs, MutationAnalyticDeleteArgs, MutationAnalyticUpdateArgs,
            
        } from '../../../definitions/schema';
        import {AnalyticEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IAnalyticUseCase {
            getAnalytic(params: IRepositoryParams<QueryAnalyticArgs>): Promise<AnalyticEntity | null>;
            getAnalyticList(params: IRepositoryParams<QueryAnalyticsListArgs>): Promise<{
                count: number;
                items: Array<AnalyticEntity>;
            }>;
            createAnalytic(params: IRepositoryParams<MutationAnalyticCreateArgs>): Promise<boolean>;
deleteAnalytic(params: IRepositoryParams<MutationAnalyticDeleteArgs>): Promise<boolean>;
updateAnalytic(params: IRepositoryParams<MutationAnalyticUpdateArgs>): Promise<boolean>;
              
        }
    