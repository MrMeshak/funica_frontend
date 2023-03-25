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

export type Order = {
  __typename?: 'Order';
  billingAddress?: Maybe<Address>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['DateTime']>;
  isShipped?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderStatus?: Maybe<OrderStatus>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Address>;
  shippingType?: Maybe<ShippingType>;
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
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  isFavorited?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  prductType: Scalars['String'];
  price: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  variations?: Maybe<Array<Maybe<ProductVariation>>>;
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  color?: Maybe<Scalars['String']>;
  colorHex?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  login?: Maybe<LoginResult>;
  loginPageUi: LoginPageUi;
  signupPageUi: SignupPageUi;
};


export type QueryLoginArgs = {
  input: LoginInput;
};

export type Review = {
  __typename?: 'Review';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rating: Scalars['Int'];
  user?: Maybe<User>;
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
  addresses?: Maybe<Array<Maybe<Address>>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  favoriteProducts?: Maybe<Array<Maybe<Product>>>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  orders?: Maybe<Array<Maybe<Order>>>;
  profileImg: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LoginPageUiQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginPageUiQuery = { __typename?: 'Query', loginPageUi: { __typename?: 'LoginPageUi', header: { __typename?: 'LoginHeader', title: string }, form: { __typename?: 'LoginForm', email: { __typename?: 'EmailField', label?: string | null, placeholder?: string | null }, password: { __typename?: 'PasswordField', label?: string | null, placeholder?: string | null }, submit: { __typename?: 'SubmitButton', label?: string | null } }, signupLink: { __typename?: 'SignupLink', label?: string | null, linkLabel?: string | null, link?: string | null }, forgotPasswordLink: { __typename?: 'ForgotPasswordLink', label?: string | null, link?: string | null } } };

export type SignupPageUiQueryVariables = Exact<{ [key: string]: never; }>;


export type SignupPageUiQuery = { __typename?: 'Query', signupPageUi: { __typename?: 'SignupPageUi', header: { __typename?: 'SignupHeader', title: string }, form: { __typename?: 'SignupForm', email: { __typename?: 'EmailField', label?: string | null, placeholder?: string | null }, password: { __typename?: 'PasswordField', label?: string | null, placeholder?: string | null }, firstname: { __typename?: 'FirstnameField', label?: string | null, placeholder?: string | null }, lastname: { __typename?: 'LastnameField', label?: string | null, placeholder?: string | null }, submit: { __typename?: 'SubmitButton', label?: string | null } }, loginLink: { __typename?: 'LoginLink', label?: string | null, linkLabel?: string | null, link?: string | null } } };


export const LoginPageUiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signupLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"linkLabel"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forgotPasswordLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<LoginPageUiQuery, LoginPageUiQueryVariables>;
export const SignupPageUiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signupPageUI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signupPageUi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstname"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastname"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"loginLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"linkLabel"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<SignupPageUiQuery, SignupPageUiQueryVariables>;