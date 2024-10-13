
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationShipmentUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationShipmentUpdateArgs
            {
 *   data: ShipmentUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ShipmentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ShipmentUpdateInput = {
 *   Package?: InputMaybe<ShipmentPackageUpdateRelationInput>
 *   client_id?: InputMaybe<ShipmentClient_IdUpdateRelationInput>
 *   destination?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   origin?: InputMaybe<Scalars['String']['input']>
 *   priority?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ShipmentPackageUpdateRelationInput = {
 *   connect?: InputMaybe<Array<PackageKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageCreateInput>>>
 *   disconnect?: InputMaybe<Array<PackageKeyFilter>>
 *   reconnect?: InputMaybe<Array<PackageKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageUpdateInput>>>
 * }
 * 
 * export type ShipmentClient_IdUpdateRelationInput = {
 *   connect?: InputMaybe<ClientKeyFilter>
 *   create?: InputMaybe<Shipment_ClientCreateInput>
 *   disconnect?: InputMaybe<ClientKeyFilter>
 *   reconnect?: InputMaybe<ClientKeyFilter>
 *   update?: InputMaybe<Shipment_ClientUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ShipmentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Shipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationShipmentUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateShipment();
               * @param {MutationShipmentUpdateArgs} params
              */

              export function useUpdateShipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationShipmentUpdateArgs
                >(
                {
                  mutationKey: ['SHIPMENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Shipment.updateShipment({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['SHIPMENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            