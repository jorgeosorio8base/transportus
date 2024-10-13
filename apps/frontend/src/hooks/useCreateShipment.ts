
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationShipmentCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationShipmentCreateArgs
            {
 *   data: ShipmentCreateInput
 * }
 * 
 *  ShipmentCreateInput = {
 *   Package?: InputMaybe<ShipmentPackageRelationInput>
 *   client_id?: InputMaybe<ShipmentClient_IdRelationInput>
 *   destination?: InputMaybe<Scalars['String']['input']>
 *   origin?: InputMaybe<Scalars['String']['input']>
 *   priority?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ShipmentPackageRelationInput = {
 *   connect?: InputMaybe<Array<PackageKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageCreateInput>>>
 * }
 * 
 * export type ShipmentClient_IdRelationInput = {
 *   connect?: InputMaybe<ClientKeyFilter>
 *   create?: InputMaybe<Shipment_ClientCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Shipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationShipmentCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateShipment();
               * @param {MutationShipmentCreateArgs} params
              */

              export function useCreateShipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationShipmentCreateArgs
                >(
                {
                  mutationKey: ['SHIPMENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Shipment.createShipment({
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
            