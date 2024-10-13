
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationNotificationUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationNotificationUpdateArgs
            {
 *   data: NotificationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<NotificationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  NotificationUpdateInput = {
 *   content?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   sent_at?: InputMaybe<Scalars['DateTime']['input']>
 *   userID?: InputMaybe<NotificationUserIdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type NotificationUserIdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Notification_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<Notification_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type NotificationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Notification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationNotificationUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateNotification();
               * @param {MutationNotificationUpdateArgs} params
              */

              export function useUpdateNotification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationNotificationUpdateArgs
                >(
                {
                  mutationKey: ['NOTIFICATION_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Notification.updateNotification({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['NOTIFICATION_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            