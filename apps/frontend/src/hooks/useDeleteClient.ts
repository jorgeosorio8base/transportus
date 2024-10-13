
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationClientDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationClientDeleteArgs
            {
 *   data?: InputMaybe<ClientDeleteInput>
 *   filter?: InputMaybe<ClientKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ClientDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ClientKeyFilter = {
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Client from the server.
               * @returns {UseMutationResult<boolean, Error, MutationClientDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteClient();
               * @param {MutationClientDeleteArgs} params
              */

              export function useDeleteClient() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationClientDeleteArgs
                >(
                {
                  mutationKey: ['CLIENT_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Client.deleteClient({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['CLIENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            