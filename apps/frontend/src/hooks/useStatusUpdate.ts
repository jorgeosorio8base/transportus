
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryStatusUpdateArgs,
            StatusUpdateEntity,
        } from '@transportus/core';

            /*
              Type: IStatusUpdateEntity

              
          

           IStatusUpdateEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Status?: string;
Timestamp?: string;

          }
      
            */

          
              /*
            Type: QueryStatusUpdateArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch StatusUpdate from the server.
         *
         * @returns {UseQueryResult<StatusUpdateEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useStatusUpdate({id: '1'});
         * 
         * @param {QueryStatusUpdateArgs} variables - The query variables.
        */

        export function useStatusUpdate(
              variables: QueryStatusUpdateArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<StatusUpdateEntity | null>(
          {
              queryKey: ['STATUSUPDATE_QUERY'],
              queryFn: async () => UseCases.StatusUpdate.getStatusUpdate({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    