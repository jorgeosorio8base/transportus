
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDriverDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationDriverDeleteArgs
            {
 *   data?: InputMaybe<DriverDeleteInput>
 *   filter?: InputMaybe<DriverKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  DriverDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type DriverKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   license_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Driver from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDriverDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteDriver();
               * @param {MutationDriverDeleteArgs} params
              */

              export function useDeleteDriver() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDriverDeleteArgs
                >(
                {
                  mutationKey: ['DRIVER_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Driver.deleteDriver({
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
            