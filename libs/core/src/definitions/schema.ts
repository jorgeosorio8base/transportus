import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export type Analytic = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  generated_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  report_name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Analytics create input */
export type AnalyticCreateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  generated_at?: InputMaybe<Scalars['DateTime']['input']>;
  report_name?: InputMaybe<Scalars['String']['input']>;
};

/** Analytics create many input */
export type AnalyticCreateManyInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  generated_at?: InputMaybe<Scalars['DateTime']['input']>;
  report_name?: InputMaybe<Scalars['String']['input']>;
};

/** Analytics delete input */
export type AnalyticDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** AnalyticFieldsPermissions create input */
export type AnalyticFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  data?: InputMaybe<Scalars['Boolean']['input']>;
  generated_at?: InputMaybe<Scalars['Boolean']['input']>;
  report_name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnalyticFilter = {
  AND?: InputMaybe<Array<AnalyticFilter>>;
  OR?: InputMaybe<Array<AnalyticFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  generated_at?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  report_name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AnalyticGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AnalyticGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AnalyticGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  data?: InputMaybe<Array<GroupByField>>;
  generated_at?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  report_name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AnalyticKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** AnalyticListResponse output */
export type AnalyticListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Analytic>;
};

/** AnalyticManyResponse output */
export type AnalyticManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Analytic>;
};

/** No longer supported. Use `sort` instead. */
export enum AnalyticOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DataAsc = 'data_ASC',
  DataDesc = 'data_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GeneratedAtAsc = 'generated_at_ASC',
  GeneratedAtDesc = 'generated_at_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReportNameAsc = 'report_name_ASC',
  ReportNameDesc = 'report_name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Analytics subscription payload */
