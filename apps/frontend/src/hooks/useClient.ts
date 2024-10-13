
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryClientArgs,
            ClientEntity,
        } from '@transportus/core';

            /*
              Type: IClientEntity

              
          

           IClientEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
CompanyName?: string;
PrimaryContact?: string;
Address?: string;
PhoneNumber?: string;
Email?: string;
PreferredShippingMethods?: string;
SpecialHandlingInstructions?: string;

          }
      
            */

          
              /*
            Type: QueryClientArgs
            {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Client from the server.
         *
         * @returns {UseQueryResult<ClientEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useClient({id: '1'});
         * 
         * @param {QueryClientArgs} variables - The query variables.
        */

        export function useClient(
              variables: QueryClientArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<ClientEntity | null>(
          {
              queryKey: ['CLIENT_QUERY'],
              queryFn: async () => UseCases.Client.getClient({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    