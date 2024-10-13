
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationUserUpdateArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationUserUpdateArgs
            {
 *   data: UserUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<UserKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  UserUpdateInput = {
 *   avatar?: InputMaybe<UsersAvatarUpdateRelationInput>
 *   email?: InputMaybe<Scalars['String']['input']>
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   notification?: InputMaybe<UsersNotificationUpdateRelationInput>
 *   roles?: InputMaybe<UsersRolesUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type UsersAvatarUpdateRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 *   disconnect?: InputMaybe<FileKeyFilter>
 *   reconnect?: InputMaybe<FileKeyFilter>
 *   update?: InputMaybe<Users_Avatar_FileUpdateInput>
 * }
 * 
 * export type UsersNotificationUpdateRelationInput = {
 *   connect?: InputMaybe<NotificationKeyFilter>
 *   create?: InputMaybe<UserId_NotificationCreateInput>
 *   disconnect?: InputMaybe<NotificationKeyFilter>
 *   reconnect?: InputMaybe<NotificationKeyFilter>
 *   update?: InputMaybe<UserId_NotificationUpdateInput>
 * }
 * 
 * export type UsersRolesUpdateRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 *   disconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   reconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type UserKeyFilter = {
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a User from the server.
               * @returns {UseMutationResult<boolean, Error, MutationUserUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateUser();
               * @param {MutationUserUpdateArgs} params
              */

              export function useUpdateUser() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationUserUpdateArgs
                >(
                {
                  mutationKey: ['USER_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.User.updateUser({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['USER_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            