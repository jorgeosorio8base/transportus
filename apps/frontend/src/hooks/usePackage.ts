
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryPackageArgs,
            PackageEntity,
        } from '@transportus/core';

            /*
              Type: IPackageEntity

              
          

           IPackageEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
TrackingNumber?: string;
Status?: string;
Location?: string;


          }
      
            */

          
              /*
            Type: QueryPackageArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  tracking_number?: InputMaybe<Scalars['String']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Package from the server.
         *
         * @returns {UseQueryResult<PackageEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = usePackage({id: '1'});
         * 
         * @param {QueryPackageArgs} variables - The query variables.
        */

        export function usePackage(
              variables: QueryPackageArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<PackageEntity | null>(
          {
              queryKey: ['PACKAGE_QUERY'],
              queryFn: async () => UseCases.Package.getPackage({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    