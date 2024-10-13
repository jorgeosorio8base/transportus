
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryUserArgs,
            UserEntity,
        } from '@transportus/core';

            /*
              Type: IUserEntity

              
          import { IFileEntity } from './iFileEntity';

           IUserEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Email?: string;
Status?: any;
Origin?: any;
Is8Base?: any;
FirstName?: string;
LastName?: string;
Timezone?: string;
Avatar?: IFileEntity;


          }
      
            */

          
              /*
            Type: QueryUserArgs
            {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch User from the server.
         *
         * @returns {UseQueryResult<UserEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useUser({id: '1'});
         * 
         * @param {QueryUserArgs} variables - The query variables.
        */

        export function useUser(
              variables: QueryUserArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<UserEntity | null>(
          {
              queryKey: ['USER_QUERY'],
              queryFn: async () => UseCases.User.getUser({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    