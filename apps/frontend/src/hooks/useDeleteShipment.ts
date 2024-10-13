
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationShipmentDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationShipmentDeleteArgs
            {
 *   data?: InputMaybe<ShipmentDeleteInput>
 *   filter?: InputMaybe<ShipmentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ShipmentDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ShipmentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Shipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationShipmentDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteShipment();
               * @param {MutationShipmentDeleteArgs} params
              */

              export function useDeleteShipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationShipmentDeleteArgs
                >(
                {
                  mutationKey: ['SHIPMENT_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Shipment.deleteShipment({
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
            