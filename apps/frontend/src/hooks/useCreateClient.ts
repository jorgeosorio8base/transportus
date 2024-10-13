
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationClientCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationClientCreateArgs
            {
 *   data: ClientCreateInput
 * }
 * 
 *  ClientCreateInput = {
 *   Shipment: ClientShipmentRelationInput
 *   address?: InputMaybe<Scalars['String']['input']>
 *   company_name?: InputMaybe<Scalars['String']['input']>
 *   email?: InputMaybe<Scalars['String']['input']>
 *   phone_number?: InputMaybe<Scalars['String']['input']>
 *   preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>
 *   primary_contact?: InputMaybe<Scalars['String']['input']>
 *   special_handling_instructions?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type ClientShipmentRelationInput = {
 *   connect?: InputMaybe<ShipmentKeyFilter>
 *   create?: InputMaybe<Client_Id_ShipmentCreateInput>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a Client from the server.
               * @returns {UseMutationResult<boolean, Error, MutationClientCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateClient();
               * @param {MutationClientCreateArgs} params
              */

              export function useCreateClient() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationClientCreateArgs
                >(
                {
                  mutationKey: ['CLIENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Client.createClient({
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
            