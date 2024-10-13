
        import {
            Driver,
            QueryDriverArgs,
            QueryDriversListArgs,
            DriverListResponse,
            MutationDriverCreateArgs, MutationDriverDeleteArgs, MutationDriverUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IDriverRepository {
            getDriver(params: IRepositoryParams<QueryDriverArgs>): Promise<Driver | null>;
            getDriverList(params: IRepositoryParams<QueryDriversListArgs>): Promise<DriverListResponse>;
            createDriver(params: IRepositoryParams<MutationDriverCreateArgs>): Promise<Driver | null>;
deleteDriver(params: IRepositoryParams<MutationDriverDeleteArgs>): Promise<SuccessResponse | null>;
updateDriver(params: IRepositoryParams<MutationDriverUpdateArgs>): Promise<Driver | null>;
            
          }
    