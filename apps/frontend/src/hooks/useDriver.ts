
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryDriverArgs,
            DriverEntity,
        } from '@transportus/core';

            /*
              Type: IDriverEntity

              
          

           IDriverEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Name?: string;
LicenseNumber?: string;
AvailabilityStatus?: string;
          }
      
            */

          
              /*
            Type: QueryDriverArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  license_number?: InputMaybe<Scalars['String']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Driver from the server.
         *
         * @returns {UseQueryResult<DriverEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useDriver({id: '1'});
         * 
         * @param {QueryDriverArgs} variables - The query variables.
        */

        export function useDriver(
              variables: QueryDriverArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<DriverEntity | null>(
          {
              queryKey: ['DRIVER_QUERY'],
              queryFn: async () => UseCases.Driver.getDriver({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    