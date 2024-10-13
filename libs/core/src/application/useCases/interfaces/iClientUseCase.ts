
        import {
            QueryClientArgs,
            QueryClientsListArgs,
            MutationClientCreateArgs, MutationClientDeleteArgs, MutationClientUpdateArgs,
            
        } from '../../../definitions/schema';
        import {ClientEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IClientUseCase {
            getClient(params: IRepositoryParams<QueryClientArgs>): Promise<ClientEntity | null>;
            getClientList(params: IRepositoryParams<QueryClientsListArgs>): Promise<{
                count: number;
                items: Array<ClientEntity>;
            }>;
            createClient(params: IRepositoryParams<MutationClientCreateArgs>): Promise<boolean>;
deleteClient(params: IRepositoryParams<MutationClientDeleteArgs>): Promise<boolean>;
updateClient(params: IRepositoryParams<MutationClientUpdateArgs>): Promise<boolean>;
              
        }
    