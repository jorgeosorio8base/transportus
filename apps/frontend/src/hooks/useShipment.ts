
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryShipmentArgs,
            ShipmentEntity,
        } from '@transportus/core';

            /*
              Type: IShipmentEntity

              
          

           IShipmentEntity {
              Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Origin?: string;
Destination?: string;
Priority?: string;

          }
      
            */

          
              /*
            Type: QueryShipmentArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Shipment from the server.
         *
         * @returns {UseQueryResult<ShipmentEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useShipment({id: '1'});
         * 
         * @param {QueryShipmentArgs} variables - The query variables.
        */

        export function useShipment(
              variables: QueryShipmentArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<ShipmentEntity | null>(
          {
              queryKey: ['SHIPMENT_QUERY'],
              queryFn: async () => UseCases.Shipment.getShipment({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    