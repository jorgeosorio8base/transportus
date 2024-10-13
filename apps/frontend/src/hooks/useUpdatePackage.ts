
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPackageUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationPackageUpdateArgs
            {
 *   data: PackageUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<PackageKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  PackageUpdateInput = {
 *   StatusUpdate?: InputMaybe<PackageStatusUpdateUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   location?: InputMaybe<Scalars['String']['input']>
 *   shipment_id?: InputMaybe<PackageShipment_IdUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   tracking_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type PackageStatusUpdateUpdateRelationInput = {
 *   connect?: InputMaybe<Array<StatusUpdateKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateCreateInput>>>
 *   disconnect?: InputMaybe<Array<StatusUpdateKeyFilter>>
 *   reconnect?: InputMaybe<Array<StatusUpdateKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateUpdateInput>>>
 * }
 * 
 * export type PackageShipment_IdUpdateRelationInput = {
 *   connect?: InputMaybe<ShipmentKeyFilter>
 *   create?: InputMaybe<Package_ShipmentCreateInput>
 *   disconnect?: InputMaybe<ShipmentKeyFilter>
 *   reconnect?: InputMaybe<ShipmentKeyFilter>
 *   update?: InputMaybe<Package_ShipmentUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
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
               * Hook to update a Package from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPackageUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdatePackage();
               * @param {MutationPackageUpdateArgs} params
              */

              export function useUpdatePackage() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPackageUpdateArgs
                >(
                {
                  mutationKey: ['PACKAGE_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Package.updatePackage({
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
            