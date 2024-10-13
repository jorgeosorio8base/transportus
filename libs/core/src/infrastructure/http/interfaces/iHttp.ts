
            import { Method } from 'axios';
            /* eslint-disable @typescript-eslint/no-explicit-any */
            import { RequestDocument } from 'graphql-request';

            export interface IRequestOption {
            readonly method: Method;
            readonly url: string;
            readonly headers?: any;
            readonly params?: { [key: string]: any };
            readonly body?: { [key: string]: any };
            readonly responseType?:
                | 'json'
                | 'text'
                | 'blob'
                | 'arraybuffer'
                | 'document'
                | 'stream';

            /**
             * The timeout in milliseconds.
             */
            timeout?: number;
            }

            export interface IRequestGraphQL<T2 = any> {
            url: string;
            requestDocument: RequestDocument;
            variables?: T2;
            token?: string;
            }

            export interface IHttp {
            requestGraphQL<T, T2 = any>(params: IRequestGraphQL<T2>): Promise<T>;
            request<T>(requestOption: IRequestOption): Promise<T>;
            }
        