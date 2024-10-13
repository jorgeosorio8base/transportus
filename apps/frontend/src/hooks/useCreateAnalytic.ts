
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAnalyticCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationAnalyticCreateArgs
            {
 *   data: AnalyticCreateInput
 * }
 * 
 *  AnalyticCreateInput = {
 *   data?: InputMaybe<Scalars['JSON']['input']>
 *   generated_at?: InputMaybe<Scalars['DateTime']['input']>
 *   report_name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a Analytic from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAnalyticCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateAnalytic();
               * @param {MutationAnalyticCreateArgs} params
              */

              export function useCreateAnalytic() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAnalyticCreateArgs
                >(
                {
                  mutationKey: ['ANALYTIC_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Analytic.createAnalytic({
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
            