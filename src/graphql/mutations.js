import { gql } from '@apollo/client';

export const SIGNIN_MUTATION = gql`
  mutation Mutation($armynumber: String!, $password: String!) {
    login(armynumber: $armynumber, password: $password) {
      error
      ok
      token
      user {
        armynumber
        nickname
        password
        role
        militaraybase
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation Mutation(
    $armynumber: String!
    $nickname: String!
    $password: String!
    $role: String!
    $militaraybase: String!
  ) {
    createAccount(
      armynumber: $armynumber
      nickname: $nickname
      password: $password
      role: $role
      militaraybase: $militaraybase
    ) {
      error
      token
      ok
      userId
    }
  }
`;
