/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  addressLn1: Scalars['String'];
  addressLn2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  postCode: Scalars['String'];
  state: Scalars['String'];
};

export type BaseError = {
  message: Scalars['String'];
};

export type EmailField = {
  __typename?: 'EmailField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type FirstnameField = {
  __typename?: 'FirstnameField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type ForgotPasswordLink = {
  __typename?: 'ForgotPasswordLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type InvalidCredentialsError = BaseError & {
  __typename?: 'InvalidCredentialsError';
  message: Scalars['String'];
};

export type InvalidFieldError = BaseError & {
  __typename?: 'InvalidFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InvalidInputError = BaseError & {
  __typename?: 'InvalidInputError';
  invalidFields: Array<Maybe<InvalidFieldError>>;
  message: Scalars['String'];
};

export type LastnameField = {
  __typename?: 'LastnameField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type LoginForm = {
  __typename?: 'LoginForm';
  email: EmailField;
  password: PasswordField;
  submit: SubmitButton;
};

export type LoginHeader = {
  __typename?: 'LoginHeader';
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginLink = {
  __typename?: 'LoginLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkLabel?: Maybe<Scalars['String']>;
};

export type LoginPageUi = {
  __typename?: 'LoginPageUi';
  forgotPasswordLink: ForgotPasswordLink;
  form: LoginForm;
  header: LoginHeader;
  signupLink: SignupLink;
};

export type LoginResult = InvalidCredentialsError | InvalidInputError | User;

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<SignupResult>;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type NotFoundError = BaseError & {
  __typename?: 'NotFoundError';
  message: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  billingAddress: Address;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['DateTime']>;
  isShipped: Scalars['String'];
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderStatus: OrderStatus;
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
  shippingType: ShippingType;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  product: Product;
  quantity: Scalars['Int'];
  variation: ProductVariation;
};

export enum OrderStatus {
  AwaitingFullfilment = 'AWAITING_FULLFILMENT',
  AwaitingPayment = 'AWAITING_PAYMENT',
  AwaitingPickup = 'AWAITING_PICKUP',
  AwaitingShipping = 'AWAITING_SHIPPING',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Disputed = 'DISPUTED',
  ManualVerificationRequired = 'MANUAL_VERIFICATION_REQUIRED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  PartiallyShipped = 'PARTIALLY_SHIPPED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Shipped = 'SHIPPED'
}

export type PasswordField = {
  __typename?: 'PasswordField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export enum PaymentMethod {
  Card = 'CARD',
  Cash = 'CASH'
}

export type Product = {
  __typename?: 'Product';
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  isFavorited?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productType: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  variations: Array<ProductVariation>;
};

export type ProductData = {
  __typename?: 'ProductData';
  product: ProductSummary;
  productVariation: ProductVariation;
};

export type ProductForm = {
  __typename?: 'ProductForm';
  quantityField: QuantityField;
  submit: SubmitButton;
};

export type ProductGallery = {
  __typename?: 'ProductGallery';
  images: Array<Image>;
};

export type ProductHeader = {
  __typename?: 'ProductHeader';
  isLiked?: Maybe<Scalars['Boolean']>;
  price: Scalars['Int'];
  rating: Scalars['Float'];
  reviewCount?: Maybe<Scalars['Int']>;
  size: Scalars['String'];
  title: Scalars['String'];
  variationName: Scalars['String'];
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  description: Scalars['String'];
  descriptionTitle: Scalars['String'];
  variationTitle: Scalars['String'];
  variations: Array<ProductVariationSummary>;
};

export type ProductPageUi = {
  __typename?: 'ProductPageUi';
  productData: ProductData;
  productForm?: Maybe<ProductForm>;
  productGallery?: Maybe<ProductGallery>;
  productHeader?: Maybe<ProductHeader>;
  productInfo?: Maybe<ProductInfo>;
};

export type ProductPageUiInput = {
  productVariationId: Scalars['ID'];
};

export type ProductPageUiResult = NotFoundError | ProductPageUi;

export type ProductVariation = {
  __typename?: 'ProductVariation';
  color: Scalars['String'];
  colorHex: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Image>;
  price: Scalars['Int'];
  size: Scalars['String'];
  variationName: Scalars['String'];
};

export type ProductVariationSummary = {
  __typename?: 'ProductVariationSummary';
  color: Scalars['String'];
  colorHex: Scalars['String'];
  id: Scalars['ID'];
  size: Scalars['String'];
  variationName: Scalars['String'];
};

export type QuantityField = {
  __typename?: 'QuantityField';
  label: Scalars['String'];
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  login?: Maybe<LoginResult>;
  loginPageUi: LoginPageUi;
  productPageUi: ProductPageUiResult;
  signupPageUi: SignupPageUi;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryProductPageUiArgs = {
  input: ProductPageUiInput;
};

export type Review = {
  __typename?: 'Review';
  description: Scalars['String'];
  id: Scalars['ID'];
  rating: Scalars['Int'];
  user: User;
};

export enum ShippingType {
  Express = 'EXPRESS',
  Standard = 'STANDARD'
}

export type SignupForm = {
  __typename?: 'SignupForm';
  email: EmailField;
  firstname: FirstnameField;
  lastname: LastnameField;
  password: PasswordField;
  submit: SubmitButton;
};

export type SignupHeader = {
  __typename?: 'SignupHeader';
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type SignupLink = {
  __typename?: 'SignupLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkLabel?: Maybe<Scalars['String']>;
};

export type SignupPageUi = {
  __typename?: 'SignupPageUi';
  form: SignupForm;
  header: SignupHeader;
  loginLink: LoginLink;
};

export type SignupResult = InvalidInputError | User;

export type SubmitButton = {
  __typename?: 'SubmitButton';
  label?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  addresses: Array<Address>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  favoriteProducts: Array<Product>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  orders: Array<Order>;
  profileImg: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSummary = {
  __typename?: 'productSummary';
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  productType: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  searchTags: Array<Scalars['String']>;
  variations: Array<ProductVariationSummary>;
};

export type LoginPageUiQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginPageUiQuery = { __typename?: 'Query', loginPageUi: { __typename?: 'LoginPageUi', header: { __typename?: 'LoginHeader', title: string }, form: { __typename?: 'LoginForm', email: { __typename?: 'EmailField', label?: string | null, placeholder?: string | null }, password: { __typename?: 'PasswordField', label?: string | null, placeholder?: string | null }, submit: { __typename?: 'SubmitButton', label?: string | null } }, signupLink: { __typename?: 'SignupLink', label?: string | null, linkLabel?: string | null, link?: string | null }, forgotPasswordLink: { __typename?: 'ForgotPasswordLink', label?: string | null, link?: string | null } } };

export type ProductPageUiQueryVariables = Exact<{
  input: ProductPageUiInput;
}>;


export type ProductPageUiQuery = { __typename?: 'Query', productPageUi: { __typename: 'NotFoundError', message: string } | { __typename: 'ProductPageUi', productGallery?: { __typename?: 'ProductGallery', images: Array<{ __typename?: 'Image', id: string, alt: string, url: string, height: number, width: number }> } | null, productHeader?: { __typename?: 'ProductHeader', title: string, variationName: string, size: string, price: number } | null, productInfo?: { __typename?: 'ProductInfo', descriptionTitle: string, description: string, variationTitle: string, variations: Array<{ __typename?: 'ProductVariationSummary', id: string, variationName: string, color: string, colorHex: string, size: string }> } | null, productForm?: { __typename?: 'ProductForm', quantityField: { __typename?: 'QuantityField', label: string, min: number, max: number }, submit: { __typename?: 'SubmitButton', label?: string | null } } | null } };

export type SignupPageUiQueryVariables = Exact<{ [key: string]: never; }>;


export type SignupPageUiQuery = { __typename?: 'Query', signupPageUi: { __typename?: 'SignupPageUi', header: { __typename?: 'SignupHeader', title: string }, form: { __typename?: 'SignupForm', email: { __typename?: 'EmailField', label?: string | null, placeholder?: string | null }, password: { __typename?: 'PasswordField', label?: string | null, placeholder?: string | null }, firstname: { __typename?: 'FirstnameField', label?: string | null, placeholder?: string | null }, lastname: { __typename?: 'LastnameField', label?: string | null, placeholder?: string | null }, submit: { __typename?: 'SubmitButton', label?: string | null } }, loginLink: { __typename?: 'LoginLink', label?: string | null, linkLabel?: string | null, link?: string | null } } };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'InvalidCredentialsError', message: string } | { __typename?: 'InvalidInputError', message: string, invalidFields: Array<{ __typename?: 'InvalidFieldError', field: string, message: string } | null> } | { __typename?: 'User', id: string, firstname: string, lastname: string, profileImg: string } | null };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'InvalidInputError', message: string, invalidFields: Array<{ __typename?: 'InvalidFieldError', field: string, message: string } | null> } | { __typename?: 'User', id: string, firstname: string, lastname: string, profileImg: string } | null };


export const LoginPageUiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signupLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"linkLabel"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forgotPasswordLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<LoginPageUiQuery, LoginPageUiQueryVariables>;
export const ProductPageUiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productPageUi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPageUiInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productPageUi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPageUi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"variationName"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descriptionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"variationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"variationName"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"colorHex"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantityField"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ProductPageUiQuery, ProductPageUiQueryVariables>;
export const SignupPageUiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signupPageUI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstname"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastname"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"loginLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"linkLabel"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<SignupPageUiQuery, SignupPageUiQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvalidInputError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"invalidFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvalidCredentialsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvalidInputError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"invalidFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;