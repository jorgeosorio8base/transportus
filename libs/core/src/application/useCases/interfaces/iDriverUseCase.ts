
        import {
            QueryDriverArgs,
            QueryDriversListArgs,
            MutationDriverCreateArgs, MutationDriverDeleteArgs, MutationDriverUpdateArgs,
            
        } from '../../../definitions/schema';
        import {DriverEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IDriverUseCase {
            getDriver(params: IRepositoryParams<QueryDriverArgs>): Promise<DriverEntity | null>;
            getDriverList(params: IRepositoryParams<QueryDriversListArgs>): Promise<{
                count: number;
                items: Array<DriverEntity>;
            }>;
            createDriver(params: IRepositoryParams<MutationDriverCreateArgs>): Promise<boolean>;
deleteDriver(params: IRepositoryParams<MutationDriverDeleteArgs>): Promise<boolean>;
updateDriver(params: IRepositoryParams<MutationDriverUpdateArgs>): Promise<boolean>;
              
        }
    