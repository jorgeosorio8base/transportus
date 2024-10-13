
            import Axios, { AxiosInstance, type CreateAxiosDefaults } from 'axios';
            import { ClientError, GraphQLClient } from 'graphql-request';
            import { IHttp, IRequestGraphQL, IRequestOption } from './interfaces';
            import { jwtDecode } from 'jwt-decode';

            function isValidJWT(token?: string) {
              if (token != null && token !== '') {
                  const decodedToken = jwtDecode<{ exp: number }>(token);
                  const dateNow = new Date();
                  return decodedToken.exp * 1000 > dateNow.getTime();
              }

              return false;
            }

            export class Http implements IHttp {
            axios: AxiosInstance;

            constructor(options?: CreateAxiosDefaults) {
                this.axios = Axios.create(options);

            }

            request<T>(requestOption: IRequestOption): Promise<T> {
                return this.axios
                .request({
                    method: requestOption.method,
                    url: requestOption.url,
                    data: requestOption.body,
                    headers: requestOption.headers,
                    responseType: requestOption.responseType,
                    timeout: requestOption.timeout,
                })
                .then((res) => res.data)
                .catch((err) => {
                    if (err instanceof Error) {
                    throw new Error(err.message);
                    }

                    throw err;
                });
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            requestGraphQL<T, T2 = any>(request: IRequestGraphQL<T2>): Promise<T> {
                if (!request.url) throw new Error('URL is required');

                const client = new GraphQLClient(request.url, {
                headers: {
                    ...(isValidJWT(request.token) && {
                    Authorization: `Bearer ${request.token}`,
                    }),
                },
                });
                return client.request<T>(request.requestDocument, request.variables || {}).catch((err) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (err instanceof ClientError) {
                    const [error] = err.response?.errors ?? [];

                    throw new Error(error.message);
                }

                if (err instanceof Error) {
                    throw new Error(err.message);
                }

                throw err;
                });
            }
            }
        