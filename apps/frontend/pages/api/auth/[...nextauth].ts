
            /* eslint-disable @typescript-eslint/no-explicit-any */
            import { UseCases } from '@/src/usecases';
            import { Environment } from '@transportus/core';
            import NextAuth, { NextAuthOptions } from 'next-auth';
            import CredentialsProvider from 'next-auth/providers/credentials';

            async function refreshToken(token: any) {
              try {
                const refreshTokenResponse = await UseCases.User.refreshTokenUser({
                  variables: {
                    data: {
                      refreshToken: token.authInfo.refreshToken,
                      authProfileId: Environment.AUTH_PROFILE_ID,
                      email: token.user.email,
                    },
                  },
                });

                if (!refreshTokenResponse) {
                  return token;
                }

                return {
                  user: token.user,
                  authInfo: {
                    ...refreshTokenResponse,
                    idTokenExpiresAt: Date.now() + token.authInfo.idTokenExpiresAt * 1000,
                    accessTokenExpiresAt:
                      Date.now() + token.authInfo.accessTokenExpiresIn * 1000,
                  },
                };
              } catch {
                return token;
              }
            }

            const authOptions: NextAuthOptions = {
              providers: [
                CredentialsProvider({
                  name: 'Sign In with Email',
                  credentials: {
                    email: { label: 'Email', type: 'text' },
                    password: { label: 'Password', type: 'password' },
                  },
                  async authorize(credentials) {
                    const { email, password } = credentials as {
                      email: string;
                      password: string;
                    };

                    try {
                      const loginResponse = await UseCases.User.authenticateUser({
                        variables: {
                          data: {
                            email,
                            password,
                            authProfileId: Environment.AUTH_PROFILE_ID,
                          },
                        },
                      });

                      if (!loginResponse) {
                        throw new Error('Invalid credentials');
                      }

                      const userResponse = await UseCases.User.getUser({
                        variables: {
                          email,
                        },
                        token: loginResponse?.auth?.idToken || '',
                      });

                      if (!userResponse) {
                        throw new Error('Invalid credentials');
                      }

                      return {
                        email,
                        firstName: userResponse.FirstName || '',
                        lastName: userResponse.LastName || '',
                        authInfo: loginResponse.auth,
                        image: userResponse?.Avatar?.DownloadUrl || '',
                        roles: [],
                        id: userResponse?.Id || '',
                        status: userResponse?.Status || '',
                        name: `${userResponse.FirstName} ${userResponse.LastName}`,
                      };
                    } catch {
                      throw new Error('Invalid credentials');
                    }
                  },
                }),
              ],
              session: {
                strategy: 'jwt',
              },
              secret: Environment.NEXTAUTH_SECRET,
              callbacks: {
                async jwt(params) {
                  if (params.account && params.user) {
                    return {
                      user: params.user,
                      authInfo: params.user.authInfo,
                    };
                  }

                  if (Date.now() < params?.token?.authInfo?.idTokenExpiresAt) {
                    return params.token;
                  }

                  return refreshToken(params.token);
                },
                session: (params) => {
                  const { authInfo, ...restUser } = params.token.user;
                  return {
                    user: restUser,
                    token: params.token.authInfo,
                    expires: authInfo.accessTokenExpiresAt,
                  };
                },
              },
            };

            export default NextAuth(authOptions);

  