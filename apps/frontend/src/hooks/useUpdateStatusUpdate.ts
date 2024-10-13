
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationStatusUpdateUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationStatusUpdateUpdateArgs
            {
 *   data: StatusUpdateUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<StatusUpdateKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  StatusUpdateUpdateInput = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   package_id?: InputMaybe<StatusUpdatePackage_IdUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timestamp?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type StatusUpdatePackage_IdUpdateRelationInput = {
 *   connect?: InputMaybe<PackageKeyFilter>
 *   create?: InputMaybe<StatusUpdate_PackageCreateInput>
 *   disconnect?: InputMaybe<PackageKeyFilter>
 *   reconnect?: InputMaybe<PackageKeyFilter>
 *   update?: InputMaybe<StatusUpdate_PackageUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type StatusUpdateKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a StatusUpdate from the server.
               * @returns {UseMutationResult<boolean, Error, MutationStatusUpdateUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateStatusUpdate();
               * @param {MutationStatusUpdateUpdateArgs} params
              */

              export function useUpdateStatusUpdate() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationStatusUpdateUpdateArgs
                >(
                {
                  mutationKey: ['STATUSUPDATE_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.StatusUpdate.updateStatusUpdate({
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
            