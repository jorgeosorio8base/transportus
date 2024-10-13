
        import {
            Package,
            QueryPackageArgs,
            QueryPackagesListArgs,
            PackageListResponse,
            MutationPackageCreateArgs, MutationPackageDeleteArgs, MutationPackageUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IPackageRepository {
            getPackage(params: IRepositoryParams<QueryPackageArgs>): Promise<Package | null>;
            getPackageList(params: IRepositoryParams<QueryPackagesListArgs>): Promise<PackageListResponse>;
            createPackage(params: IRepositoryParams<MutationPackageCreateArgs>): Promise<Package | null>;
deletePackage(params: IRepositoryParams<MutationPackageDeleteArgs>): Promise<SuccessResponse | null>;
updatePackage(params: IRepositoryParams<MutationPackageUpdateArgs>): Promise<Package | null>;
            
          }
    