
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationClientUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationClientUpdateArgs
            {
 *   data: ClientUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ClientKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ClientUpdateInput = {
 *   Shipment?: InputMaybe<ClientShipmentUpdateRelationInput>
 *   address?: InputMaybe<Scalars['String']['input']>
 *   company_name?: InputMaybe<Scalars['String']['input']>
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   phone_number?: InputMaybe<Scalars['String']['input']>
 *   preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>
 *   primary_contact?: InputMaybe<Scalars['String']['input']>
 *   special_handling_instructions?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ClientShipmentUpdateRelationInput = {
 *   connect?: InputMaybe<ShipmentKeyFilter>
 *   create?: InputMaybe<Client_Id_ShipmentCreateInput>
 *   disconnect?: InputMaybe<ShipmentKeyFilter>
 *   reconnect?: InputMaybe<ShipmentKeyFilter>
 *   update?: InputMaybe<Client_Id_ShipmentUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ClientKeyFilter = {
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Client from the server.
               * @returns {UseMutationResult<boolean, Error, MutationClientUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateClient();
               * @param {MutationClientUpdateArgs} params
              */

              export function useUpdateClient() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationClientUpdateArgs
                >(
                {
                  mutationKey: ['CLIENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Client.updateClient({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['CLIENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            