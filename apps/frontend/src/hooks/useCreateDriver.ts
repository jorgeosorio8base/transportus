
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDriverCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationDriverCreateArgs
            {
 *   data: DriverCreateInput
 * }
 * 
 *  DriverCreateInput = {
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   license_number?: InputMaybe<Scalars['String']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a Driver from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDriverCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateDriver();
               * @param {MutationDriverCreateArgs} params
              */

              export function useCreateDriver() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDriverCreateArgs
                >(
                {
                  mutationKey: ['DRIVER_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Driver.createDriver({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['DRIVER_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            