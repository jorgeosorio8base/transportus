
        import {
            QueryStatusUpdateArgs,
            QueryStatusUpdatesListArgs,
            MutationStatusUpdateCreateArgs, MutationStatusUpdateDeleteArgs, MutationStatusUpdateUpdateArgs,
            
        } from '../../../definitions/schema';
        import {StatusUpdateEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IStatusUpdateUseCase {
            getStatusUpdate(params: IRepositoryParams<QueryStatusUpdateArgs>): Promise<StatusUpdateEntity | null>;
            getStatusUpdateList(params: IRepositoryParams<QueryStatusUpdatesListArgs>): Promise<{
                count: number;
                items: Array<StatusUpdateEntity>;
            }>;
            createStatusUpdate(params: IRepositoryParams<MutationStatusUpdateCreateArgs>): Promise<boolean>;
deleteStatusUpdate(params: IRepositoryParams<MutationStatusUpdateDeleteArgs>): Promise<boolean>;
updateStatusUpdate(params: IRepositoryParams<MutationStatusUpdateUpdateArgs>): Promise<boolean>;
              
        }
    