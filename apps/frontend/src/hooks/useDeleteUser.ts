
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationUserDeleteArgs
              } from '@transportus/core';


              
                  /** 
             * Type: MutationUserDeleteArgs
            {
 *   data?: InputMaybe<UserDeleteInput>
 *   filter?: InputMaybe<UserKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  UserDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
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
               * Hook to delete a User from the server.
               * @returns {UseMutationResult<boolean, Error, MutationUserDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteUser();
               * @param {MutationUserDeleteArgs} params
              */

              export function useDeleteUser() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationUserDeleteArgs
                >(
                {
                  mutationKey: ['USER_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.User.deleteUser({
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
            