
        import {IPackageUseCase} from './interfaces';
        import {PackageEntity} from '../../domain';
        import {
            QueryPackageArgs,
            QueryPackagesListArgs,
            MutationPackageCreateArgs, MutationPackageDeleteArgs, MutationPackageUpdateArgs,
            
        } from '../../definitions/schema';
        import {IPackageRepository, PackageRepository, IRepositoryParams} from '../../infrastructure';

        export class PackageUseCase implements IPackageUseCase {
              private readonly repository: IPackageRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new PackageRepository();
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

            async getPackage(params: IRepositoryParams<QueryPackageArgs>): Promise<PackageEntity | null> {
                        try {
                            return this.repository.getPackage(params)
                            .then((result) => new PackageEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getPackage'));
                        } catch (error) {
                            this.errorCatcher(error, 'getPackage');
                        }
            }

            async getPackageList(params: IRepositoryParams<QueryPackagesListArgs>): Promise<{
                count: number;
                items: Array<PackageEntity>;
                }> {
                try {
                    return this.repository.getPackageList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new PackageEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getPackageList'));
                } catch (error) {
                    this.errorCatcher(error, 'getPackageList');
                }
            }

            async createPackage(params: IRepositoryParams<MutationPackageCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createPackage(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createPackage'));
                        } catch (error) {
                            this.errorCatcher(error, 'createPackage');
                        }
                    }

                    async deletePackage(params: IRepositoryParams<MutationPackageDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deletePackage(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deletePackage'));
                        } catch (error) {
                            this.errorCatcher(error, 'deletePackage');
                        }
                    }
                  
async updatePackage(params: IRepositoryParams<MutationPackageUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updatePackage(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updatePackage'));
                        } catch (error) {
                            this.errorCatcher(error, 'updatePackage');
                        }
                    }

              
            }
    