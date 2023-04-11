/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query loginPageUi {\n    loginPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      signupLink {\n        label\n        linkLabel\n        link\n      }\n      forgotPasswordLink {\n        label\n        link\n      }\n    }\n  }\n": types.LoginPageUiDocument,
    "\n  query productPageUi($input: ProductPageUiInput!) {\n    productPageUi(input: $input) {\n      ... on ProductPageUi {\n        __typename\n\n        productGallery {\n          images {\n            id\n            alt\n            url\n            height\n            width\n          }\n        }\n\n        productHeader {\n          title\n          variationName\n          size\n          price\n        }\n\n        productInfo {\n          descriptionTitle\n          description\n          variationTitle\n          variations {\n            id\n            variationName\n            color\n            colorHex\n            size\n          }\n        }\n\n        productForm {\n          quantityField {\n            label\n            min\n            max\n          }\n          submit {\n            label\n          }\n        }\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n    }\n  }\n": types.ProductPageUiDocument,
    "\n  query signupPageUI {\n    signupPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        firstname {\n          label\n          placeholder\n        }\n        lastname {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      loginLink {\n        label\n        linkLabel\n        link\n      }\n    }\n  }\n": types.SignupPageUiDocument,
    "\n  query login($input: LoginInput!) {\n    login(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n      ... on InvalidCredentialsError {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation signup($input: SignupInput!) {\n    signup(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n    }\n  }\n": types.SignupDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query loginPageUi {\n    loginPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      signupLink {\n        label\n        linkLabel\n        link\n      }\n      forgotPasswordLink {\n        label\n        link\n      }\n    }\n  }\n"): (typeof documents)["\n  query loginPageUi {\n    loginPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      signupLink {\n        label\n        linkLabel\n        link\n      }\n      forgotPasswordLink {\n        label\n        link\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query productPageUi($input: ProductPageUiInput!) {\n    productPageUi(input: $input) {\n      ... on ProductPageUi {\n        __typename\n\n        productGallery {\n          images {\n            id\n            alt\n            url\n            height\n            width\n          }\n        }\n\n        productHeader {\n          title\n          variationName\n          size\n          price\n        }\n\n        productInfo {\n          descriptionTitle\n          description\n          variationTitle\n          variations {\n            id\n            variationName\n            color\n            colorHex\n            size\n          }\n        }\n\n        productForm {\n          quantityField {\n            label\n            min\n            max\n          }\n          submit {\n            label\n          }\n        }\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query productPageUi($input: ProductPageUiInput!) {\n    productPageUi(input: $input) {\n      ... on ProductPageUi {\n        __typename\n\n        productGallery {\n          images {\n            id\n            alt\n            url\n            height\n            width\n          }\n        }\n\n        productHeader {\n          title\n          variationName\n          size\n          price\n        }\n\n        productInfo {\n          descriptionTitle\n          description\n          variationTitle\n          variations {\n            id\n            variationName\n            color\n            colorHex\n            size\n          }\n        }\n\n        productForm {\n          quantityField {\n            label\n            min\n            max\n          }\n          submit {\n            label\n          }\n        }\n      }\n      ... on NotFoundError {\n        __typename\n        message\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query signupPageUI {\n    signupPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        firstname {\n          label\n          placeholder\n        }\n        lastname {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      loginLink {\n        label\n        linkLabel\n        link\n      }\n    }\n  }\n"): (typeof documents)["\n  query signupPageUI {\n    signupPageUi {\n      header {\n        title\n      }\n      form {\n        email {\n          label\n          placeholder\n        }\n        password {\n          label\n          placeholder\n        }\n        firstname {\n          label\n          placeholder\n        }\n        lastname {\n          label\n          placeholder\n        }\n        submit {\n          label\n        }\n      }\n      loginLink {\n        label\n        linkLabel\n        link\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query login($input: LoginInput!) {\n    login(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n      ... on InvalidCredentialsError {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query login($input: LoginInput!) {\n    login(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n      ... on InvalidCredentialsError {\n        message\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signup($input: SignupInput!) {\n    signup(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation signup($input: SignupInput!) {\n    signup(input: $input) {\n      ... on User {\n        id\n        firstname\n        lastname\n        profileImg\n      }\n      ... on InvalidInputError {\n        message\n        invalidFields {\n          field\n          message\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;