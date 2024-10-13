
        import {IUserUseCase} from './interfaces';
        import {UserEntity} from '../../domain';
        import {
            QueryUserArgs,
            QueryUsersListArgs,
            MutationUserCreateArgs, MutationUserDeleteArgs, MutationUserUpdateArgs,
            MutationUserLoginArgs, MutationUserSignUpWithPasswordArgs, Auth, LoginResponse, MutationUserRefreshTokenArgs
        } from '../../definitions/schema';
        import {IUserRepository, UserRepository, IRepositoryParams} from '../../infrastructure';

        export class UserUseCase implements IUserUseCase {
              private readonly repository: IUserRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new UserRepository();
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

            async getUser(params: IRepositoryParams<QueryUserArgs>): Promise<UserEntity | null> {
                        try {
                            return this.repository.getUser(params)
                            .then((result) => new UserEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getUser'));
                        } catch (error) {
                            this.errorCatcher(error, 'getUser');
                        }
            }

            async getUserList(params: IRepositoryParams<QueryUsersListArgs>): Promise<{
                count: number;
                items: Array<UserEntity>;
                }> {
                try {
                    return this.repository.getUsersList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new UserEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getUsersList'));
                } catch (error) {
                    this.errorCatcher(error, 'getUsersList');
                }
            }

            async createUser(params: IRepositoryParams<MutationUserCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createUser(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createUser'));
                        } catch (error) {
                            this.errorCatcher(error, 'createUser');
                        }
                    }

                    async deleteUser(params: IRepositoryParams<MutationUserDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteUser(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteUser'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteUser');
                        }
                    }
                  
async updateUser(params: IRepositoryParams<MutationUserUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateUser(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateUser'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateUser');
                        }
                    }

              
                  async authenticateUser(params: IRepositoryParams<MutationUserLoginArgs>): Promise<LoginResponse | null> {
                    try {
                        return this.repository.authenticateUser(params)
                        .then((result) => result)
                        .catch((err) => this.errorCatcher(err, 'authenticateUser'));
                    } catch (error) {
                        this.errorCatcher(error, 'authenticateUser');
                    }
                  }

                  async refreshTokenUser(params: IRepositoryParams<MutationUserRefreshTokenArgs>): Promise<Auth | null> {
                      try {
                        return this.repository.refreshTokenUser(params)
                        .then((result) => result)
                        .catch((err) => this.errorCatcher(err, 'refreshTokenUser'));
                      } catch (error) {
                        this.errorCatcher(error, 'refreshTokenUser');
                      }
                  }

                  async registerUser(params: IRepositoryParams<MutationUserSignUpWithPasswordArgs>): Promise<UserEntity | null> {
                    try {
                        return this.repository.registerUser(params)
                        .then((result) => new UserEntity(result))
                        .catch((err) => this.errorCatcher(err, 'registerUser'));
                    } catch (error) {
                        this.errorCatcher(error, 'registerUser');
                    }
                  }
                
            }
    