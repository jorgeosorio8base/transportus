
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryShipmentsListArgs,          
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

           /** 
             * Type: QueryShipmentsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<ShipmentFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<ShipmentGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<ShipmentOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<ShipmentSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ShipmentFilter = {
 *   AND?: InputMaybe<Array<ShipmentFilter>>
 *   OR?: InputMaybe<Array<ShipmentFilter>>
 *   Package?: InputMaybe<PackageRelationFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   client_id?: InputMaybe<ClientFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   destination?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   origin?: InputMaybe<StringPredicate>
 *   priority?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type ShipmentFilter = {
 *   AND?: InputMaybe<Array<ShipmentFilter>>
 *   OR?: InputMaybe<Array<ShipmentFilter>>
 *   Package?: InputMaybe<PackageRelationFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   client_id?: InputMaybe<ClientFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   destination?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   origin?: InputMaybe<StringPredicate>
 *   priority?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type PackageRelationFilter = {
 *   every?: InputMaybe<PackageFilter>
 *   none?: InputMaybe<PackageFilter>
 *   some?: InputMaybe<PackageFilter>
 * }
 * 
 * export type ClientFilter = {
 *   AND?: InputMaybe<Array<ClientFilter>>
 *   OR?: InputMaybe<Array<ClientFilter>>
 *   Shipment?: InputMaybe<ShipmentFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   address?: InputMaybe<StringPredicate>
 *   company_name?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   email?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   phone_number?: InputMaybe<StringPredicate>
 *   preferred_shipping_methods?: InputMaybe<StringPredicate>
 *   primary_contact?: InputMaybe<StringPredicate>
 *   special_handling_instructions?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type DateTimePredicate = {
 *   equals?: InputMaybe<Scalars['DateTime']['input']>
 *   gt?: InputMaybe<Scalars['DateTime']['input']>
 *   gte?: InputMaybe<Scalars['DateTime']['input']>
 *   in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['DateTime']['input']>
 *   lte?: InputMaybe<Scalars['DateTime']['input']>
 *   not_equals?: InputMaybe<Scalars['DateTime']['input']>
 *   not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   relative?: InputMaybe<DateRelativePredicates>
 * }
 * 
 * export type IntPredicate = {
 *   equals?: InputMaybe<Scalars['Int']['input']>
 *   gt?: InputMaybe<Scalars['Int']['input']>
 *   gte?: InputMaybe<Scalars['Int']['input']>
 *   in?: InputMaybe<Array<Scalars['Int']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['Int']['input']>
 *   lte?: InputMaybe<Scalars['Int']['input']>
 *   not_equals?: InputMaybe<Scalars['Int']['input']>
 *   not_in?: InputMaybe<Array<Scalars['Int']['input']>>
 * }
 * 
 * export type StringPredicate = {
 *   contains?: InputMaybe<Scalars['String']['input']>
 *   ends_with?: InputMaybe<Scalars['String']['input']>
 *   equals?: InputMaybe<Scalars['String']['input']>
 *   in?: InputMaybe<Array<Scalars['String']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_contains?: InputMaybe<Scalars['String']['input']>
 *   not_ends_with?: InputMaybe<Scalars['String']['input']>
 *   not_equals?: InputMaybe<Scalars['String']['input']>
 *   not_in?: InputMaybe<Array<Scalars['String']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['String']['input']>
 *   starts_with?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type IdPredicate = {
 *   contains?: InputMaybe<Scalars['ID']['input']>
 *   ends_with?: InputMaybe<Scalars['ID']['input']>
 *   equals?: InputMaybe<Scalars['ID']['input']>
 *   gt?: InputMaybe<Scalars['ID']['input']>
 *   gte?: InputMaybe<Scalars['ID']['input']>
 *   in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['ID']['input']>
 *   lte?: InputMaybe<Scalars['ID']['input']>
 *   not_contains?: InputMaybe<Scalars['ID']['input']>
 *   not_ends_with?: InputMaybe<Scalars['ID']['input']>
 *   not_equals?: InputMaybe<Scalars['ID']['input']>
 *   not_in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['ID']['input']>
 *   starts_with?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type ShipmentGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: ShipmentGroupByQuery
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<GroupBySort>>
 * }
 * 
 * 
 * 
 * export type Having = {
 *   AND?: InputMaybe<Array<Having>>
 *   OR?: InputMaybe<Array<Having>>
 *   alias?: InputMaybe<Scalars['String']['input']>
 *   bigint?: InputMaybe<BigIntPredicateHaving>
 *   bool?: InputMaybe<BoolPredicateHaving>
 *   date?: InputMaybe<DatePredicateHaving>
 *   datetime?: InputMaybe<DateTimePredicateHaving>
 *   float?: InputMaybe<FloatPredicateHaving>
 *   id?: InputMaybe<IdPredicateHaving>
 *   int?: InputMaybe<IntPredicateHaving>
 *   string?: InputMaybe<StringPredicateHaving>
 * }
 * 
 * export type ShipmentGroupByQuery = {
 *   Package?: InputMaybe<PackageGroupByQuery>
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   client_id?: InputMaybe<ClientGroupByQuery>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   destination?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   origin?: InputMaybe<Array<GroupByField>>
 *   priority?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type ShipmentSort = {
 *   client_id?: InputMaybe<ClientSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   destination?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   origin?: InputMaybe<SortOrder>
 *   priority?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
 * export type ClientSort = {
 *   Shipment?: InputMaybe<ShipmentSort>
 *   address?: InputMaybe<SortOrder>
 *   company_name?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   email?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   phone_number?: InputMaybe<SortOrder>
 *   preferred_shipping_methods?: InputMaybe<SortOrder>
 *   primary_contact?: InputMaybe<SortOrder>
 *   special_handling_instructions?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
             */
            

          /**
           * Hook to fetch list of Shipment from the server.
           * 
           * @returns {UseQueryResult<{items: ShipmentEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useShipmentList({first: 10});
           * 
           * @param {QueryShipmentsListArgs} variables - The query variables.
          */

          export function useShipmentList(
              variables?: QueryShipmentsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: ShipmentEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['SHIPMENT_LIST_QUERY'],
              queryFn: async () => UseCases.Shipment.getShipmentList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    