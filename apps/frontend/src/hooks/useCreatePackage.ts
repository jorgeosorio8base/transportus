
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPackageCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationPackageCreateArgs
            {
 *   data: PackageCreateInput
 * }
 * 
 *  PackageCreateInput = {
 *   StatusUpdate?: InputMaybe<PackageStatusUpdateRelationInput>
 *   location?: InputMaybe<Scalars['String']['input']>
 *   shipment_id?: InputMaybe<PackageShipment_IdRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   tracking_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type PackageStatusUpdateRelationInput = {
 *   connect?: InputMaybe<Array<StatusUpdateKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateCreateInput>>>
 * }
 * 
 * export type PackageShipment_IdRelationInput = {
 *   connect?: InputMaybe<ShipmentKeyFilter>
 *   create?: InputMaybe<Package_ShipmentCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Package from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPackageCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreatePackage();
               * @param {MutationPackageCreateArgs} params
              */

              export function useCreatePackage() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPackageCreateArgs
                >(
                {
                  mutationKey: ['PACKAGE_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Package.createPackage({
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
            