export type AnalyticPayload = {
  mutation: MutationType;
  node?: Maybe<Analytic>;
  previousValues?: Maybe<Analytic>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AnalyticSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  generated_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  report_name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Analytics subscription filter */
export type AnalyticSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AnalyticFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Analytics update input */
export type AnalyticUpdateByFilterInput = {
  data?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  report_name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Analytics update input */
export type AnalyticUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  generated_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  report_name?: InputMaybe<Scalars['String']['input']>;
};

export type Analytic_PermissionFilter = {
  AND?: InputMaybe<Array<Analytic_PermissionFilter>>;
  OR?: InputMaybe<Array<Analytic_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  generated_at?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  report_name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiTokenRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  roles?: InputMaybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ApiTokenFilter = {
  AND?: InputMaybe<Array<ApiTokenFilter>>;
  OR?: InputMaybe<Array<ApiTokenFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ApiTokenGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ApiTokenRelationFilter = {
  every?: InputMaybe<ApiTokenFilter>;
  none?: InputMaybe<ApiTokenFilter>;
  some?: InputMaybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ApiTokenFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: InputMaybe<ApiToken_PermissionFilter>;
  none?: InputMaybe<ApiToken_PermissionFilter>;
  some?: InputMaybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  sessionId: Scalars['String']['output'];
};

export type AsyncSessionStatusResponse = {
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Auth response */
export type Auth = {
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationProfile = {
  _description?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  managementDomain?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']['output']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthenticationProfileRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: InputMaybe<FacebookOptionsInput>;
  github?: InputMaybe<GithubOptionsInput>;
  google?: InputMaybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticationProfileFilter = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: InputMaybe<Array<GroupByField>>;
  clientId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  databaseName?: InputMaybe<Array<GroupByField>>;
  domain?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  managementDomain?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  secret?: InputMaybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: InputMaybe<AuthenticationProfileFilter>;
  none?: InputMaybe<AuthenticationProfileFilter>;
  some?: InputMaybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  databaseName?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  managementDomain?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secret?: InputMaybe<SortOrder>;
  selfSignUpEnabled?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationProfileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthenticationSettingFilter = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationRelationInput>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

export type AwsSignInfoResponse = {
  fields: Scalars['JSON']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BigIntPredicateHaving = {
  AND?: InputMaybe<Array<BigIntPredicateHaving>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving>>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not_equals?: InputMaybe<Scalars['BigInt']['input']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<BillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<WorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum BillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type BillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: BillingDetailsOrigin;
};

export type BillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  project?: Maybe<BillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type BillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricUsageItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  overage?: Maybe<BillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type BillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export type BoolPredicate = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolPredicateHaving = {
  AND?: InputMaybe<Array<BoolPredicateHaving>>;
  OR?: InputMaybe<Array<BoolPredicateHaving>>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type Client = {
  Shipment?: Maybe<Shipment>;
  _description?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  preferred_shipping_methods?: Maybe<Scalars['String']['output']>;
  primary_contact?: Maybe<Scalars['String']['output']>;
  special_handling_instructions?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Client create input */
export type ClientCreateInput = {
  Shipment: ClientShipmentRelationInput;
  address?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>;
  primary_contact?: InputMaybe<Scalars['String']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['String']['input']>;
};

/** Client create many input */
export type ClientCreateManyInput = {
  Shipment: ClientShipmentManyRelationInput;
  address?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>;
  primary_contact?: InputMaybe<Scalars['String']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['String']['input']>;
};

/** Client delete input */
export type ClientDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ClientFieldsPermissions create input */
export type ClientFieldsPermissions = {
  address?: InputMaybe<Scalars['Boolean']['input']>;
  company_name?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  phone_number?: InputMaybe<Scalars['Boolean']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['Boolean']['input']>;
  primary_contact?: InputMaybe<Scalars['Boolean']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClientFilter = {
  AND?: InputMaybe<Array<ClientFilter>>;
  OR?: InputMaybe<Array<ClientFilter>>;
  Shipment?: InputMaybe<ShipmentFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<StringPredicate>;
  company_name?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  phone_number?: InputMaybe<StringPredicate>;
  preferred_shipping_methods?: InputMaybe<StringPredicate>;
  primary_contact?: InputMaybe<StringPredicate>;
  special_handling_instructions?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ClientGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ClientGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ClientGroupByQuery = {
  Shipment?: InputMaybe<ShipmentGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  address?: InputMaybe<Array<GroupByField>>;
  company_name?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  email?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  phone_number?: InputMaybe<Array<GroupByField>>;
  preferred_shipping_methods?: InputMaybe<Array<GroupByField>>;
  primary_contact?: InputMaybe<Array<GroupByField>>;
  special_handling_instructions?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ClientKeyFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ClientListResponse output */
export type ClientListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Client>;
};

/** ClientManyResponse output */
export type ClientManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Client>;
};

/** No longer supported. Use `sort` instead. */
export enum ClientOrderBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CompanyNameAsc = 'company_name_ASC',
  CompanyNameDesc = 'company_name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phone_number_ASC',
  PhoneNumberDesc = 'phone_number_DESC',
  PreferredShippingMethodsAsc = 'preferred_shipping_methods_ASC',
  PreferredShippingMethodsDesc = 'preferred_shipping_methods_DESC',
  PrimaryContactAsc = 'primary_contact_ASC',
  PrimaryContactDesc = 'primary_contact_DESC',
  SpecialHandlingInstructionsAsc = 'special_handling_instructions_ASC',
  SpecialHandlingInstructionsDesc = 'special_handling_instructions_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Client subscription payload */
export type ClientPayload = {
  mutation: MutationType;
  node?: Maybe<Client>;
  previousValues?: Maybe<Client>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Client relation input */
export type ClientShipmentManyRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
};

/** Client relation input */
export type ClientShipmentRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
  create?: InputMaybe<Client_Id_ShipmentCreateInput>;
};

/** Client relation input */
export type ClientShipmentUpdateRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
  create?: InputMaybe<Client_Id_ShipmentCreateInput>;
  disconnect?: InputMaybe<ShipmentKeyFilter>;
  reconnect?: InputMaybe<ShipmentKeyFilter>;
  update?: InputMaybe<Client_Id_ShipmentUpdateInput>;
};

export type ClientSort = {
  Shipment?: InputMaybe<ShipmentSort>;
  address?: InputMaybe<SortOrder>;
  company_name?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  phone_number?: InputMaybe<SortOrder>;
  preferred_shipping_methods?: InputMaybe<SortOrder>;
  primary_contact?: InputMaybe<SortOrder>;
  special_handling_instructions?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Client subscription filter */
export type ClientSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ClientFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Client update input */
export type ClientUpdateByFilterInput = {
  address?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  company_name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  phone_number?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  preferred_shipping_methods?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  primary_contact?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  special_handling_instructions?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Client update input */
export type ClientUpdateInput = {
  Shipment?: InputMaybe<ClientShipmentUpdateRelationInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>;
  primary_contact?: InputMaybe<Scalars['String']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['String']['input']>;
};

export type Client_PermissionFilter = {
  AND?: InputMaybe<Array<Client_PermissionFilter>>;
  OR?: InputMaybe<Array<Client_PermissionFilter>>;
  Shipment?: InputMaybe<Shipment_PermissionFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<StringPredicate>;
  company_name?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  phone_number?: InputMaybe<StringPredicate>;
  preferred_shipping_methods?: InputMaybe<StringPredicate>;
  primary_contact?: InputMaybe<StringPredicate>;
  special_handling_instructions?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Shipment create input from client_id */
export type Client_Id_ShipmentCreateInput = {
  Package: ShipmentPackageRelationInput;
  client_id?: InputMaybe<ShipmentClient_IdRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Shipment update input from client_id */
export type Client_Id_ShipmentUpdateInput = {
  Package?: InputMaybe<ShipmentPackageUpdateRelationInput>;
  client_id?: InputMaybe<ShipmentClient_IdUpdateRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  clientAuthDomain?: Maybe<Scalars['String']['output']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type CustomTableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK'
}

export type DatePredicateHaving = {
  AND?: InputMaybe<Array<DatePredicateHaving>>;
  OR?: InputMaybe<Array<DatePredicateHaving>>;
  equals?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateRelativePredicateType = {
  op?: InputMaybe<RelativePredicateOpEnum>;
  unit?: InputMaybe<RelativePredicateUnitEnum>;
  value: Scalars['String']['input'];
};

export type DateRelativePredicates = {
  gt?: InputMaybe<DateRelativePredicateType>;
  gte?: InputMaybe<DateRelativePredicateType>;
  lt?: InputMaybe<DateRelativePredicateType>;
  lte?: InputMaybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relative?: InputMaybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: InputMaybe<Array<DateTimePredicateHaving>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving>>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<DeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<DeployOptions>;
};

export type DeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type Driver = {
  _description?: Maybe<Scalars['String']['output']>;
  availability_status?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  license_number?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Driver create input */
export type DriverCreateInput = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Driver create many input */
export type DriverCreateManyInput = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Driver delete input */
export type DriverDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** DriverFieldsPermissions create input */
export type DriverFieldsPermissions = {
  availability_status?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  license_number?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DriverFilter = {
  AND?: InputMaybe<Array<DriverFilter>>;
  OR?: InputMaybe<Array<DriverFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  license_number?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type DriverGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: DriverGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type DriverGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  availability_status?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  license_number?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type DriverKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
};

/** DriverListResponse output */
export type DriverListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Driver>;
};

/** DriverManyResponse output */
export type DriverManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Driver>;
};

/** No longer supported. Use `sort` instead. */
export enum DriverOrderBy {
  AvailabilityStatusAsc = 'availability_status_ASC',
  AvailabilityStatusDesc = 'availability_status_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LicenseNumberAsc = 'license_number_ASC',
  LicenseNumberDesc = 'license_number_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Driver subscription payload */
export type DriverPayload = {
  mutation: MutationType;
  node?: Maybe<Driver>;
  previousValues?: Maybe<Driver>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DriverSort = {
  availability_status?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  license_number?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Driver subscription filter */
export type DriverSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<DriverFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Driver update input */
export type DriverUpdateByFilterInput = {
  availability_status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  license_number?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Driver update input */
export type DriverUpdateInput = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Driver_PermissionFilter = {
  AND?: InputMaybe<Array<Driver_PermissionFilter>>;
  OR?: InputMaybe<Array<Driver_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  license_number?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EnvironmentBackupItem = {
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type EnvironmentItem = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: InputMaybe<Scalars['Boolean']['input']>;
  introspection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentVariable = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EnvironmentVariableFilter = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentVariableFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Facebook connection params */
export type FacebookOptions = {
  app_id: Scalars['String']['output'];
  app_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String']['input'];
  app_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type File = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  mods?: Maybe<Scalars['JSON']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']['output']>;
  users_avatar?: Maybe<UserListResponse>;
};


export type FileSettings_LandingPageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileSettings_MenuBarLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileUsers_AvatarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['Boolean']['input']>;
  filename?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['Boolean']['input']>;
  mods?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shareUrl?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileFilter = {
  AND?: InputMaybe<Array<FileFilter>>;
  OR?: InputMaybe<Array<FileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  downloadUrl?: InputMaybe<Array<GroupByField>>;
  fields?: InputMaybe<Array<GroupByField>>;
  fileId?: InputMaybe<Array<GroupByField>>;
  filename?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  meta?: InputMaybe<Array<GroupByField>>;
  mods?: InputMaybe<Array<GroupByField>>;
  provider?: InputMaybe<Array<GroupByField>>;
  public?: InputMaybe<Array<GroupByField>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery>;
  shareUrl?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploadUrl?: InputMaybe<Array<GroupByField>>;
  uploaded?: InputMaybe<Array<GroupByField>>;
  users_avatar?: InputMaybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FileListResponse output */
export type FileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FileSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  shareUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadUrl?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type FileStackSignInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type File_PermissionFilter = {
  AND?: InputMaybe<Array<File_PermissionFilter>>;
  OR?: InputMaybe<Array<File_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter>;
};

export type FilesSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  filemanagername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** FilesSettings create input */
export type FilesSettingCreateInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings create many input */
export type FilesSettingCreateManyInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings delete input */
export type FilesSettingDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingFieldsPermissions create input */
export type FilesSettingFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  filemanagername?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilesSettingFilter = {
  AND?: InputMaybe<Array<FilesSettingFilter>>;
  OR?: InputMaybe<Array<FilesSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type FilesSettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FilesSettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FilesSettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  filemanagername?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  isEnabled?: InputMaybe<Array<GroupByField>>;
  settings?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type FilesSettingKeyFilter = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingListResponse output */
export type FilesSettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<FilesSetting>;
};

/** FilesSettingManyResponse output */
export type FilesSettingManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FilesSetting>;
};

/** No longer supported. Use `sort` instead. */
export enum FilesSettingOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FilemanagernameAsc = 'filemanagername_ASC',
  FilemanagernameDesc = 'filemanagername_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEnabledAsc = 'isEnabled_ASC',
  IsEnabledDesc = 'isEnabled_DESC',
  SettingsAsc = 'settings_ASC',
  SettingsDesc = 'settings_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** FilesSettings subscription payload */
export type FilesSettingPayload = {
  mutation: MutationType;
  node?: Maybe<FilesSetting>;
  previousValues?: Maybe<FilesSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FilesSettingSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  filemanagername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isEnabled?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** FilesSettings subscription filter */
export type FilesSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FilesSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** FilesSettings update input */
export type FilesSettingUpdateByFilterInput = {
  filemanagername?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  isEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  settings?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
};

/** FilesSettings update input */
export type FilesSettingUpdateInput = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type FilesSetting_PermissionFilter = {
  AND?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  OR?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: InputMaybe<Array<FloatPredicateHaving>>;
  OR?: InputMaybe<Array<FloatPredicateHaving>>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type FunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<FunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

/** Github connection params */
export type GithubOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Google connection params */
export type GoogleOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: InputMaybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GroupByField = {
  as?: InputMaybe<Scalars['String']['input']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: InputMaybe<Scalars['Boolean']['input']>;
  aggregate?: InputMaybe<AggregationFunctionType>;
  ascii?: InputMaybe<Scalars['Boolean']['input']>;
  bitLength?: InputMaybe<Scalars['Boolean']['input']>;
  ceil?: InputMaybe<Scalars['Boolean']['input']>;
  charLength?: InputMaybe<Scalars['Boolean']['input']>;
  crc32?: InputMaybe<Scalars['Boolean']['input']>;
  datePart?: InputMaybe<DatePartFunctionType>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  floor?: InputMaybe<Scalars['Boolean']['input']>;
  hex?: InputMaybe<Scalars['Boolean']['input']>;
  ifNull?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PatternFunctionArguments>;
  locate?: InputMaybe<LocateFunctionArguments>;
  lower?: InputMaybe<Scalars['Boolean']['input']>;
  lpad?: InputMaybe<StringPadFunctionArguments>;
  ltrim?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  notLike?: InputMaybe<PatternFunctionArguments>;
  nullIf?: InputMaybe<Scalars['String']['input']>;
  replace?: InputMaybe<ReplaceFunctionArguments>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Int']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  rpad?: InputMaybe<StringPadFunctionArguments>;
  rtrim?: InputMaybe<Scalars['Boolean']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  substring?: InputMaybe<SubstringFunctionArguments>;
  trim?: InputMaybe<TrimFunctionArguments>;
  truncate?: InputMaybe<Scalars['Int']['input']>;
  upper?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupByResponse = {
  AnalyticGroup: AnalyticListResponse;
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']['output']>;
  Boolean?: Maybe<Scalars['Boolean']['output']>;
  ClientGroup: ClientListResponse;
  Date?: Maybe<Scalars['Date']['output']>;
  DateTime?: Maybe<Scalars['DateTime']['output']>;
  DriverGroup: DriverListResponse;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  FileGroup: FileListResponse;
  FilesSettingGroup: FilesSettingListResponse;
  Float?: Maybe<Scalars['Float']['output']>;
  GroupIds?: Maybe<Array<Scalars['ID']['output']>>;
  ID?: Maybe<Scalars['ID']['output']>;
  Int?: Maybe<Scalars['Int']['output']>;
  JSON?: Maybe<Scalars['JSON']['output']>;
  NotificationGroup: NotificationListResponse;
  PackageGroup: PackageListResponse;
  RoleGroup: RoleListResponse;
  ShipmentGroup: ShipmentListResponse;
  StatusUpdateGroup: StatusUpdateListResponse;
  String?: Maybe<Scalars['String']['output']>;
  UserGroup: UserListResponse;
};


export type GroupByResponseAnalyticGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AnalyticFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AnalyticGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AnalyticOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AnalyticSort>>;
};


export type GroupByResponseApiTokenGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type GroupByResponseClientGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ClientGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ClientOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientSort>>;
};


export type GroupByResponseDriverGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DriverFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DriverGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DriverOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DriverSort>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
};


export type GroupByResponseFileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
};


export type GroupByResponseFilesSettingGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
};


export type GroupByResponseNotificationGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
};


export type GroupByResponsePackageGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PackageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PackageGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PackageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PackageSort>>;
};


export type GroupByResponseRoleGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};


export type GroupByResponseShipmentGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ShipmentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ShipmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ShipmentSort>>;
};


export type GroupByResponseStatusUpdateGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StatusUpdateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<StatusUpdateGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusUpdateOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StatusUpdateSort>>;
};


export type GroupByResponseUserGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type GroupBySort = {
  alias: Scalars['String']['input'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String']['input'];
};

export type Having = {
  AND?: InputMaybe<Array<Having>>;
  OR?: InputMaybe<Array<Having>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  bigint?: InputMaybe<BigIntPredicateHaving>;
  bool?: InputMaybe<BoolPredicateHaving>;
  date?: InputMaybe<DatePredicateHaving>;
  datetime?: InputMaybe<DateTimePredicateHaving>;
  float?: InputMaybe<FloatPredicateHaving>;
  id?: InputMaybe<IdPredicateHaving>;
  int?: InputMaybe<IntPredicateHaving>;
  string?: InputMaybe<StringPredicateHaving>;
};

export type IdPredicate = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type IdPredicateHaving = {
  AND?: InputMaybe<Array<IdPredicateHaving>>;
  OR?: InputMaybe<Array<IdPredicateHaving>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** ImportCSV */
export type ImportCsv = {
  data: ImportCsvData;
  tableId: Scalars['String']['input'];
};

export type ImportCsvData = {
  fields?: InputMaybe<Scalars['String']['input']>;
  hasHeader?: InputMaybe<Scalars['Boolean']['input']>;
  matchField?: InputMaybe<Scalars['String']['input']>;
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  tableFields?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

/** ImportedTable */
export type ImportedTable = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: InputMaybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: InputMaybe<Array<TableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntPredicateHaving = {
  AND?: InputMaybe<Array<IntPredicateHaving>>;
  OR?: InputMaybe<Array<IntPredicateHaving>>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntrospectionQueryResponse = {
  url: Scalars['String']['output'];
};

export enum InvitationRoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** Invited By Name */
export type InvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** IsSocialUser */
export type IsSocialUser = {
  email: Scalars['String']['input'];
};

export type IsSocialUserResponse = {
  isSocialUser?: Maybe<Scalars['Boolean']['output']>;
};

export type LocateFunctionArguments = {
  pos?: InputMaybe<Scalars['Int']['input']>;
  str: Scalars['String']['input'];
};

/** LoginResponse */
export type LoginResponse = {
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']['output']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  table: Scalars['String']['output'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type Mutation = {
  ImportCSV?: Maybe<AsyncSession>;
  IsSocialUser?: Maybe<IsSocialUserResponse>;
  analyticCreate: Analytic;
  analyticCreateMany: AnalyticManyResponse;
  analyticDelete?: Maybe<SuccessResponse>;
  analyticDeleteByFilter?: Maybe<SuccessResponse>;
  analyticDestroy?: Maybe<SuccessResponse>;
  analyticDestroyByFilter?: Maybe<SuccessResponse>;
  analyticRestore: Analytic;
  analyticUpdate: Analytic;
  analyticUpdateByFilter: AnalyticManyResponse;
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  clientCreate: Client;
  clientCreateMany: ClientManyResponse;
  clientDelete?: Maybe<SuccessResponse>;
  clientDeleteByFilter?: Maybe<SuccessResponse>;
  clientDestroy?: Maybe<SuccessResponse>;
  clientDestroyByFilter?: Maybe<SuccessResponse>;
  clientRestore: Client;
  clientUpdate: Client;
  clientUpdateByFilter: ClientManyResponse;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']['output']>;
  driverCreate: Driver;
  driverCreateMany: DriverManyResponse;
  driverDelete?: Maybe<SuccessResponse>;
  driverDeleteByFilter?: Maybe<SuccessResponse>;
  driverDestroy?: Maybe<SuccessResponse>;
  driverDestroyByFilter?: Maybe<SuccessResponse>;
  driverRestore: Driver;
  driverUpdate: Driver;
  driverUpdateByFilter: DriverManyResponse;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  filesSettingCreate: FilesSetting;
  filesSettingCreateMany: FilesSettingManyResponse;
  filesSettingDelete?: Maybe<SuccessResponse>;
  filesSettingDeleteByFilter?: Maybe<SuccessResponse>;
  filesSettingDestroy?: Maybe<SuccessResponse>;
  filesSettingDestroyByFilter?: Maybe<SuccessResponse>;
  filesSettingRestore: FilesSetting;
  filesSettingUpdate: FilesSetting;
  filesSettingUpdateByFilter: FilesSettingManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  notificationCreate: Notification;
  notificationCreateMany: NotificationManyResponse;
  notificationDelete?: Maybe<SuccessResponse>;
  notificationDeleteByFilter?: Maybe<SuccessResponse>;
  notificationDestroy?: Maybe<SuccessResponse>;
  notificationDestroyByFilter?: Maybe<SuccessResponse>;
  notificationRestore: Notification;
  notificationUpdate: Notification;
  notificationUpdateByFilter: NotificationManyResponse;
  packageCreate: Package;
  packageCreateMany: PackageManyResponse;
  packageDelete?: Maybe<SuccessResponse>;
  packageDeleteByFilter?: Maybe<SuccessResponse>;
  packageDestroy?: Maybe<SuccessResponse>;
  packageDestroyByFilter?: Maybe<SuccessResponse>;
  packageRestore: Package;
  packageUpdate: Package;
  packageUpdateByFilter: PackageManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  shipmentCreate: Shipment;
  shipmentCreateMany: ShipmentManyResponse;
  shipmentDelete?: Maybe<SuccessResponse>;
  shipmentDeleteByFilter?: Maybe<SuccessResponse>;
  shipmentDestroy?: Maybe<SuccessResponse>;
  shipmentDestroyByFilter?: Maybe<SuccessResponse>;
  shipmentRestore: Shipment;
  shipmentUpdate: Shipment;
  shipmentUpdateByFilter: ShipmentManyResponse;
  statusUpdateCreate: StatusUpdate;
  statusUpdateCreateMany: StatusUpdateManyResponse;
  statusUpdateDelete?: Maybe<SuccessResponse>;
  statusUpdateDeleteByFilter?: Maybe<SuccessResponse>;
  statusUpdateDestroy?: Maybe<SuccessResponse>;
  statusUpdateDestroyByFilter?: Maybe<SuccessResponse>;
  statusUpdateRestore: StatusUpdate;
  statusUpdateUpdate: StatusUpdate;
  statusUpdateUpdateByFilter: StatusUpdateManyResponse;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};


export type MutationImportCsvArgs = {
  data: ImportCsv;
};


export type MutationIsSocialUserArgs = {
  data: IsSocialUser;
};


export type MutationAnalyticCreateArgs = {
  data: AnalyticCreateInput;
};


export type MutationAnalyticCreateManyArgs = {
  data: Array<InputMaybe<AnalyticCreateManyInput>>;
};


export type MutationAnalyticDeleteArgs = {
  data?: InputMaybe<AnalyticDeleteInput>;
  filter?: InputMaybe<AnalyticKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAnalyticDeleteByFilterArgs = {
  filter: AnalyticFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAnalyticDestroyArgs = {
  filter?: InputMaybe<AnalyticKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAnalyticDestroyByFilterArgs = {
  filter: AnalyticFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAnalyticRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAnalyticUpdateArgs = {
  data: AnalyticUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AnalyticKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAnalyticUpdateByFilterArgs = {
  data: AnalyticUpdateByFilterInput;
  filter?: InputMaybe<AnalyticFilter>;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: InputMaybe<ApiTokenDeleteInput>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: InputMaybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: InputMaybe<AuthenticationProfileDeleteInput>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: InputMaybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationClientCreateArgs = {
  data: ClientCreateInput;
};


export type MutationClientCreateManyArgs = {
  data: Array<InputMaybe<ClientCreateManyInput>>;
};


export type MutationClientDeleteArgs = {
  data?: InputMaybe<ClientDeleteInput>;
  filter?: InputMaybe<ClientKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientDeleteByFilterArgs = {
  filter: ClientFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientDestroyArgs = {
  filter?: InputMaybe<ClientKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientDestroyByFilterArgs = {
  filter: ClientFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationClientUpdateArgs = {
  data: ClientUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClientKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientUpdateByFilterArgs = {
  data: ClientUpdateByFilterInput;
  filter?: InputMaybe<ClientFilter>;
};


export type MutationDeployArgs = {
  data?: InputMaybe<DeployingBuildInput>;
};


export type MutationDriverCreateArgs = {
  data: DriverCreateInput;
};


export type MutationDriverCreateManyArgs = {
  data: Array<InputMaybe<DriverCreateManyInput>>;
};


export type MutationDriverDeleteArgs = {
  data?: InputMaybe<DriverDeleteInput>;
  filter?: InputMaybe<DriverKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDriverDeleteByFilterArgs = {
  filter: DriverFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDriverDestroyArgs = {
  filter?: InputMaybe<DriverKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDriverDestroyByFilterArgs = {
  filter: DriverFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDriverRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationDriverUpdateArgs = {
  data: DriverUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DriverKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDriverUpdateByFilterArgs = {
  data: DriverUpdateByFilterInput;
  filter?: InputMaybe<DriverFilter>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: InputMaybe<EnvironmentVariableDeleteInput>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentVariableFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<InputMaybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: InputMaybe<FileDeleteInput>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyArgs = {
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: InputMaybe<FileFilter>;
};


export type MutationFilesSettingCreateArgs = {
  data: FilesSettingCreateInput;
};


export type MutationFilesSettingCreateManyArgs = {
  data: Array<InputMaybe<FilesSettingCreateManyInput>>;
};


export type MutationFilesSettingDeleteArgs = {
  data?: InputMaybe<FilesSettingDeleteInput>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDeleteByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyArgs = {
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFilesSettingUpdateArgs = {
  data: FilesSettingUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingUpdateByFilterArgs = {
  data: FilesSettingUpdateByFilterInput;
  filter?: InputMaybe<FilesSettingFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvokeArgs = {
  data?: InputMaybe<InvokeData>;
};


export type MutationNotificationCreateArgs = {
  data: NotificationCreateInput;
};


export type MutationNotificationCreateManyArgs = {
  data: Array<InputMaybe<NotificationCreateManyInput>>;
};


export type MutationNotificationDeleteArgs = {
  data?: InputMaybe<NotificationDeleteInput>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDeleteByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyArgs = {
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationUpdateArgs = {
  data: NotificationUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationUpdateByFilterArgs = {
  data: NotificationUpdateByFilterInput;
  filter?: InputMaybe<NotificationFilter>;
};


export type MutationPackageCreateArgs = {
  data: PackageCreateInput;
};


export type MutationPackageCreateManyArgs = {
  data: Array<InputMaybe<PackageCreateManyInput>>;
};


export type MutationPackageDeleteArgs = {
  data?: InputMaybe<PackageDeleteInput>;
  filter?: InputMaybe<PackageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPackageDeleteByFilterArgs = {
  filter: PackageFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPackageDestroyArgs = {
  filter?: InputMaybe<PackageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPackageDestroyByFilterArgs = {
  filter: PackageFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPackageRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationPackageUpdateArgs = {
  data: PackageUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PackageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPackageUpdateByFilterArgs = {
  data: PackageUpdateByFilterInput;
  filter?: InputMaybe<PackageFilter>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<InputMaybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: InputMaybe<RoleDeleteInput>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyArgs = {
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: InputMaybe<RoleFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String']['input'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationShipmentCreateArgs = {
  data: ShipmentCreateInput;
};


export type MutationShipmentCreateManyArgs = {
  data: Array<InputMaybe<ShipmentCreateManyInput>>;
};


export type MutationShipmentDeleteArgs = {
  data?: InputMaybe<ShipmentDeleteInput>;
  filter?: InputMaybe<ShipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationShipmentDeleteByFilterArgs = {
  filter: ShipmentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationShipmentDestroyArgs = {
  filter?: InputMaybe<ShipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationShipmentDestroyByFilterArgs = {
  filter: ShipmentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationShipmentRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationShipmentUpdateArgs = {
  data: ShipmentUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ShipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationShipmentUpdateByFilterArgs = {
  data: ShipmentUpdateByFilterInput;
  filter?: InputMaybe<ShipmentFilter>;
};


export type MutationStatusUpdateCreateArgs = {
  data: StatusUpdateCreateInput;
};


export type MutationStatusUpdateCreateManyArgs = {
  data: Array<InputMaybe<StatusUpdateCreateManyInput>>;
};


export type MutationStatusUpdateDeleteArgs = {
  data?: InputMaybe<StatusUpdateDeleteInput>;
  filter?: InputMaybe<StatusUpdateKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStatusUpdateDeleteByFilterArgs = {
  filter: StatusUpdateFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStatusUpdateDestroyArgs = {
  filter?: InputMaybe<StatusUpdateKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStatusUpdateDestroyByFilterArgs = {
  filter: StatusUpdateFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStatusUpdateRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationStatusUpdateUpdateArgs = {
  data: StatusUpdateUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<StatusUpdateKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStatusUpdateUpdateByFilterArgs = {
  data: StatusUpdateUpdateByFilterInput;
  filter?: InputMaybe<StatusUpdateFilter>;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<InputMaybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: InputMaybe<UserDeleteInput>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyArgs = {
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSignUpArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  user: UserCreateInput;
};


export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: InputMaybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  data: VerificationEmailResendInput;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update'
}

export type Notification = {
  _description?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sent_at?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userID?: Maybe<User>;
};

/** Notification create input */
export type NotificationCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  userID?: InputMaybe<NotificationUserIdRelationInput>;
};

/** Notification create many input */
export type NotificationCreateManyInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  userID?: InputMaybe<NotificationUserIdManyRelationInput>;
};

/** Notification delete input */
export type NotificationDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationFieldsPermissions create input */
export type NotificationFieldsPermissions = {
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  sent_at?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationFilter = {
  AND?: InputMaybe<Array<NotificationFilter>>;
  OR?: InputMaybe<Array<NotificationFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  sent_at?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userID?: InputMaybe<UserFilter>;
};

export type NotificationGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: NotificationGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type NotificationGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  content?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  sent_at?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userID?: InputMaybe<UserGroupByQuery>;
};

export type NotificationKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationListResponse output */
export type NotificationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Notification>;
};

/** NotificationManyResponse output */
export type NotificationManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Notification>;
};

/** No longer supported. Use `sort` instead. */
export enum NotificationOrderBy {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SentAtAsc = 'sent_at_ASC',
  SentAtDesc = 'sent_at_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Notification subscription payload */
export type NotificationPayload = {
  mutation: MutationType;
  node?: Maybe<Notification>;
  previousValues?: Maybe<Notification>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type NotificationSort = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sent_at?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userID?: InputMaybe<UserSort>;
};

export enum NotificationStatusType {
  Done = 'done'
}

/** Notification subscription filter */
export type NotificationSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<NotificationFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Notification update input */
export type NotificationUpdateByFilterInput = {
  content?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Notification update input */
export type NotificationUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  userID?: InputMaybe<NotificationUserIdUpdateRelationInput>;
};

/** Notification relation input */
export type NotificationUserIdManyRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
};

/** Notification relation input */
export type NotificationUserIdRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Notification_UserCreateInput>;
};

/** Notification relation input */
export type NotificationUserIdUpdateRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Notification_UserCreateInput>;
  disconnect?: InputMaybe<UserKeyFilter>;
  reconnect?: InputMaybe<UserKeyFilter>;
  update?: InputMaybe<Notification_UserUpdateInput>;
};

export type Notification_PermissionFilter = {
  AND?: InputMaybe<Array<Notification_PermissionFilter>>;
  OR?: InputMaybe<Array<Notification_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  sent_at?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userID?: InputMaybe<User_PermissionFilter>;
};

/** Users create input from notification */
export type Notification_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationRelationInput>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from notification */
export type Notification_UserUpdateInput = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationUpdateRelationInput>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type OrganizationUpgradeResponse = {
  organizationId: Scalars['String']['output'];
};

export type OrganizationUserInvitationResponse = {
  invitationId: Scalars['String']['output'];
};

export type Package = {
  StatusUpdate?: Maybe<StatusUpdateListResponse>;
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  shipment_id?: Maybe<Shipment>;
  status?: Maybe<Scalars['String']['output']>;
  tracking_number?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PackageStatusUpdateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StatusUpdateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<StatusUpdateGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusUpdateOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StatusUpdateSort>>;
};

/** Package create input */
export type PackageCreateInput = {
  StatusUpdate?: InputMaybe<PackageStatusUpdateRelationInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

/** Package create many input */
export type PackageCreateManyInput = {
  StatusUpdate: PackageStatusUpdateManyRelationInput;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

/** Package delete input */
export type PackageDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PackageFieldsPermissions create input */
export type PackageFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  tracking_number?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackageFilter = {
  AND?: InputMaybe<Array<PackageFilter>>;
  OR?: InputMaybe<Array<PackageFilter>>;
  StatusUpdate?: InputMaybe<StatusUpdateRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  location?: InputMaybe<StringPredicate>;
  shipment_id?: InputMaybe<ShipmentFilter>;
  status?: InputMaybe<StringPredicate>;
  tracking_number?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PackageGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: PackageGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type PackageGroupByQuery = {
  StatusUpdate?: InputMaybe<StatusUpdateGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  location?: InputMaybe<Array<GroupByField>>;
  shipment_id?: InputMaybe<ShipmentGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  tracking_number?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type PackageKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

/** PackageListResponse output */
export type PackageListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Package>;
};

/** PackageManyResponse output */
export type PackageManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Package>;
};

/** No longer supported. Use `sort` instead. */
export enum PackageOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TrackingNumberAsc = 'tracking_number_ASC',
  TrackingNumberDesc = 'tracking_number_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Package subscription payload */
export type PackagePayload = {
  mutation: MutationType;
  node?: Maybe<Package>;
  previousValues?: Maybe<Package>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PackageRelationFilter = {
  every?: InputMaybe<PackageFilter>;
  none?: InputMaybe<PackageFilter>;
  some?: InputMaybe<PackageFilter>;
};

/** Package relation input */
export type PackageShipment_IdManyRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
};

/** Package relation input */
export type PackageShipment_IdRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
  create?: InputMaybe<Package_ShipmentCreateInput>;
};

/** Package relation input */
export type PackageShipment_IdUpdateRelationInput = {
  connect?: InputMaybe<ShipmentKeyFilter>;
  create?: InputMaybe<Package_ShipmentCreateInput>;
  disconnect?: InputMaybe<ShipmentKeyFilter>;
  reconnect?: InputMaybe<ShipmentKeyFilter>;
  update?: InputMaybe<Package_ShipmentUpdateInput>;
};

export type PackageSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  shipment_id?: InputMaybe<ShipmentSort>;
  status?: InputMaybe<SortOrder>;
  tracking_number?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Package relation input */
export type PackageStatusUpdateManyRelationInput = {
  connect?: InputMaybe<Array<StatusUpdateKeyFilter>>;
};

/** Package relation input */
export type PackageStatusUpdateRelationInput = {
  connect?: InputMaybe<Array<StatusUpdateKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateCreateInput>>>;
};

/** Package relation input */
export type PackageStatusUpdateUpdateRelationInput = {
  connect?: InputMaybe<Array<StatusUpdateKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateCreateInput>>>;
  disconnect?: InputMaybe<Array<StatusUpdateKeyFilter>>;
  reconnect?: InputMaybe<Array<StatusUpdateKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Package_Id_StatusUpdateUpdateInput>>>;
};

/** Package subscription filter */
export type PackageSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PackageFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Package update input */
export type PackageUpdateByFilterInput = {
  location?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  tracking_number?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Package update input */
export type PackageUpdateInput = {
  StatusUpdate?: InputMaybe<PackageStatusUpdateUpdateRelationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

export type Package_PermissionFilter = {
  AND?: InputMaybe<Array<Package_PermissionFilter>>;
  OR?: InputMaybe<Array<Package_PermissionFilter>>;
  StatusUpdate?: InputMaybe<StatusUpdate_PermissionRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  location?: InputMaybe<StringPredicate>;
  shipment_id?: InputMaybe<Shipment_PermissionFilter>;
  status?: InputMaybe<StringPredicate>;
  tracking_number?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Package_PermissionRelationFilter = {
  every?: InputMaybe<Package_PermissionFilter>;
  none?: InputMaybe<Package_PermissionFilter>;
  some?: InputMaybe<Package_PermissionFilter>;
};

/** Shipment create input from Package */
export type Package_ShipmentCreateInput = {
  Package?: InputMaybe<ShipmentPackageRelationInput>;
  client_id?: InputMaybe<ShipmentClient_IdRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Shipment update input from Package */
export type Package_ShipmentUpdateInput = {
  Package?: InputMaybe<ShipmentPackageUpdateRelationInput>;
  client_id?: InputMaybe<ShipmentClient_IdUpdateRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** StatusUpdate create input from package_id */
export type Package_Id_StatusUpdateCreateInput = {
  package_id?: InputMaybe<StatusUpdatePackage_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

/** StatusUpdate update input from package_id */
export type Package_Id_StatusUpdateUpdateInput = {
  data: StatusUpdateUpdateInput;
  filter?: InputMaybe<StatusUpdateKeyFilter>;
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type PatternFunctionArguments = {
  escape?: InputMaybe<Scalars['String']['input']>;
  pattern: Scalars['String']['input'];
};

export type Permission = {
  _description?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionFilter = {
  AND?: InputMaybe<Array<PermissionFilter>>;
  OR?: InputMaybe<Array<PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<RoleFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  appId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  permission?: InputMaybe<Array<GroupByField>>;
  resource?: InputMaybe<Array<GroupByField>>;
  resourceType?: InputMaybe<Array<GroupByField>>;
  role?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: InputMaybe<Scalars['String']['input']>;
  applicationName?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionRelationFilter = {
  every?: InputMaybe<PermissionFilter>;
  none?: InputMaybe<PermissionFilter>;
  some?: InputMaybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermissionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: InputMaybe<Array<Permission_PermissionFilter>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<Role_PermissionFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: InputMaybe<Permission_PermissionFilter>;
  none?: InputMaybe<Permission_PermissionFilter>;
  some?: InputMaybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  data?: InputMaybe<PermissionsCustomData>;
  logic?: InputMaybe<PermissionsCustomLogic>;
  settings?: InputMaybe<PermissionsCustomSettings>;
  users?: InputMaybe<PermissionsCustomUsers>;
};

export type PermissionsCustomData = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogic = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke>;
  logs?: InputMaybe<PermissionsCustomLogicLogs>;
  view?: InputMaybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean']['input'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Analytics?: InputMaybe<PermissionsDataAnalytics>;
  Client?: InputMaybe<PermissionsDataClient>;
  Driver?: InputMaybe<PermissionsDataDriver>;
  Files?: InputMaybe<PermissionsDataFiles>;
  FilesSettings?: InputMaybe<PermissionsDataFilesSettings>;
  Notification?: InputMaybe<PermissionsDataNotification>;
  Package?: InputMaybe<PermissionsDataPackage>;
  Roles?: InputMaybe<PermissionsDataRoles>;
  Shipment?: InputMaybe<PermissionsDataShipment>;
  StatusUpdate?: InputMaybe<PermissionsDataStatusUpdate>;
  Users?: InputMaybe<PermissionsDataUsers>;
};

export type PermissionsDataAnalytics = {
  create?: InputMaybe<PermissionsDataAnalyticsCreate>;
  delete?: InputMaybe<PermissionsDataAnalyticsDelete>;
  destroy?: InputMaybe<PermissionsDataAnalyticsDestroy>;
  read?: InputMaybe<PermissionsDataAnalyticsRead>;
  update?: InputMaybe<PermissionsDataAnalyticsUpdate>;
};

export type PermissionsDataAnalyticsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataAnalyticsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataAnalyticsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataAnalyticsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<AnalyticFieldsPermissions>;
  filter?: InputMaybe<Analytic_PermissionFilter>;
};

export type PermissionsDataAnalyticsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<AnalyticFieldsPermissions>;
  filter?: InputMaybe<Analytic_PermissionFilter>;
};

export type PermissionsDataClient = {
  create?: InputMaybe<PermissionsDataClientCreate>;
  delete?: InputMaybe<PermissionsDataClientDelete>;
  destroy?: InputMaybe<PermissionsDataClientDestroy>;
  read?: InputMaybe<PermissionsDataClientRead>;
  update?: InputMaybe<PermissionsDataClientUpdate>;
};

export type PermissionsDataClientCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataClientDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataClientDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataClientRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ClientFieldsPermissions>;
  filter?: InputMaybe<Client_PermissionFilter>;
};

export type PermissionsDataClientUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ClientFieldsPermissions>;
  filter?: InputMaybe<Client_PermissionFilter>;
};

export type PermissionsDataDriver = {
  create?: InputMaybe<PermissionsDataDriverCreate>;
  delete?: InputMaybe<PermissionsDataDriverDelete>;
  destroy?: InputMaybe<PermissionsDataDriverDestroy>;
  read?: InputMaybe<PermissionsDataDriverRead>;
  update?: InputMaybe<PermissionsDataDriverUpdate>;
};

export type PermissionsDataDriverCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDriverDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataDriverDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDriverRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DriverFieldsPermissions>;
  filter?: InputMaybe<Driver_PermissionFilter>;
};

export type PermissionsDataDriverUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DriverFieldsPermissions>;
  filter?: InputMaybe<Driver_PermissionFilter>;
};

export type PermissionsDataFiles = {
  create?: InputMaybe<PermissionsDataFilesCreate>;
  delete?: InputMaybe<PermissionsDataFilesDelete>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy>;
  read?: InputMaybe<PermissionsDataFilesRead>;
  update?: InputMaybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataFilesSettings = {
  create?: InputMaybe<PermissionsDataFilesSettingsCreate>;
  delete?: InputMaybe<PermissionsDataFilesSettingsDelete>;
  destroy?: InputMaybe<PermissionsDataFilesSettingsDestroy>;
  read?: InputMaybe<PermissionsDataFilesSettingsRead>;
  update?: InputMaybe<PermissionsDataFilesSettingsUpdate>;
};

export type PermissionsDataFilesSettingsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesSettingsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesSettingsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataNotification = {
  create?: InputMaybe<PermissionsDataNotificationCreate>;
  delete?: InputMaybe<PermissionsDataNotificationDelete>;
  destroy?: InputMaybe<PermissionsDataNotificationDestroy>;
  read?: InputMaybe<PermissionsDataNotificationRead>;
  update?: InputMaybe<PermissionsDataNotificationUpdate>;
};

export type PermissionsDataNotificationCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataNotificationDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataNotificationUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataPackage = {
  create?: InputMaybe<PermissionsDataPackageCreate>;
  delete?: InputMaybe<PermissionsDataPackageDelete>;
  destroy?: InputMaybe<PermissionsDataPackageDestroy>;
  read?: InputMaybe<PermissionsDataPackageRead>;
  update?: InputMaybe<PermissionsDataPackageUpdate>;
};

export type PermissionsDataPackageCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPackageDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataPackageDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPackageRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PackageFieldsPermissions>;
  filter?: InputMaybe<Package_PermissionFilter>;
};

export type PermissionsDataPackageUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PackageFieldsPermissions>;
  filter?: InputMaybe<Package_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: InputMaybe<PermissionsDataRolesCreate>;
  delete?: InputMaybe<PermissionsDataRolesDelete>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy>;
  read?: InputMaybe<PermissionsDataRolesRead>;
  update?: InputMaybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataShipment = {
  create?: InputMaybe<PermissionsDataShipmentCreate>;
  delete?: InputMaybe<PermissionsDataShipmentDelete>;
  destroy?: InputMaybe<PermissionsDataShipmentDestroy>;
  read?: InputMaybe<PermissionsDataShipmentRead>;
  update?: InputMaybe<PermissionsDataShipmentUpdate>;
};

export type PermissionsDataShipmentCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataShipmentDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataShipmentDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataShipmentRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ShipmentFieldsPermissions>;
  filter?: InputMaybe<Shipment_PermissionFilter>;
};

export type PermissionsDataShipmentUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ShipmentFieldsPermissions>;
  filter?: InputMaybe<Shipment_PermissionFilter>;
};

export type PermissionsDataStatusUpdate = {
  create?: InputMaybe<PermissionsDataStatusUpdateCreate>;
  delete?: InputMaybe<PermissionsDataStatusUpdateDelete>;
  destroy?: InputMaybe<PermissionsDataStatusUpdateDestroy>;
  read?: InputMaybe<PermissionsDataStatusUpdateRead>;
  update?: InputMaybe<PermissionsDataStatusUpdateUpdate>;
};

export type PermissionsDataStatusUpdateCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataStatusUpdateDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataStatusUpdateDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataStatusUpdateRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<StatusUpdateFieldsPermissions>;
  filter?: InputMaybe<StatusUpdate_PermissionFilter>;
};

export type PermissionsDataStatusUpdateUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<StatusUpdateFieldsPermissions>;
  filter?: InputMaybe<StatusUpdate_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: InputMaybe<PermissionsDataUsersCreate>;
  delete?: InputMaybe<PermissionsDataUsersDelete>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy>;
  read?: InputMaybe<PermissionsDataUsersRead>;
  update?: InputMaybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: InputMaybe<PermissionsCustom>;
  data?: InputMaybe<PermissionsData>;
};

export type ProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  analytic?: Maybe<Analytic>;
  analyticsList: AnalyticListResponse;
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  client?: Maybe<Client>;
  clientsList: ClientListResponse;
  companyName?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  driver?: Maybe<Driver>;
  driversList: DriverListResponse;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  file?: Maybe<File>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  filesSetting?: Maybe<FilesSetting>;
  filesSettingsList: FilesSettingListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  functionsVersionCheck?: Maybe<FunctionInfoCheck>;
  isAllowedCallbackURL?: Maybe<IsAllowedCallbackUrlQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  notification?: Maybe<Notification>;
  notificationsList: NotificationListResponse;
  package?: Maybe<Package>;
  packagesList: PackageListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  shipment?: Maybe<Shipment>;
  shipmentsList: ShipmentListResponse;
  statusUpdate?: Maybe<StatusUpdate>;
  statusUpdatesList: StatusUpdateListResponse;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  userBillingConfigurationArchie: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  viewDryRun?: Maybe<ViewDryRunOutput>;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryAnalyticArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAnalyticsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AnalyticFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AnalyticGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AnalyticOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AnalyticSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokensListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryAuthenticationProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthenticationProfilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<BillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<BillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryClientsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ClientGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ClientOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ClientSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type QueryDriverArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDriversListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DriverFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DriverGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DriverOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DriverSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariablesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingArgs = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy>>>;
};


export type QueryIsAllowedCallbackUrlArgs = {
  callbackURL: Scalars['String']['input'];
};


export type QueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryNotificationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPackageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPackagesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PackageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PackageGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PackageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PackageSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRolesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryShipmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryShipmentsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ShipmentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ShipmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ShipmentSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStatusUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStatusUpdatesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StatusUpdateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<StatusUpdateGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusUpdateOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StatusUpdateSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTablesListArgs = {
  filter?: InputMaybe<TableListFilter>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

/** Relation */
export type Relation = {
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type ResizeImageDirectiveCropOptions = {
  height: Scalars['Int']['input'];
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  width: Scalars['Int']['input'];
};

export type ResizeImageDirectiveFlipOptions = {
  horizontally?: InputMaybe<Scalars['Boolean']['input']>;
  vertically?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResizeImageDirectiveResizeOptions = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Role = {
  _description?: Maybe<Scalars['String']['output']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membersCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<PermissionListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UserListResponse>;
};


export type RoleApiTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type RoleAuthenticationProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type RolePermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum RoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleFilter = {
  AND?: InputMaybe<Array<RoleFilter>>;
  OR?: InputMaybe<Array<RoleFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RoleGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  permissions?: InputMaybe<PermissionGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  users?: InputMaybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RoleRelationFilter = {
  every?: InputMaybe<RoleFilter>;
  none?: InputMaybe<RoleFilter>;
  some?: InputMaybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RoleFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: InputMaybe<Array<Role_PermissionFilter>>;
  OR?: InputMaybe<Array<Role_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: InputMaybe<Role_PermissionFilter>;
  none?: InputMaybe<Role_PermissionFilter>;
  some?: InputMaybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: InputMaybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationRelationInput>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type Setting = {
  _description?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  buttonLinkColor?: Maybe<Scalars['String']['output']>;
  containerColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  landingPageImage?: Maybe<File>;
  language?: Maybe<Scalars['String']['output']>;
  leftNavColor?: Maybe<Scalars['String']['output']>;
  menuBarBGColor?: Maybe<Scalars['String']['output']>;
  menuBarIconsColor?: Maybe<Scalars['String']['output']>;
  menuBarLogo?: Maybe<File>;
  passwordMinLength?: Maybe<Scalars['Int']['output']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']['output']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']['output']>;
  rememberDevice?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaceStyle?: Maybe<Scalars['String']['output']>;
  vanityUrl?: Maybe<Scalars['String']['output']>;
};

export type SettingFilter = {
  AND?: InputMaybe<Array<SettingFilter>>;
  OR?: InputMaybe<Array<SettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<FileFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<FileFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: InputMaybe<Array<GroupByField>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField>>;
  containerColor?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  currency?: InputMaybe<Array<GroupByField>>;
  dateFormat?: InputMaybe<Array<GroupByField>>;
  landingPageImage?: InputMaybe<FileGroupByQuery>;
  language?: InputMaybe<Array<GroupByField>>;
  leftNavColor?: InputMaybe<Array<GroupByField>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery>;
  passwordMinLength?: InputMaybe<Array<GroupByField>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField>>;
  rememberDevice?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField>>;
  vanityUrl?: InputMaybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SettingRelationFilter = {
  every?: InputMaybe<SettingFilter>;
  none?: InputMaybe<SettingFilter>;
  some?: InputMaybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: InputMaybe<SortOrder>;
  buttonLinkColor?: InputMaybe<SortOrder>;
  containerColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  currency?: InputMaybe<SortOrder>;
  dateFormat?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  landingPageImage?: InputMaybe<FileSort>;
  language?: InputMaybe<SortOrder>;
  leftNavColor?: InputMaybe<SortOrder>;
  menuBarBGColor?: InputMaybe<SortOrder>;
  menuBarIconsColor?: InputMaybe<SortOrder>;
  menuBarLogo?: InputMaybe<FileSort>;
  passwordMinLength?: InputMaybe<SortOrder>;
  passwordRequireLowercase?: InputMaybe<SortOrder>;
  passwordRequireNumbers?: InputMaybe<SortOrder>;
  passwordRequireSpecial?: InputMaybe<SortOrder>;
  passwordRequireUppercase?: InputMaybe<SortOrder>;
  passwordUpdateInterval?: InputMaybe<SortOrder>;
  rememberDevice?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userInterfaceStyle?: InputMaybe<SortOrder>;
  vanityUrl?: InputMaybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  buttonLinkColor?: InputMaybe<Scalars['String']['input']>;
  containerColor?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  leftNavColor?: InputMaybe<Scalars['String']['input']>;
  menuBarBGColor?: InputMaybe<Scalars['String']['input']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']['input']>;
  passwordMinLength?: InputMaybe<Scalars['Int']['input']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']['input']>;
  rememberDevice?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']['input']>;
  vanityUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Setting_PermissionFilter = {
  AND?: InputMaybe<Array<Setting_PermissionFilter>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<File_PermissionFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<File_PermissionFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: InputMaybe<Setting_PermissionFilter>;
  none?: InputMaybe<Setting_PermissionFilter>;
  some?: InputMaybe<Setting_PermissionFilter>;
};

export type Shipment = {
  Package?: Maybe<PackageListResponse>;
  _description?: Maybe<Scalars['String']['output']>;
  client_id?: Maybe<Client>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ShipmentPackageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PackageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PackageGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PackageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PackageSort>>;
};

/** Shipment relation input */
export type ShipmentClient_IdManyRelationInput = {
  connect?: InputMaybe<ClientKeyFilter>;
};

/** Shipment relation input */
export type ShipmentClient_IdRelationInput = {
  connect?: InputMaybe<ClientKeyFilter>;
  create?: InputMaybe<Shipment_ClientCreateInput>;
};

/** Shipment relation input */
export type ShipmentClient_IdUpdateRelationInput = {
  connect?: InputMaybe<ClientKeyFilter>;
  create?: InputMaybe<Shipment_ClientCreateInput>;
  disconnect?: InputMaybe<ClientKeyFilter>;
  reconnect?: InputMaybe<ClientKeyFilter>;
  update?: InputMaybe<Shipment_ClientUpdateInput>;
};

/** Shipment create input */
export type ShipmentCreateInput = {
  Package?: InputMaybe<ShipmentPackageRelationInput>;
  client_id?: InputMaybe<ShipmentClient_IdRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Shipment create many input */
export type ShipmentCreateManyInput = {
  Package: ShipmentPackageManyRelationInput;
  client_id?: InputMaybe<ShipmentClient_IdManyRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Shipment delete input */
export type ShipmentDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ShipmentFieldsPermissions create input */
export type ShipmentFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  destination?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShipmentFilter = {
  AND?: InputMaybe<Array<ShipmentFilter>>;
  OR?: InputMaybe<Array<ShipmentFilter>>;
  Package?: InputMaybe<PackageRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<ClientFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  destination?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  origin?: InputMaybe<StringPredicate>;
  priority?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ShipmentGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ShipmentGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ShipmentGroupByQuery = {
  Package?: InputMaybe<PackageGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  client_id?: InputMaybe<ClientGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  destination?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  origin?: InputMaybe<Array<GroupByField>>;
  priority?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ShipmentKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ShipmentListResponse output */
export type ShipmentListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Shipment>;
};

/** ShipmentManyResponse output */
export type ShipmentManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Shipment>;
};

/** No longer supported. Use `sort` instead. */
export enum ShipmentOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Shipment relation input */
export type ShipmentPackageManyRelationInput = {
  connect?: InputMaybe<Array<PackageKeyFilter>>;
};

/** Shipment relation input */
export type ShipmentPackageRelationInput = {
  connect?: InputMaybe<Array<PackageKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageCreateInput>>>;
};

/** Shipment relation input */
export type ShipmentPackageUpdateRelationInput = {
  connect?: InputMaybe<Array<PackageKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageCreateInput>>>;
  disconnect?: InputMaybe<Array<PackageKeyFilter>>;
  reconnect?: InputMaybe<Array<PackageKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Shipment_Id_PackageUpdateInput>>>;
};

/** Shipment subscription payload */
export type ShipmentPayload = {
  mutation: MutationType;
  node?: Maybe<Shipment>;
  previousValues?: Maybe<Shipment>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ShipmentSort = {
  client_id?: InputMaybe<ClientSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  destination?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  origin?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Shipment subscription filter */
export type ShipmentSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ShipmentFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Shipment update input */
export type ShipmentUpdateByFilterInput = {
  destination?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  priority?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Shipment update input */
export type ShipmentUpdateInput = {
  Package?: InputMaybe<ShipmentPackageUpdateRelationInput>;
  client_id?: InputMaybe<ShipmentClient_IdUpdateRelationInput>;
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
};

/** Client create input from Shipment */
export type Shipment_ClientCreateInput = {
  Shipment?: InputMaybe<ClientShipmentRelationInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>;
  primary_contact?: InputMaybe<Scalars['String']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['String']['input']>;
};

/** Client update input from Shipment */
export type Shipment_ClientUpdateInput = {
  Shipment?: InputMaybe<ClientShipmentUpdateRelationInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  preferred_shipping_methods?: InputMaybe<Scalars['String']['input']>;
  primary_contact?: InputMaybe<Scalars['String']['input']>;
  special_handling_instructions?: InputMaybe<Scalars['String']['input']>;
};

export type Shipment_PermissionFilter = {
  AND?: InputMaybe<Array<Shipment_PermissionFilter>>;
  OR?: InputMaybe<Array<Shipment_PermissionFilter>>;
  Package?: InputMaybe<Package_PermissionRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Client_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  destination?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  origin?: InputMaybe<StringPredicate>;
  priority?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Package create input from shipment_id */
export type Shipment_Id_PackageCreateInput = {
  StatusUpdate: PackageStatusUpdateRelationInput;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

/** Package update input from shipment_id */
export type Shipment_Id_PackageUpdateInput = {
  data: PackageUpdateInput;
  filter?: InputMaybe<PackageKeyFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String']['input'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatusUpdate = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  package_id?: Maybe<Package>;
  status?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** StatusUpdate create input */
export type StatusUpdateCreateInput = {
  package_id?: InputMaybe<StatusUpdatePackage_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

/** StatusUpdate create many input */
export type StatusUpdateCreateManyInput = {
  package_id?: InputMaybe<StatusUpdatePackage_IdManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

/** StatusUpdate delete input */
export type StatusUpdateDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** StatusUpdateFieldsPermissions create input */
export type StatusUpdateFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StatusUpdateFilter = {
  AND?: InputMaybe<Array<StatusUpdateFilter>>;
  OR?: InputMaybe<Array<StatusUpdateFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  package_id?: InputMaybe<PackageFilter>;
  status?: InputMaybe<StringPredicate>;
  timestamp?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type StatusUpdateGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: StatusUpdateGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type StatusUpdateGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  package_id?: InputMaybe<PackageGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timestamp?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type StatusUpdateKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** StatusUpdateListResponse output */
export type StatusUpdateListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<StatusUpdate>;
};

/** StatusUpdateManyResponse output */
export type StatusUpdateManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<StatusUpdate>;
};

/** No longer supported. Use `sort` instead. */
export enum StatusUpdateOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** StatusUpdate relation input */
export type StatusUpdatePackage_IdManyRelationInput = {
  connect?: InputMaybe<PackageKeyFilter>;
};

/** StatusUpdate relation input */
export type StatusUpdatePackage_IdRelationInput = {
  connect?: InputMaybe<PackageKeyFilter>;
  create?: InputMaybe<StatusUpdate_PackageCreateInput>;
};

/** StatusUpdate relation input */
export type StatusUpdatePackage_IdUpdateRelationInput = {
  connect?: InputMaybe<PackageKeyFilter>;
  create?: InputMaybe<StatusUpdate_PackageCreateInput>;
  disconnect?: InputMaybe<PackageKeyFilter>;
  reconnect?: InputMaybe<PackageKeyFilter>;
  update?: InputMaybe<StatusUpdate_PackageUpdateInput>;
};

/** StatusUpdate subscription payload */
export type StatusUpdatePayload = {
  mutation: MutationType;
  node?: Maybe<StatusUpdate>;
  previousValues?: Maybe<StatusUpdate>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type StatusUpdateRelationFilter = {
  every?: InputMaybe<StatusUpdateFilter>;
  none?: InputMaybe<StatusUpdateFilter>;
  some?: InputMaybe<StatusUpdateFilter>;
};

export type StatusUpdateSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  package_id?: InputMaybe<PackageSort>;
  status?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** StatusUpdate subscription filter */
export type StatusUpdateSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<StatusUpdateFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** StatusUpdate update input */
export type StatusUpdateUpdateByFilterInput = {
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** StatusUpdate update input */
export type StatusUpdateUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  package_id?: InputMaybe<StatusUpdatePackage_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Package create input from StatusUpdate */
export type StatusUpdate_PackageCreateInput = {
  StatusUpdate?: InputMaybe<PackageStatusUpdateRelationInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

/** Package update input from StatusUpdate */
export type StatusUpdate_PackageUpdateInput = {
  StatusUpdate?: InputMaybe<PackageStatusUpdateUpdateRelationInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  shipment_id?: InputMaybe<PackageShipment_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

export type StatusUpdate_PermissionFilter = {
  AND?: InputMaybe<Array<StatusUpdate_PermissionFilter>>;
  OR?: InputMaybe<Array<StatusUpdate_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  package_id?: InputMaybe<Package_PermissionFilter>;
  status?: InputMaybe<StringPredicate>;
  timestamp?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type StatusUpdate_PermissionRelationFilter = {
  every?: InputMaybe<StatusUpdate_PermissionFilter>;
  none?: InputMaybe<StatusUpdate_PermissionFilter>;
  some?: InputMaybe<StatusUpdate_PermissionFilter>;
};

export type StringPadFunctionArguments = {
  len: Scalars['Int']['input'];
  str: Scalars['String']['input'];
};

export type StringPredicate = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StringPredicateHaving = {
  AND?: InputMaybe<Array<StringPredicateHaving>>;
  OR?: InputMaybe<Array<StringPredicateHaving>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  Analytics?: Maybe<AnalyticPayload>;
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  Client?: Maybe<ClientPayload>;
  Driver?: Maybe<DriverPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Files?: Maybe<FilePayload>;
  FilesSettings?: Maybe<FilesSettingPayload>;
  Notification?: Maybe<NotificationPayload>;
  Package?: Maybe<PackagePayload>;
  Permissions?: Maybe<PermissionPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  Shipment?: Maybe<ShipmentPayload>;
  StatusUpdate?: Maybe<StatusUpdatePayload>;
  Users?: Maybe<UserPayload>;
};


export type SubscriptionAnalyticsArgs = {
  filter?: InputMaybe<AnalyticSubscriptionFilter>;
};


export type SubscriptionApiTokensArgs = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionClientArgs = {
  filter?: InputMaybe<ClientSubscriptionFilter>;
};


export type SubscriptionDriverArgs = {
  filter?: InputMaybe<DriverSubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: InputMaybe<FileSubscriptionFilter>;
};


export type SubscriptionFilesSettingsArgs = {
  filter?: InputMaybe<FilesSettingSubscriptionFilter>;
};


export type SubscriptionNotificationArgs = {
  filter?: InputMaybe<NotificationSubscriptionFilter>;
};


export type SubscriptionPackageArgs = {
  filter?: InputMaybe<PackageSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: InputMaybe<PermissionSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: InputMaybe<RoleSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: InputMaybe<SettingSubscriptionFilter>;
};


export type SubscriptionShipmentArgs = {
  filter?: InputMaybe<ShipmentSubscriptionFilter>;
};


export type SubscriptionStatusUpdateArgs = {
  filter?: InputMaybe<StatusUpdateSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: InputMaybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  len?: InputMaybe<Scalars['Int']['input']>;
  pos: Scalars['Int']['input'];
};

export type SuccessResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessWithMessageResponse = {
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

export type SystemAiIdeasInput = {
  examples?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Application */
export type SystemApplication = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

export type SystemAsyncSessionStatusResponse = {
  result?: Maybe<Scalars['JSON']['output']>;
  status: Scalars['String']['output'];
};

export type SystemAuthProfile = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemAuthenticationInfo = {
  authProfile?: Maybe<Array<Maybe<SystemAuthProfile>>>;
  environmentId?: Maybe<Scalars['String']['output']>;
  environmentName?: Maybe<Scalars['String']['output']>;
};

export type SystemBackendUtilizationResponse = {
  authProfiles?: Maybe<Scalars['Int']['output']>;
  databaseRows?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['Int']['output']>;
  fileStorageSize?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  tables?: Maybe<Scalars['Int']['output']>;
};

export type SystemBasicSectionConfigurationForPromptExecutionResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
};

export type SystemBasicSectionConfigurationItem = {
  criteria: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enabledWith8base?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SystemBasicSectionConfigurationResponse = {
  application_classification?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  building_blocks?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  commercialization_model?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
};

export type SystemBillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<SystemBillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SystemWorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum SystemBillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemBillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemBillingDetailsOrigin;
};

export type SystemBillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  project?: Maybe<SystemBillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricUsageItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  overage?: Maybe<SystemBillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

export type SystemCacheEvictResponse = {
  evicted: Array<Maybe<Scalars['String']['output']>>;
};

export type SystemChangePlanIdeaMutationInput = {
  archieId: Scalars['ID']['input'];
  couponId?: InputMaybe<Scalars['String']['input']>;
  couponName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  newPlan: Scalars['String']['input'];
};

export type SystemChangeRoleIdeaMemberMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
  role: InvitationRoleEnum;
};

export type SystemChangeRoleIdeaMutationInputList = {
  recipients: Array<SystemChangeRoleIdeaMemberMutationInput>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  migrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Scalars['String']['output'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry = {
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** Delete Member From Organization Response */
export type SystemDeleteArchieMemberFromOrganizationResponse = {
  success: Scalars['Boolean']['output'];
};

export type SystemDeleteIdeaMutationInput = {
  id: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInputList = {
  members: Array<SystemDeleteMemberIdeaMutationInput>;
};

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemDeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<SystemDeployOptions>;
};

export type SystemDeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type SystemDeploymentProjectItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
};

/** SystemDeploymentProjectListResponse output */
export type SystemDeploymentProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemDeploymentProjectItemResponse>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  registeredAt?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String']['output'];
};

export type SystemEnvironmentMemberAvatar = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemEnvironmentMemberRolesList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberStatusFilterPredicate = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String']['input'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
  status?: InputMaybe<SystemEnvironmentMemberStatusFilterPredicate>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isOwner?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type SystemEnvironmentProjectItem = {
  fields?: Maybe<Scalars['String']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables?: Maybe<Scalars['String']['output']>;
  worksApiHost?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['ID']['output'];
  workspaceName: Scalars['String']['output'];
};

export enum SystemEnvironmentRelationModeEnum {
  ForeignKey = 'ForeignKey',
  Pivot = 'Pivot'
}

export type SystemEnvironmentRoleBaseInfo = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentRoleList = {
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  environmentId: Scalars['String']['output'];
  environmentName: Scalars['String']['output'];
  exists?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  deleteLock?: Maybe<Scalars['Boolean']['output']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum>;
  introspection?: Maybe<Scalars['Boolean']['output']>;
  relationMode?: Maybe<SystemEnvironmentRelationModeEnum>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** SystemEnvironmentsProjectListResponse output */
export type SystemEnvironmentsProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentProjectItem>;
};

export type SystemExportIdeaToDocumentInput = {
  advancedConsiderations?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServices?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServicesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  designGeneral?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  modules?: InputMaybe<Scalars['Boolean']['input']>;
  modulesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['Boolean']['input']>;
  screens?: InputMaybe<Scalars['Boolean']['input']>;
  siteMap?: InputMaybe<Scalars['Boolean']['input']>;
  userTypes?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemExportIdeaToDocumentResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
  documentType: Scalars['String']['output'];
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemFileBaseInfo = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export enum SystemFileManagerProviderTypeEnum {
  Aws = 'aws',
  Filestack = 'filestack',
  Uploadcare = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput = {
  url: Scalars['String']['input'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse = {
  fileId: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
};

export type SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse;

export type SystemFrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

export type SystemFrontendUtilizationResponse = {
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type SystemFunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<SystemFunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

export type SystemGetCouponResponse = {
  amount_off?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['String']['output'];
  duration_in_months: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent_off?: Maybe<Scalars['Float']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type SystemGetInvitationIdeaResponse = {
  archieId: Scalars['ID']['output'];
  ideaId: Scalars['ID']['output'];
  invitationId: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
  role: InvitationRoleEnum;
  status: Scalars['String']['output'];
};

export type SystemGraphQlArchitecturesResponse = {
  enabling_technologies?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  infrastructure_diagram?: Maybe<Scalars['JSON']['output']>;
  integrations?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBlueprintResponse = {
  ai_enablement_ideas?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  building_blocks?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  design_preview?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  insights?: Maybe<Scalars['JSON']['output']>;
  modules?: Maybe<Scalars['JSON']['output']>;
  originalPrompt?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  user_types?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksResponse = {
  buildingBlocksRequirements?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksRequirementsResponse>>>;
  checked?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlBuildingBlocksScreensResponse = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  screensWireframes?: Maybe<Array<Maybe<SystemGraphQlScreensWireFramesResponse>>>;
  status?: Maybe<Scalars['String']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlFeaturesBreakdownResponse = {
  functionality?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  technicalRequirements?: Maybe<Scalars['JSON']['output']>;
  userInterfaces?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  modulesRequirements?: Maybe<Array<Maybe<SystemGraphQlModulesRequirementsResponse>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  uiPattern?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlOverviewResponse = {
  accessibility_requirements?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  compliance_requirements?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  performance_requirements?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  security_requirements?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlScreensWireFramesResponse = {
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlSectionResultRegenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  idea: Scalars['ID']['input'];
  instructions?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
  sectionCategoriesWithIds?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemGraphQlUserAccountsResponse = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserInterfacesResponse = {
  requirements_design_guidelines?: Maybe<Scalars['JSON']['output']>;
  requirements_site_map?: Maybe<Scalars['JSON']['output']>;
  requirements_ui_ux_general?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  wireframe_layout?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlUserTypeDetailsResponse = {
  comprehensive_needs?: Maybe<Scalars['JSON']['output']>;
  comprehensive_painpoints?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypeUseCaseResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  deviceusages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  softwareproficiency?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userTypesDetails?: Maybe<Array<Maybe<SystemGraphQlUserTypeDetailsResponse>>>;
  userTypesUseCases?: Maybe<Array<Maybe<SystemGraphQlUserTypeUseCaseResponse>>>;
};

export type SystemIdeaDetailsResponse = {
  archieId: Scalars['ID']['output'];
  architectures?: Maybe<Array<Maybe<SystemGraphQlArchitecturesResponse>>>;
  blueprints?: Maybe<Array<Maybe<SystemGraphQlBlueprintResponse>>>;
  buildingBlocks?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksResponse>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  elevatorDescription?: Maybe<Scalars['String']['output']>;
  executedDesign?: Maybe<Scalars['Boolean']['output']>;
  featuresBreakdown?: Maybe<Array<Maybe<SystemGraphQlFeaturesBreakdownResponse>>>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Maybe<SystemIdeaInvitationBaseResponse>>>;
  isDemoProject?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<Maybe<SystemIdeaMemberBaseResponse>>>;
  modules?: Maybe<Array<Maybe<SystemGraphQlModulesResponse>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  overviews?: Maybe<Array<Maybe<SystemGraphQlOverviewResponse>>>;
  owner?: Maybe<SystemMemberAccountInfo>;
  ownerType?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<SystemPlanInfoIdea>;
  progress: Scalars['Float']['output'];
  requirementsDescription?: Maybe<Scalars['String']['output']>;
  screens?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksScreensResponse>>>;
  technicalDesign?: Maybe<SystemTechnicalDesignResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaces?: Maybe<Array<Maybe<SystemGraphQlUserInterfacesResponse>>>;
  userTypes?: Maybe<Array<Maybe<SystemGraphQlUserTypesResponse>>>;
};

export type SystemIdeaGeneralCreateMutationInput = {
  description: Scalars['String']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaGeneralResponse = {
  archieId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
};

export type SystemIdeaGeneralUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  elevatorDescription?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaGraphQlSchema = {
  schema: Scalars['String']['output'];
};

export type SystemIdeaImproveMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaImproveResponse = {
  suggestion: Scalars['String']['output'];
};

export type SystemIdeaImproveWithAiMutationInput = {
  aiIdeas?: InputMaybe<Array<InputMaybe<SystemAiIdeasInput>>>;
  archieId: Scalars['ID']['input'];
};

export type SystemIdeaImproveWithAiResponse = {
  expectedBenefits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  kpis?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statement: Scalars['String']['output'];
};

export type SystemIdeaInvitationBaseResponse = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

/** Idea Invitation Member */
export type SystemIdeaInvitationMember = {
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userAccounts?: Maybe<SystemGraphQlUserAccountsResponse>;
};

export type SystemIdeaItemOrganizationMember = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  nextStep?: Maybe<Scalars['String']['output']>;
  nickName: Scalars['String']['output'];
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SystemIdeaItemRespSingle = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>;
  members?: Maybe<Array<Maybe<SystemMemberAccountInfo>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  owner?: Maybe<SystemMemberAccountInfo>;
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** SystemIdeaItemResponse output */
export type SystemIdeaItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemIdeaItemRespSingle>;
};

export type SystemIdeaMemberBaseResponse = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  onboardingStatus: Scalars['JSON']['output'];
  organizationId: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

export type SystemIdeaUserResponse = {
  ideas: SystemIdeaItemResponse;
};

export type SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  environmentName?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  project?: Maybe<SystemInboxEventProject>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventItem = {
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventNotificationDetailsType = {
  details?: Maybe<Scalars['JSON']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganization = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProject = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent'
}

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  Notification = 'Notification',
  OrganizationInvitation = 'OrganizationInvitation'
}

export type SystemInboxEventWorkspace = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

/** Idea Invitation Accept/Cancel Response */
export type SystemInvitationAcceptCancelResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation accept/Cancel input */
export type SystemInvitationIdeaAcceptCancelInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Idea Invitation Cancel Response */
export type SystemInvitationIdeaResendResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation cancel input */
export type SystemInvitationIdeaResendlInput = {
  id: Scalars['String']['input'];
};

/** Invite recipient input */
export type SystemInviteIdeaRecipientInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['String']['input'];
  organizationUserId?: InputMaybe<Scalars['String']['input']>;
  role: RoleEnum;
};

/** Invite idea input */
export type SystemInviteMembersIdeaInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<SystemInviteIdeaRecipientInput>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails = {
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemMemberAccountDeleteResponse = {
  details?: Maybe<SystemMemberAccountDeleteDetails>;
  success: Scalars['Boolean']['output'];
};

export type SystemMemberAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  archieRole?: InputMaybe<Scalars['String']['input']>;
  authCreateMethod?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  intendedUse?: InputMaybe<Scalars['String']['input']>;
  isADemoUser?: InputMaybe<Scalars['Boolean']['input']>;
  isArchieAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganizationOwner?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  learningMode?: InputMaybe<Scalars['Boolean']['input']>;
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  onboardingStatus?: InputMaybe<Scalars['JSON']['input']>;
  organizationCreatorRole?: InputMaybe<Scalars['String']['input']>;
  organizationKind?: InputMaybe<Scalars['String']['input']>;
  organizationNeed?: InputMaybe<Scalars['String']['input']>;
  organizationSize?: InputMaybe<Scalars['String']['input']>;
  projectDescription?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sourceAccount?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemUserType>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type SystemMemberArchieInviteOrganizationInput = {
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberChangeOrganizationRoleInput = {
  id: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Response */
export type SystemMemberChangeOrganizationRoleResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Invitation */
export type SystemMemberInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  success: Scalars['Boolean']['output'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String']['input'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID']['input'];
};

export type SystemMemberInvitationsList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

export type SystemMemberOrganizationAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ideas?: Maybe<Array<Maybe<SystemIdeaItemOrganizationMember>>>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationInviteMutationInput = {
  ideaId?: InputMaybe<Scalars['String']['input']>;
  ideaRole?: InputMaybe<Scalars['String']['input']>;
  invitedByName: Scalars['String']['input'];
  members?: InputMaybe<Array<InputMaybe<SystemMemberArchieInviteOrganizationInput>>>;
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationResendInviteMutationInput = {
  email: Scalars['String']['input'];
  invitedByName: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']['input']>;
};

/** Member Resend Verify Account Email Response */
export type SystemMemberResendVerifyAccountEmailResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Resend Verify Account Email input */
export type SystemMemberResendVerifyAccountEmaillInput = {
  email: Scalars['String']['input'];
};

export type SystemMembersAccountList = {
  items?: Maybe<Array<Maybe<SystemMemberOrganizationAccountInfo>>>;
};

export type SystemMembersIdeaList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemIdeaInvitationMember>>>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type SystemMutation = {
  ExportIdeaToDocument?: Maybe<SystemExportIdeaToDocumentResponse>;
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  changePlanIdea?: Maybe<SystemBillingCurrentPlanResponse>;
  changeRoleIdeaInvitation?: Maybe<SuccessResponse>;
  changeRoleIdeaMember?: Maybe<SuccessResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  createOrganizationSettingsTech: SystemOrganizationSettingsTech;
  deleteArchieMemberFromOrganization: SystemDeleteArchieMemberFromOrganizationResponse;
  deleteIdea?: Maybe<SuccessResponse>;
  deleteMemberIdea?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  fileUploadByUrl: SystemFileUploadByUrlResponse;
  ideaImprove?: Maybe<SystemIdeaImproveResponse>;
  ideaImproveWithAI?: Maybe<SystemIdeaImproveWithAiResponse>;
  ideaTransferOwner?: Maybe<SuccessResponse>;
  ideaUserCreate?: Maybe<SystemIdeaGeneralResponse>;
  ideaUserUpdate?: Maybe<SystemIdeaGeneralResponse>;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  invitationIdeaAcceptCancel: SystemInvitationAcceptCancelResponse;
  invitationIdeaResend: SystemInvitationIdeaResendResponse;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  inviteToIdea?: Maybe<SuccessResponse>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberChangeOrganizationRole: SystemMemberChangeOrganizationRoleResponse;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  memberResendVerifyAccountEmail: SystemMemberResendVerifyAccountEmailResponse;
  notificationUpdate?: Maybe<SuccessResponse>;
  onboardingUpdate?: Maybe<SystemMemberAccountInfo>;
  organizationArchieUpgrade?: Maybe<OrganizationUpgradeResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationMemberInvite?: Maybe<SuccessResponse>;
  organizationMemberResendInvite?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationProjectUserRemove?: Maybe<SuccessResponse>;
  organizationProjectUserShare?: Maybe<SuccessResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo>;
  partnerCreate?: Maybe<SystemPartnerGeneralResponse>;
  postMessageToQueue?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  projectCreate?: Maybe<AsyncSession>;
  projectDelete?: Maybe<AsyncSession>;
  projectLeave?: Maybe<SuccessResponse>;
  projectUpdate?: Maybe<SystemProjectUpdateResponse>;
  removeOrganizationSettingsTech: SuccessResponse;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse>;
  sectionResultCreate?: Maybe<SystemSectionResultResponse>;
  sectionResultGenerate?: Maybe<SuccessResponse>;
  sectionResultPropagate?: Maybe<SuccessResponse>;
  sectionResultRegenerate?: Maybe<SuccessResponse>;
  sectionResultUpdate?: Maybe<SuccessResponse>;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  updateOrganizationSettings: SystemOrganizationSettings;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationExportIdeaToDocumentArgs = {
  data: SystemExportIdeaToDocumentInput;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingContextCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
  projectKeys: Array<Scalars['String']['input']>;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationChangePlanIdeaArgs = {
  data: SystemChangePlanIdeaMutationInput;
};


export type SystemMutationChangeRoleIdeaInvitationArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationChangeRoleIdeaMemberArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationCiCommitArgs = {
  build?: InputMaybe<Scalars['String']['input']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemCiCommitMode>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationCreateOrganizationSettingsTechArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationSettingsId: Scalars['ID']['input'];
};


export type SystemMutationDeleteArchieMemberFromOrganizationArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationDeleteIdeaArgs = {
  data: SystemDeleteIdeaMutationInput;
};


export type SystemMutationDeleteMemberIdeaArgs = {
  data: SystemDeleteMemberIdeaMutationInputList;
};


export type SystemMutationDeployArgs = {
  data?: InputMaybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentBranchArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<SystemBranchEnvironmentMode>;
  name: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String']['input'];
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: InputMaybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationFileUploadByUrlArgs = {
  data: SystemFileUploadByUrlInput;
};


export type SystemMutationIdeaImproveArgs = {
  data: SystemIdeaImproveMutationInput;
};


export type SystemMutationIdeaImproveWithAiArgs = {
  data: SystemIdeaImproveWithAiMutationInput;
};


export type SystemMutationIdeaTransferOwnerArgs = {
  data: SystemTransferIdeaOwnerMutationInput;
};


export type SystemMutationIdeaUserCreateArgs = {
  data: SystemIdeaGeneralCreateMutationInput;
};


export type SystemMutationIdeaUserUpdateArgs = {
  data: SystemIdeaGeneralUpdateMutationInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInvitationIdeaAcceptCancelArgs = {
  data: SystemInvitationIdeaAcceptCancelInput;
};


export type SystemMutationInvitationIdeaResendArgs = {
  data: SystemInvitationIdeaResendlInput;
};


export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationInviteToIdeaArgs = {
  data: SystemInviteMembersIdeaInput;
};


export type SystemMutationInvokeArgs = {
  data?: InputMaybe<SystemInvokeData>;
};


export type SystemMutationMemberAccountUpsertArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationMemberChangeOrganizationRoleArgs = {
  data: SystemMemberChangeOrganizationRoleInput;
};


export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};


export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};


export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};


export type SystemMutationMemberResendVerifyAccountEmailArgs = {
  data: SystemMemberResendVerifyAccountEmaillInput;
};


export type SystemMutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  status: NotificationStatusType;
};


export type SystemMutationOnboardingUpdateArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationOrganizationArchieUpgradeArgs = {
  data: SystemOrganizationUpgradeMutationInput;
};


export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  projectRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectWithEnvironmentRolesInput>>>;
  role: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationMemberInviteArgs = {
  data: SystemMemberOrganizationInviteMutationInput;
};


export type SystemMutationOrganizationMemberResendInviteArgs = {
  data: SystemMemberOrganizationResendInviteMutationInput;
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};


export type SystemMutationOrganizationProjectUserRemoveArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationProjectUserShareArgs = {
  email: Scalars['String']['input'];
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemOrganizationTypeEnum>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationUserUpdateArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};


export type SystemMutationPartnerCreateArgs = {
  data: SystemPartnerGeneralCreateMutationInput;
};


export type SystemMutationPostMessageToQueueArgs = {
  data: SystemPostMessageToQueueInput;
};


export type SystemMutationProjectCreateArgs = {
  data: SystemProjectCreateMutationInput;
};


export type SystemMutationProjectDeleteArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectLeaveArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectUpdateArgs = {
  data: SystemProjectUpdateMutationInput;
};


export type SystemMutationRemoveOrganizationSettingsTechArgs = {
  organizationSettingsTechId: Scalars['ID']['input'];
};


export type SystemMutationRolePermissionsCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type SystemMutationSectionResultCreateArgs = {
  data: SystemSectionResultCreateMutationInput;
};


export type SystemMutationSectionResultGenerateArgs = {
  data: SystemSectionResultGenerateMutationInput;
};


export type SystemMutationSectionResultPropagateArgs = {
  data: SystemSectionResultPropagateUpdateMutationInput;
};


export type SystemMutationSectionResultRegenerateArgs = {
  data: SystemGraphQlSectionResultRegenerateMutationInput;
};


export type SystemMutationSectionResultUpdateArgs = {
  data: SystemSectionResultUpdateMutationInput;
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationUpdateOrganizationSettingsArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isWhiteLabelActive?: InputMaybe<Scalars['Boolean']['input']>;
  statementOfWork?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationArchieBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  isOrganizationOwner: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationCreatorRole?: Maybe<Scalars['String']['output']>;
  organizationKind?: Maybe<Scalars['String']['output']>;
  organizationSize?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String']['output'];
};

export type SystemOrganizationItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

/** environmentId to add to with roles (array of ids). */
export type SystemOrganizationProjectEnvironmentRolesInput = {
  environmentId: Scalars['String']['input'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SystemOrganizationProjectItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationProjectWithEnvironmentRolesInput = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};

/** Representation of a organization settings. */
export type SystemOrganizationSettings = {
  id: Scalars['ID']['output'];
  /** Flag to indicate if white label is active. */
  isWhiteLabelActive?: Maybe<Scalars['Boolean']['output']>;
  /** Statement of work defined by the organization. */
  statementOfWork?: Maybe<Scalars['String']['output']>;
  /** Stack of technologies defined by the organization. */
  techStack: Array<SystemOrganizationSettingsTech>;
  /** White label image defined by the organization. */
  whiteLabelImage?: Maybe<SystemFileBaseInfo>;
};

/** Representation of a organization settings technology. */
export type SystemOrganizationSettingsTech = {
  /** Description of the tech stack. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the given tech stack, example "React". */
  name: Scalars['String']['output'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company',
  Individual = 'individual'
}

/** Organization Upgrade Input */
export type SystemOrganizationUpgradeMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  licenseId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationCreatorRole: Scalars['String']['input'];
  organizationKind: Scalars['String']['input'];
  organizationSize: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type SystemOrganizationUserInfo = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<SystemOrganizationProjectItem>>>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SystemOrganizationWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

/** SystemOrganizationsListArchieResponse output */
export type SystemOrganizationsListArchieResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationArchieBaseItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationBaseItem>;
};

export type SystemPartnerGeneralCreateMutationInput = {
  anythingElse?: InputMaybe<Scalars['String']['input']>;
  blueprintUrl: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  location: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SystemPartnerGeneralResponse = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type SystemPartnerItemRespSingle = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** SystemPartnerItemResponse output */
export type SystemPartnerItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPartnerItemRespSingle>;
};

export type SystemPartnerResponse = {
  partners: SystemPartnerItemResponse;
};

export enum SystemPaymentDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export enum SystemPaymentDetailsOriginProject {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemPaymentDetailsProjectResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SystemPaymentDetailsOriginProject>;
};

export type SystemPaymentDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemPaymentDetailsOrigin;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

export type SystemPlanForIdeaQueryResponse = {
  id?: Maybe<Scalars['ID']['output']>;
};

export type SystemPlanInfoIdea = {
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  planName?: Maybe<Scalars['String']['output']>;
};

export type SystemPostMessageToQueueInput = {
  message?: InputMaybe<Scalars['JSON']['input']>;
  routingKey?: InputMaybe<Scalars['String']['input']>;
};

/** ProjectCreateMutationInput */
export type SystemProjectCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  billingPlanId?: InputMaybe<Scalars['ID']['input']>;
  cardToken?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  ideaId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemProjectDeploymentsResponse = {
  deploymentsProject?: Maybe<SystemDeploymentProjectListResponse>;
};

export type SystemProjectFrontendResponse = {
  frontendUtilization?: Maybe<SystemFrontendUtilizationResponse>;
  frontendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
};

export type SystemProjectImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectItemRespSingle = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

/** SystemProjectItemResponse output */
export type SystemProjectItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectItemRespSingle>;
};

export type SystemProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectPlanResponse = {
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
};

export type SystemProjectQuotasResponse = {
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
};

/** ProjectUpdateMutationInput */
export type SystemProjectUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemProjectUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectUserDetailsResponse = {
  apiHost: Scalars['String']['output'];
  authenticationInfo?: Maybe<Array<Maybe<SystemAuthenticationInfo>>>;
  backendUtilization?: Maybe<SystemBackendUtilizationResponse>;
  backendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  environmentsProject?: Maybe<SystemEnvironmentsProjectListResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind: Scalars['String']['output'];
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<SystemMemberAccountInfo>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemProjectUserResponse = {
  myProjects: SystemProjectItemResponse;
  sharedProjects: SystemProjectItemResponse;
};

export type SystemPromptItemRespSingle = {
  basicSectionConfiguration?: Maybe<Scalars['JSON']['output']>;
  dependsOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  inputVariables: Scalars['JSON']['output'];
  iterableConfig?: Maybe<Scalars['JSON']['output']>;
  modelId: Scalars['ID']['output'];
  modelName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  outputSchema: Scalars['JSON']['output'];
  package: Scalars['String']['output'];
  sectionCategory?: Maybe<Scalars['String']['output']>;
  templateBody: Scalars['String']['output'];
};

/** SystemPromptItemResponse output */
export type SystemPromptItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPromptItemRespSingle>;
};

export type SystemPromptsResponse = {
  prompts: SystemPromptItemResponse;
};

export type SystemQuery = {
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse>;
  basicSectionConfigurationForPromptQuery?: Maybe<SystemBasicSectionConfigurationForPromptExecutionResponse>;
  basicSectionConfigurationQuery?: Maybe<SystemBasicSectionConfigurationResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  ciGenerateAsync?: Maybe<AsyncSession>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  ensureOrganizationSettings: SystemOrganizationSettings;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  functionsVersionCheck?: Maybe<SystemFunctionInfoCheck>;
  getCouponQuery?: Maybe<SystemGetCouponResponse>;
  getCurrentPlanForIdeaQuery?: Maybe<SystemPlanForIdeaQueryResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getInvitationIdeaQuery?: Maybe<SystemGetInvitationIdeaResponse>;
  ideaDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideaGraphQLSchemaQuery: SystemIdeaGraphQlSchema;
  ideaMembers?: Maybe<SystemMembersIdeaList>;
  ideaSectionDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideasDemoListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasUserListQuery?: Maybe<SystemIdeaUserResponse>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberAccountFromEmail?: Maybe<SystemMemberAccountInfo>;
  memberBillingHistory: SystemBillingInvoicesListResponse;
  memberFromOrganization?: Maybe<SystemMemberOrganizationAccountInfo>;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  membersByOrganization?: Maybe<SystemMembersAccountList>;
  organizationBillingHistory: SystemBillingInvoicesListResponse;
  organizationBillingPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationsListByArchieUser?: Maybe<SystemOrganizationsListArchieResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  partnerListQuery?: Maybe<SystemPartnerResponse>;
  projectDeployments?: Maybe<SystemProjectDeploymentsResponse>;
  projectFrontend?: Maybe<SystemProjectFrontendResponse>;
  projectInfoDetails?: Maybe<SystemProjectUserDetailsResponse>;
  projectPlan?: Maybe<SystemProjectPlanResponse>;
  projectQuotas?: Maybe<SystemProjectQuotasResponse>;
  projectsUserListQuery?: Maybe<SystemProjectUserResponse>;
  promptListQuery?: Maybe<SystemPromptsResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userBillingConfigurationArchie: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  viewDryRun?: Maybe<SystemViewDryRunOutput>;
  workspaceName?: Maybe<Scalars['String']['output']>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type SystemQueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiGenerateAsyncArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type SystemQueryEnsureOrganizationSettingsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryEnvironmentMemberArgs = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter>;
};


export type SystemQueryEnvironmentMembersListArgs = {
  environmentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<SystemEnvironmentMembersListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort>>;
};


export type SystemQueryEnvironmentsListArgs = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SystemFunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetCouponQueryArgs = {
  couponName: Scalars['String']['input'];
};


export type SystemQueryGetEnvironmentRolesArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryGetInvitationIdeaQueryArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryIdeaDetailsArgs = {
  demoMode?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
};


export type SystemQueryIdeaGraphQlSchemaQueryArgs = {
  ideaId: Scalars['ID']['input'];
};


export type SystemQueryIdeaMembersArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryIdeaSectionDetailsArgs = {
  ideaId: Scalars['ID']['input'];
  packageIdea: Scalars['ID']['input'];
  sectionCategory: Scalars['ID']['input'];
};


export type SystemQueryIdeasUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryInboxEventsListArgs = {
  filter?: InputMaybe<InboxEventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListFilteredArgs = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryMemberAccountFromEmailArgs = {
  email: Scalars['String']['input'];
};


export type SystemQueryMemberBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryMemberFromOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMembersByOrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryOrganizationBillingPlanArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryProjectDeploymentsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectFrontendArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectInfoDetailsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectPlanArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectQuotasArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectsUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryTablesListArgs = {
  filter?: InputMaybe<SystemTableListFilter>;
};


export type SystemQueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};


export type SystemQueryWorkspacePaymentDetailsArgs = {
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relation */
export type SystemRelation = {
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type SystemSectionResultCreateMutationInput = {
  archieId: Scalars['ID']['input'];
  composedPrompt: Scalars['JSON']['input'];
  content: Scalars['JSON']['input'];
  cost?: InputMaybe<Scalars['Float']['input']>;
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  failureReason?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isRegenerate?: InputMaybe<Scalars['Boolean']['input']>;
  lLMApiCalls?: InputMaybe<Scalars['Int']['input']>;
  modelId: Scalars['ID']['input'];
  package: Scalars['String']['input'];
  prompt: Scalars['ID']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategory: Scalars['String']['input'];
  status?: InputMaybe<SystemStatusIdea>;
  tokensInput?: InputMaybe<Scalars['Int']['input']>;
  tokensOutput?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemSectionResultGenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  contextData?: InputMaybe<Scalars['JSON']['input']>;
  idea: Scalars['ID']['input'];
  iterableID?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemSectionResultPropagateUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  content: Scalars['JSON']['input'];
  package: Scalars['String']['input'];
  sectionCategory: Scalars['String']['input'];
};

export type SystemSectionResultResponse = {
  sectionId: Scalars['ID']['output'];
  sectionResultId: Scalars['ID']['output'];
};

export type SystemSectionResultUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  overviewId?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** StatusIdea */
export enum SystemStatusIdea {
  Completed = 'Completed',
  Locked = 'Locked',
  NeedsAttention = 'NeedsAttention',
  Open = 'Open'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Table */
export type SystemTable = {
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<SystemTableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type SystemTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<SystemFieldType>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: SystemTable;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String']['input'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

export type SystemTechnicalDesignResponse = {
  baaSProjectId?: Maybe<Scalars['String']['output']>;
  customFunctions?: Maybe<Scalars['JSON']['output']>;
  dataModel?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type SystemTransferIdeaOwnerMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type SystemUserBillingConfigurationResponse = {
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  Corporation = 'Corporation',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** View Attributes */
export type SystemViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<SystemWorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemWorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type SystemWorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<SystemDeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  project?: Maybe<SystemProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<SystemFrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Table */
export type Table = {
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<TableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type TableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type TableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: Table;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type TableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String']['input'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type TableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type TrimFunctionArguments = {
  mode?: InputMaybe<StringTrimMode>;
  str: Scalars['String']['input'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByFilterJsonInput = {
  set?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByFilterListStringInput = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removeValue?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int']['input'];
  values: Array<Scalars['String']['input']>;
};

export type UpdateByFilterStringInput = {
  postfix?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadcareSignInfoResponse = {
  expire: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type User = {
  _description?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is8base?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  notification?: Maybe<Notification>;
  origin?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserPermissionList>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserPermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  availablePlans: Array<BillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** Users create input */
export type UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationRelationInput>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  avatar?: InputMaybe<UsersAvatarManyRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationManyRelationInput>;
  roles?: InputMaybe<UsersRolesManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  is8base?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<UserFilter>>;
  OR?: InputMaybe<Array<UserFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<FileFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  notification?: InputMaybe<NotificationFilter>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: InputMaybe<FileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  firstName?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is8base?: InputMaybe<Array<GroupByField>>;
  lastName?: InputMaybe<Array<GroupByField>>;
  notification?: InputMaybe<NotificationGroupByQuery>;
  origin?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Notification create input from userID */
export type UserId_NotificationCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  userID?: InputMaybe<NotificationUserIdRelationInput>;
};

/** Notification update input from userID */
export type UserId_NotificationUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  userID?: InputMaybe<NotificationUserIdUpdateRelationInput>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type UserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserListResponse output */
export type UserListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fromInvitation?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** User Permission */
export type UserPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

/** User Permission List */
export type UserPermissionList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserSort = {
  avatar?: InputMaybe<FileSort>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is8base?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  notification?: InputMaybe<NotificationSort>;
  origin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<UsersNotificationUpdateRelationInput>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type User_PermissionFilter = {
  AND?: InputMaybe<Array<User_PermissionFilter>>;
  OR?: InputMaybe<Array<User_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<File_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  notification?: InputMaybe<Notification_PermissionFilter>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: InputMaybe<User_PermissionFilter>;
  none?: InputMaybe<User_PermissionFilter>;
  some?: InputMaybe<User_PermissionFilter>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
  disconnect?: InputMaybe<FileKeyFilter>;
  reconnect?: InputMaybe<FileKeyFilter>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersNotificationManyRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
};

/** Users relation input */
export type UsersNotificationRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
  create?: InputMaybe<UserId_NotificationCreateInput>;
};

/** Users relation input */
export type UsersNotificationUpdateRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
  create?: InputMaybe<UserId_NotificationCreateInput>;
  disconnect?: InputMaybe<NotificationKeyFilter>;
  reconnect?: InputMaybe<NotificationKeyFilter>;
  update?: InputMaybe<UserId_NotificationUpdateInput>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String']['input'];
};

/** View Attributes */
export type ViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<WorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type WorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  name?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<DeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  project?: Maybe<ProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<FrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IsAllowedCallbackUrlQueryResponse = {
  isEnabled: Scalars['Boolean']['output'];
};
