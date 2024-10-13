
        import {
            User,
            QueryUserArgs,
            QueryUsersListArgs,
            UserListResponse,
            MutationUserCreateArgs, MutationUserDeleteArgs, MutationUserUpdateArgs,
            SuccessResponse,
            MutationUserRefreshTokenArgs,
                   Auth, 
                   MutationUserLoginArgs, 
                   LoginResponse, 
                   MutationUserSignUpWithPasswordArgs
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IUserRepository {
            getUser(params: IRepositoryParams<QueryUserArgs>): Promise<User | null>;
            getUsersList(params: IRepositoryParams<QueryUsersListArgs>): Promise<UserListResponse>;
            createUser(params: IRepositoryParams<MutationUserCreateArgs>): Promise<User | null>;
deleteUser(params: IRepositoryParams<MutationUserDeleteArgs>): Promise<SuccessResponse | null>;
updateUser(params: IRepositoryParams<MutationUserUpdateArgs>): Promise<User | null>;
            
                authenticateUser(params: IRepositoryParams<MutationUserLoginArgs>): Promise<LoginResponse | null>;
                registerUser(params: IRepositoryParams<MutationUserSignUpWithPasswordArgs>): Promise<User | null>;
                refreshTokenUser(
                  params: IRepositoryParams<MutationUserRefreshTokenArgs>,
                ): Promise<Auth | null>;
              
          }
    