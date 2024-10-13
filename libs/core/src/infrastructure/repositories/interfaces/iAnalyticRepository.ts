
        import {
            Analytic,
            QueryAnalyticArgs,
            QueryAnalyticsListArgs,
            AnalyticListResponse,
            MutationAnalyticCreateArgs, MutationAnalyticDeleteArgs, MutationAnalyticUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IAnalyticRepository {
            getAnalytic(params: IRepositoryParams<QueryAnalyticArgs>): Promise<Analytic | null>;
            getAnalyticsList(params: IRepositoryParams<QueryAnalyticsListArgs>): Promise<AnalyticListResponse>;
            createAnalytic(params: IRepositoryParams<MutationAnalyticCreateArgs>): Promise<Analytic | null>;
deleteAnalytic(params: IRepositoryParams<MutationAnalyticDeleteArgs>): Promise<SuccessResponse | null>;
updateAnalytic(params: IRepositoryParams<MutationAnalyticUpdateArgs>): Promise<Analytic | null>;
            
          }
    