
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationStatusUpdateDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationStatusUpdateDeleteArgs
            {
 *   data?: InputMaybe<StatusUpdateDeleteInput>
 *   filter?: InputMaybe<StatusUpdateKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  StatusUpdateDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type StatusUpdateKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a StatusUpdate from the server.
               * @returns {UseMutationResult<boolean, Error, MutationStatusUpdateDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteStatusUpdate();
               * @param {MutationStatusUpdateDeleteArgs} params
              */

              export function useDeleteStatusUpdate() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationStatusUpdateDeleteArgs
                >(
                {
                  mutationKey: ['STATUSUPDATE_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.StatusUpdate.deleteStatusUpdate({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['STATUSUPDATE_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            