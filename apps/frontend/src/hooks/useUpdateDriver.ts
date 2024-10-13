
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDriverUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationDriverUpdateArgs
            {
 *   data: DriverUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<DriverKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  DriverUpdateInput = {
 *   availability_status?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   license_number?: InputMaybe<Scalars['String']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type 
 * 
 * 
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
               * Hook to update a Driver from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDriverUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateDriver();
               * @param {MutationDriverUpdateArgs} params
              */

              export function useUpdateDriver() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDriverUpdateArgs
                >(
                {
                  mutationKey: ['DRIVER_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Driver.updateDriver({
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
            