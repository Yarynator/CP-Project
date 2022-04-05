// THIS FILE IS GENERATED, DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Clubhouse = {
  readonly ID: Scalars['String'];
};

export type Clubhouses = {
  readonly ID: Scalars['String'];
  readonly city: Scalars['String'];
  readonly description: Scalars['String'];
  readonly img: Scalars['String'];
  readonly name: Scalars['String'];
  readonly street: Scalars['String'];
  readonly web: Scalars['String'];
  readonly zip: Scalars['String'];
};

export enum Locale {
  CS = 'CS',
  EN = 'EN'
}

export type Mutation = {
  readonly updateProfile?: Maybe<User>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type Query = {
  readonly clubhouses: ReadonlyArray<Clubhouses>;
  readonly locales: ReadonlyArray<Locale>;
  readonly users: ReadonlyArray<User>;
};

export type UpdateProfileInput = {
  readonly locale?: InputMaybe<Locale>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type User = {
  readonly ID: Scalars['String'];
  readonly clubhouses?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email: Scalars['String'];
  readonly favourites?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name: Scalars['String'];
  readonly nickname?: Maybe<Scalars['String']>;
  readonly password: Scalars['String'];
  readonly surname: Scalars['String'];
};

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { readonly __typename: 'Query', readonly locales: ReadonlyArray<Locale> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { readonly __typename: 'Query', readonly users: ReadonlyArray<{ readonly __typename: 'User', readonly ID: string, readonly name: string, readonly surname: string, readonly nickname?: string | null | undefined, readonly email: string, readonly password: string, readonly clubhouses?: ReadonlyArray<string | null | undefined> | null | undefined, readonly favourites?: ReadonlyArray<string | null | undefined> | null | undefined }> };


export const LocalesDocument = gql`
    query locales {
  locales
}
    `;

/**
 * __useLocalesQuery__
 *
 * To run a query within a React component, call `useLocalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalesQuery(baseOptions?: Apollo.QueryHookOptions<LocalesQuery, LocalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocalesQuery, LocalesQueryVariables>(LocalesDocument, options);
      }
export function useLocalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocalesQuery, LocalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocalesQuery, LocalesQueryVariables>(LocalesDocument, options);
        }
export type LocalesQueryHookResult = ReturnType<typeof useLocalesQuery>;
export type LocalesLazyQueryHookResult = ReturnType<typeof useLocalesLazyQuery>;
export type LocalesQueryResult = Apollo.QueryResult<LocalesQuery, LocalesQueryVariables>;
export const UsersDocument = gql`
    query users {
  users {
    ID
    name
    surname
    nickname
    email
    password
    clubhouses
    favourites
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;