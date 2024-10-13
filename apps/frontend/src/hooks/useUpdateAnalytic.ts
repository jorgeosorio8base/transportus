
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAnalyticUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationAnalyticUpdateArgs
            {
 *   data: AnalyticUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<AnalyticKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  AnalyticUpdateInput = {
 *   data?: InputMaybe<Scalars['JSON']['input']>
 *   generated_at?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   report_name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type 
 * 
 * 
 * 
 * export type AnalyticKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Analytic from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAnalyticUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateAnalytic();
               * @param {MutationAnalyticUpdateArgs} params
              */

              export function useUpdateAnalytic() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAnalyticUpdateArgs
                >(
                {
                  mutationKey: ['ANALYTIC_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Analytic.updateAnalytic({
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
            