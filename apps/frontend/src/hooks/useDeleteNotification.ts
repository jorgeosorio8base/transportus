
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationNotificationDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationNotificationDeleteArgs
            {
 *   data?: InputMaybe<NotificationDeleteInput>
 *   filter?: InputMaybe<NotificationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  NotificationDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type NotificationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Notification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationNotificationDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteNotification();
               * @param {MutationNotificationDeleteArgs} params
              */

              export function useDeleteNotification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationNotificationDeleteArgs
                >(
                {
                  mutationKey: ['NOTIFICATION_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Notification.deleteNotification({
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
            