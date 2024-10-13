
        import {
            Client,
            QueryClientArgs,
            QueryClientsListArgs,
            ClientListResponse,
            MutationClientCreateArgs, MutationClientDeleteArgs, MutationClientUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IClientRepository {
            getClient(params: IRepositoryParams<QueryClientArgs>): Promise<Client | null>;
            getClientList(params: IRepositoryParams<QueryClientsListArgs>): Promise<ClientListResponse>;
            createClient(params: IRepositoryParams<MutationClientCreateArgs>): Promise<Client | null>;
deleteClient(params: IRepositoryParams<MutationClientDeleteArgs>): Promise<SuccessResponse | null>;
updateClient(params: IRepositoryParams<MutationClientUpdateArgs>): Promise<Client | null>;
            
          }
    