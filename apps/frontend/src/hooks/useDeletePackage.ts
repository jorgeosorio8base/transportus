
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPackageDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationPackageDeleteArgs
            {
 *   data?: InputMaybe<PackageDeleteInput>
 *   filter?: InputMaybe<PackageKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  PackageDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type PackageKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   tracking_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Package from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPackageDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeletePackage();
               * @param {MutationPackageDeleteArgs} params
              */

              export function useDeletePackage() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPackageDeleteArgs
                >(
                {
                  mutationKey: ['PACKAGE_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Package.deletePackage({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['PACKAGE_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            