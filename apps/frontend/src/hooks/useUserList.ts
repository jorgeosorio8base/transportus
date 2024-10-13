
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryUsersListArgs,          
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

           /** 
             * Type: QueryUsersListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<UserFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<UserGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<UserSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  UserFilter = {
 *   AND?: InputMaybe<Array<UserFilter>>
 *   OR?: InputMaybe<Array<UserFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   avatar?: InputMaybe<FileFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   createdBy?: InputMaybe<UserFilter>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   email?: InputMaybe<StringPredicate>
 *   firstName?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   is8base?: InputMaybe<BoolPredicate>
 *   is_self?: InputMaybe<Scalars['Boolean']['input']>
 *   lastName?: InputMaybe<StringPredicate>
 *   not_self?: InputMaybe<Scalars['Boolean']['input']>
 *   notification?: InputMaybe<NotificationFilter>
 *   origin?: InputMaybe<StringPredicate>
 *   roles?: InputMaybe<RoleRelationFilter>
 *   status?: InputMaybe<StringPredicate>
 *   timezone?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type UserFilter = {
 *   AND?: InputMaybe<Array<UserFilter>>
 *   OR?: InputMaybe<Array<UserFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   avatar?: InputMaybe<FileFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   createdBy?: InputMaybe<UserFilter>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   email?: InputMaybe<StringPredicate>
 *   firstName?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   is8base?: InputMaybe<BoolPredicate>
 *   is_self?: InputMaybe<Scalars['Boolean']['input']>
 *   lastName?: InputMaybe<StringPredicate>
 *   not_self?: InputMaybe<Scalars['Boolean']['input']>
 *   notification?: InputMaybe<NotificationFilter>
 *   origin?: InputMaybe<StringPredicate>
 *   roles?: InputMaybe<RoleRelationFilter>
 *   status?: InputMaybe<StringPredicate>
 *   timezone?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type FileFilter = {
 *   AND?: InputMaybe<Array<FileFilter>>
 *   OR?: InputMaybe<Array<FileFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   createdBy?: InputMaybe<UserFilter>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   downloadUrl?: InputMaybe<StringPredicate>
 *   fileId?: InputMaybe<StringPredicate>
 *   filename?: InputMaybe<StringPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   provider?: InputMaybe<StringPredicate>
 *   public?: InputMaybe<BoolPredicate>
 *   settings_landingPageImage?: InputMaybe<SettingRelationFilter>
 *   settings_menuBarLogo?: InputMaybe<SettingRelationFilter>
 *   shareUrl?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 *   uploadUrl?: InputMaybe<StringPredicate>
 *   uploaded?: InputMaybe<BoolPredicate>
 *   users_avatar?: InputMaybe<UserRelationFilter>
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
 * export type BoolPredicate = {
 *   equals?: InputMaybe<Scalars['Boolean']['input']>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_equals?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * export type NotificationFilter = {
 *   AND?: InputMaybe<Array<NotificationFilter>>
 *   OR?: InputMaybe<Array<NotificationFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   content?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   sent_at?: InputMaybe<DateTimePredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 *   userID?: InputMaybe<UserFilter>
 * }
 * 
 * export type RoleRelationFilter = {
 *   every?: InputMaybe<RoleFilter>
 *   none?: InputMaybe<RoleFilter>
 *   some?: InputMaybe<RoleFilter>
 * }
 * 
 * export type UserGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: UserGroupByQuery
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
 * export type UserGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   avatar?: InputMaybe<FileGroupByQuery>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   createdBy?: InputMaybe<UserGroupByQuery>
 *   email?: InputMaybe<Array<GroupByField>>
 *   firstName?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   is8base?: InputMaybe<Array<GroupByField>>
 *   lastName?: InputMaybe<Array<GroupByField>>
 *   notification?: InputMaybe<NotificationGroupByQuery>
 *   origin?: InputMaybe<Array<GroupByField>>
 *   roles?: InputMaybe<RoleGroupByQuery>
 *   status?: InputMaybe<Array<GroupByField>>
 *   timezone?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type UserSort = {
 *   avatar?: InputMaybe<FileSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   createdBy?: InputMaybe<UserSort>
 *   deletedAt?: InputMaybe<SortOrder>
 *   email?: InputMaybe<SortOrder>
 *   firstName?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   is8base?: InputMaybe<SortOrder>
 *   lastName?: InputMaybe<SortOrder>
 *   notification?: InputMaybe<NotificationSort>
 *   origin?: InputMaybe<SortOrder>
 *   status?: InputMaybe<SortOrder>
 *   timezone?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
 * export type FileSort = {
 *   createdAt?: InputMaybe<SortOrder>
 *   createdBy?: InputMaybe<UserSort>
 *   deletedAt?: InputMaybe<SortOrder>
 *   downloadUrl?: InputMaybe<SortOrder>
 *   fileId?: InputMaybe<SortOrder>
 *   filename?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   provider?: InputMaybe<SortOrder>
 *   public?: InputMaybe<SortOrder>
 *   shareUrl?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 *   uploadUrl?: InputMaybe<SortOrder>
 *   uploaded?: InputMaybe<SortOrder>
 * }
 * 
 * export type UserSort = {
 *   avatar?: InputMaybe<FileSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   createdBy?: InputMaybe<UserSort>
 *   deletedAt?: InputMaybe<SortOrder>
 *   email?: InputMaybe<SortOrder>
 *   firstName?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   is8base?: InputMaybe<SortOrder>
 *   lastName?: InputMaybe<SortOrder>
 *   notification?: InputMaybe<NotificationSort>
 *   origin?: InputMaybe<SortOrder>
 *   status?: InputMaybe<SortOrder>
 *   timezone?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type NotificationSort = {
 *   content?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   sent_at?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 *   userID?: InputMaybe<UserSort>
 * }
 * 
             */
            

          /**
           * Hook to fetch list of User from the server.
           * 
           * @returns {UseQueryResult<{items: UserEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useUserList({first: 10});
           * 
           * @param {QueryUsersListArgs} variables - The query variables.
          */

          export function useUserList(
              variables?: QueryUsersListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: UserEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['USER_LIST_QUERY'],
              queryFn: async () => UseCases.User.getUserList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    