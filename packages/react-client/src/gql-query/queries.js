// import { gql } from 'apollo-boost';
import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      email
      password
      role
      isAuth
    }
  }
`;