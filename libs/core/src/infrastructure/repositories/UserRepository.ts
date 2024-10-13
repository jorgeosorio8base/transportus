
        import {IRepositoryParams, IUserRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
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
        } from '../../definitions/schema';

        export class UserRepository implements IUserRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getUser(params: IRepositoryParams<QueryUserArgs>): Promise<User | null> {
                return this.http.requestGraphQL<{
                    user: User
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_USER(
                            $id: ID,$email: String
                        ) {
                            user(
                              id: $id,email: $email
                            ) {
                                id
createdAt
updatedAt

email
status
origin
is8base
firstName
lastName
timezone
avatar {
                                        id
                                        downloadUrl
                                      }

    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.user)?.catch(() => null);
            }

            async getUsersList(params: IRepositoryParams<QueryUsersListArgs>): Promise<UserListResponse> {
                return this.http.requestGraphQL<{
                    usersList: UserListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_USERS (
                                  $first: Int
                                  $skip: Int
                                  $filter: UserFilter
                                  $sort: [UserSort!]
                            ) {
                                usersList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt

email
status
origin
is8base
firstName
lastName
timezone
avatar {
                                                id
                                                downloadUrl
                                              }


                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.usersList);
            }

            
                    async createUser(params: IRepositoryParams<MutationUserCreateArgs>): Promise<User | null> {
                        return this.http.requestGraphQL<{
                          userCreate: User
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_USER (
                                      $data: UserCreateInput!
                                    ) {
                                         userCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.userCreate)?.catch(() => null);
                  }
                

                    async deleteUser(params: IRepositoryParams<MutationUserDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_USER (
                                      $data: UserDeleteInput!
                                      $filter: UserKeyFilter
                                      $force: Boolean
                                    ) {
                                        userDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateUser(params: IRepositoryParams<MutationUserUpdateArgs>): Promise<User | null> {
                        return this.http.requestGraphQL<{
                          userUpdate: User
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_USER (
                                      $data: UserUpdateInput!
                                    ) {
                                         userUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.userUpdate)?.catch(() => null);
                  }
                

            
                async authenticateUser(
                  params: IRepositoryParams<MutationUserLoginArgs>,
                ): Promise<LoginResponse | null> {
                  return this.http
                    .requestGraphQL<{
                      userLogin: LoginResponse;
                    }>({
                      url: Environment.BACKEND_API_URL,
                      requestDocument: gql`
                        mutation UPDATE_USER($data: UserLoginInput!) {
                          userLogin(data: $data) {
                            auth {
                              accessToken
                              accessTokenExpiresAt
                              idToken
                              idTokenExpiresAt
                              refreshToken
                            }
                            success
                          }
                        }
                      `,
                      variables: params.variables,
                    })
                    ?.then((response) => response.userLogin)
                    ?.catch(() => null);
                }

                async refreshTokenUser(
                  params: IRepositoryParams<MutationUserRefreshTokenArgs>,
                ): Promise<Auth | null> {
                  return this.http.requestGraphQL<{
                    userRefreshToken: Auth;
                  }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument: gql`
                      mutation REFRESH_TOKEN($data: RefreshTokenInput!) {
                        userRefreshToken(data: $data) {
                          refreshToken
                          idToken
                          idTokenExpiresAt
                          accessToken
                          accessTokenExpiresAt
                        }
                      }
                    `,
                    token: params.token,
                    variables: params.variables,
                  })
                  ?.then((response) => response.userRefreshToken)
                  ?.catch(() => null);
                }


                async registerUser(
                  params: IRepositoryParams<MutationUserSignUpWithPasswordArgs>,
                ): Promise<User | null> {
                  return this.http
                    .requestGraphQL<{
                      userSignUpWithPassword: User;
                    }>({
                      url: Environment.BACKEND_API_URL,
                      requestDocument: gql`
                        mutation UPDATE_USER(
                          $authProfileId: ID
                          $password: String!
                          $user: UserCreateInput!
                        ) {
                          userSignUpWithPassword(
                            authProfileId: $authProfileId
                            password: $password
                            user: $user
                          ) {
                            id
                            firstName
                            lastName
                            email
                            avatar {
                              downloadUrl
                            }
                            roles {
                              items {
                                name
                              }
                            }
                            status
                          }
                        }
                      `,
                      variables: params.variables,
                    })
                    ?.then((response) => response.userSignUpWithPassword)
                    ?.catch(() => null);
                }
            
        }
      