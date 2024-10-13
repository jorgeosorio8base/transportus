
        import {
            QueryPackageArgs,
            QueryPackagesListArgs,
            MutationPackageCreateArgs, MutationPackageDeleteArgs, MutationPackageUpdateArgs,
            
        } from '../../../definitions/schema';
        import {PackageEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IPackageUseCase {
            getPackage(params: IRepositoryParams<QueryPackageArgs>): Promise<PackageEntity | null>;
            getPackageList(params: IRepositoryParams<QueryPackagesListArgs>): Promise<{
                count: number;
                items: Array<PackageEntity>;
            }>;
            createPackage(params: IRepositoryParams<MutationPackageCreateArgs>): Promise<boolean>;
deletePackage(params: IRepositoryParams<MutationPackageDeleteArgs>): Promise<boolean>;
updatePackage(params: IRepositoryParams<MutationPackageUpdateArgs>): Promise<boolean>;
              
        }
    