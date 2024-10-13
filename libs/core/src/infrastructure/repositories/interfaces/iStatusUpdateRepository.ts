
        import {
            StatusUpdate,
            QueryStatusUpdateArgs,
            QueryStatusUpdatesListArgs,
            StatusUpdateListResponse,
            MutationStatusUpdateCreateArgs, MutationStatusUpdateDeleteArgs, MutationStatusUpdateUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IStatusUpdateRepository {
            getStatusUpdate(params: IRepositoryParams<QueryStatusUpdateArgs>): Promise<StatusUpdate | null>;
            getStatusUpdateList(params: IRepositoryParams<QueryStatusUpdatesListArgs>): Promise<StatusUpdateListResponse>;
            createStatusUpdate(params: IRepositoryParams<MutationStatusUpdateCreateArgs>): Promise<StatusUpdate | null>;
deleteStatusUpdate(params: IRepositoryParams<MutationStatusUpdateDeleteArgs>): Promise<SuccessResponse | null>;
updateStatusUpdate(params: IRepositoryParams<MutationStatusUpdateUpdateArgs>): Promise<StatusUpdate | null>;
            
          }
    