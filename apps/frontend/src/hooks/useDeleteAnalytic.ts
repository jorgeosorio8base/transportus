
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAnalyticDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationAnalyticDeleteArgs
            {
 *   data?: InputMaybe<AnalyticDeleteInput>
 *   filter?: InputMaybe<AnalyticKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  AnalyticDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type AnalyticKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Analytic from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAnalyticDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteAnalytic();
               * @param {MutationAnalyticDeleteArgs} params
              */

              export function useDeleteAnalytic() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAnalyticDeleteArgs
                >(
                {
                  mutationKey: ['ANALYTIC_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Analytic.deleteAnalytic({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['ANALYTIC_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            