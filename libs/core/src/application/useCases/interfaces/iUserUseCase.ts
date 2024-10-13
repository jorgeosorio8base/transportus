
        import {
            QueryUserArgs,
            QueryUsersListArgs,
            MutationUserCreateArgs, MutationUserDeleteArgs, MutationUserUpdateArgs,
            MutationUserLoginArgs, MutationUserSignUpWithPasswordArgs, LoginResponse, Auth, MutationUserRefreshTokenArgs
        } from '../../../definitions/schema';
        import {UserEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IUserUseCase {
            getUser(params: IRepositoryParams<QueryUserArgs>): Promise<UserEntity | null>;
            getUserList(params: IRepositoryParams<QueryUsersListArgs>): Promise<{
                count: number;
                items: Array<UserEntity>;
            }>;
            createUser(params: IRepositoryParams<MutationUserCreateArgs>): Promise<boolean>;
deleteUser(params: IRepositoryParams<MutationUserDeleteArgs>): Promise<boolean>;
updateUser(params: IRepositoryParams<MutationUserUpdateArgs>): Promise<boolean>;
              
                  authenticateUser(params: IRepositoryParams<MutationUserLoginArgs>): Promise<LoginResponse | null>;
                  registerUser(params: IRepositoryParams<MutationUserSignUpWithPasswordArgs>): Promise<UserEntity | null>;
                  refreshTokenUser(params: IRepositoryParams<MutationUserRefreshTokenArgs>): Promise<Auth | null>;
                
        }
    