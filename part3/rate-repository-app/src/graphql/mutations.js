import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials)  {
       accessToken
    }
  }
`
export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`



