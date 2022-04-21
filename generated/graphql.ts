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

export type ClubhouseInput = {
  readonly ID: Scalars['String'];
  readonly city: Scalars['String'];
  readonly description: Scalars['String'];
  readonly img: Scalars['String'];
  readonly name: Scalars['String'];
  readonly street: Scalars['String'];
  readonly web: Scalars['String'];
  readonly zip: Scalars['String'];
};

export type Clubhouses = {
  readonly ID: Scalars['String'];
  readonly admins?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
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
  readonly addClubhouse?: Maybe<Clubhouse>;
  readonly registerUser?: Maybe<User>;
};


export type MutationAddClubhouseArgs = {
  input: ClubhouseInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterInput;
};

export type Query = {
  readonly clubhouses: ReadonlyArray<Clubhouses>;
  readonly locales: ReadonlyArray<Locale>;
  readonly users: ReadonlyArray<User>;
};

export type RegisterInput = {
  readonly ID: Scalars['String'];
  readonly clubhouses?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly email: Scalars['String'];
  readonly favourites?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly name: Scalars['String'];
  readonly nickname?: InputMaybe<Scalars['String']>;
  readonly password: Scalars['String'];
  readonly surname: Scalars['String'];
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

export type ClubhousesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClubhousesQuery = { readonly __typename: 'Query', readonly clubhouses: ReadonlyArray<{ readonly __typename: 'Clubhouses', readonly ID: string, readonly name: string, readonly img: string, readonly description: string, readonly web: string, readonly street: string, readonly city: string, readonly zip: string, readonly admins?: ReadonlyArray<string | null | undefined> | null | undefined }> };

export type RegisterUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  surname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  clubhouses?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  favourites?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type RegisterUserMutation = { readonly __typename: 'Mutation', readonly registerUser?: { readonly __typename: 'User', readonly ID: string, readonly name: string, readonly nickname?: string | null | undefined, readonly surname: string, readonly email: string, readonly password: string, readonly clubhouses?: ReadonlyArray<string | null | undefined> | null | undefined, readonly favourites?: ReadonlyArray<string | null | undefined> | null | undefined } | null | undefined };

export type AddClubhouseMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  img: Scalars['String'];
  description: Scalars['String'];
  web: Scalars['String'];
  street: Scalars['String'];
  city: Scalars['String'];
  zip: Scalars['String'];
}>;


export type AddClubhouseMutation = { readonly __typename: 'Mutation', readonly addClubhouse?: { readonly __typename: 'Clubhouse', readonly ID: string } | null | undefined };


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
export const ClubhousesDocument = gql`
    query clubhouses {
  clubhouses {
    ID
    name
    img
    description
    web
    street
    city
    zip
    admins
  }
}
    `;

/**
 * __useClubhousesQuery__
 *
 * To run a query within a React component, call `useClubhousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useClubhousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClubhousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useClubhousesQuery(baseOptions?: Apollo.QueryHookOptions<ClubhousesQuery, ClubhousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClubhousesQuery, ClubhousesQueryVariables>(ClubhousesDocument, options);
      }
export function useClubhousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClubhousesQuery, ClubhousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClubhousesQuery, ClubhousesQueryVariables>(ClubhousesDocument, options);
        }
export type ClubhousesQueryHookResult = ReturnType<typeof useClubhousesQuery>;
export type ClubhousesLazyQueryHookResult = ReturnType<typeof useClubhousesLazyQuery>;
export type ClubhousesQueryResult = Apollo.QueryResult<ClubhousesQuery, ClubhousesQueryVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($id: String!, $name: String!, $nickname: String, $surname: String!, $email: String!, $password: String!, $clubhouses: [String], $favourites: [String]) {
  registerUser(
    input: {ID: $id, name: $name, nickname: $nickname, surname: $surname, email: $email, password: $password, clubhouses: $clubhouses, favourites: $favourites}
  ) {
    ID
    name
    nickname
    surname
    email
    password
    clubhouses
    favourites
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      nickname: // value for 'nickname'
 *      surname: // value for 'surname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      clubhouses: // value for 'clubhouses'
 *      favourites: // value for 'favourites'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const AddClubhouseDocument = gql`
    mutation addClubhouse($id: String!, $name: String!, $img: String!, $description: String!, $web: String!, $street: String!, $city: String!, $zip: String!) {
  addClubhouse(
    input: {ID: $id, name: $name, img: $img, description: $description, web: $web, street: $street, city: $city, zip: $zip}
  ) {
    ID
  }
}
    `;
export type AddClubhouseMutationFn = Apollo.MutationFunction<AddClubhouseMutation, AddClubhouseMutationVariables>;

/**
 * __useAddClubhouseMutation__
 *
 * To run a mutation, you first call `useAddClubhouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddClubhouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addClubhouseMutation, { data, loading, error }] = useAddClubhouseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      img: // value for 'img'
 *      description: // value for 'description'
 *      web: // value for 'web'
 *      street: // value for 'street'
 *      city: // value for 'city'
 *      zip: // value for 'zip'
 *   },
 * });
 */
export function useAddClubhouseMutation(baseOptions?: Apollo.MutationHookOptions<AddClubhouseMutation, AddClubhouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddClubhouseMutation, AddClubhouseMutationVariables>(AddClubhouseDocument, options);
      }
export type AddClubhouseMutationHookResult = ReturnType<typeof useAddClubhouseMutation>;
export type AddClubhouseMutationResult = Apollo.MutationResult<AddClubhouseMutation>;
export type AddClubhouseMutationOptions = Apollo.BaseMutationOptions<AddClubhouseMutation, AddClubhouseMutationVariables>;