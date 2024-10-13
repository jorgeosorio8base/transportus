
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationStatusUpdateCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationStatusUpdateCreateArgs
            {
 *   data: StatusUpdateCreateInput
 * }
 * 
 *  StatusUpdateCreateInput = {
 *   package_id?: InputMaybe<StatusUpdatePackage_IdRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timestamp?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type StatusUpdatePackage_IdRelationInput = {
 *   connect?: InputMaybe<PackageKeyFilter>
 *   create?: InputMaybe<StatusUpdate_PackageCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a StatusUpdate from the server.
               * @returns {UseMutationResult<boolean, Error, MutationStatusUpdateCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateStatusUpdate();
               * @param {MutationStatusUpdateCreateArgs} params
              */

              export function useCreateStatusUpdate() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationStatusUpdateCreateArgs
                >(
                {
                  mutationKey: ['STATUSUPDATE_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.StatusUpdate.createStatusUpdate({
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
            