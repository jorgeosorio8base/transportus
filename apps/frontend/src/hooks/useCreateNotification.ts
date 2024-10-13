
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationNotificationCreateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationNotificationCreateArgs
            {
 *   data: NotificationCreateInput
 * }
 * 
 *  NotificationCreateInput = {
 *   content?: InputMaybe<Scalars['String']['input']>
 *   sent_at?: InputMaybe<Scalars['DateTime']['input']>
 *   userID?: InputMaybe<NotificationUserIdRelationInput>
 * }
 * 
 * 
 * 
 * export type NotificationUserIdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Notification_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Notification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationNotificationCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateNotification();
               * @param {MutationNotificationCreateArgs} params
              */

              export function useCreateNotification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationNotificationCreateArgs
                >(
                {
                  mutationKey: ['NOTIFICATION_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Notification.createNotification({
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
            