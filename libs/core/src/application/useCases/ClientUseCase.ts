
        import {IClientUseCase} from './interfaces';
        import {ClientEntity} from '../../domain';
        import {
            QueryClientArgs,
            QueryClientsListArgs,
            MutationClientCreateArgs, MutationClientDeleteArgs, MutationClientUpdateArgs,
            
        } from '../../definitions/schema';
        import {IClientRepository, ClientRepository, IRepositoryParams} from '../../infrastructure';

        export class ClientUseCase implements IClientUseCase {
              private readonly repository: IClientRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new ClientRepository();
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

            async getClient(params: IRepositoryParams<QueryClientArgs>): Promise<ClientEntity | null> {
                        try {
                            return this.repository.getClient(params)
                            .then((result) => new ClientEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getClient'));
                        } catch (error) {
                            this.errorCatcher(error, 'getClient');
                        }
            }

            async getClientList(params: IRepositoryParams<QueryClientsListArgs>): Promise<{
                count: number;
                items: Array<ClientEntity>;
                }> {
                try {
                    return this.repository.getClientList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new ClientEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getClientList'));
                } catch (error) {
                    this.errorCatcher(error, 'getClientList');
                }
            }

            async createClient(params: IRepositoryParams<MutationClientCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createClient(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createClient'));
                        } catch (error) {
                            this.errorCatcher(error, 'createClient');
                        }
                    }

                    async deleteClient(params: IRepositoryParams<MutationClientDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteClient(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteClient'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteClient');
                        }
                    }
                  
async updateClient(params: IRepositoryParams<MutationClientUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateClient(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateClient'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateClient');
                        }
                    }

              
            }
    