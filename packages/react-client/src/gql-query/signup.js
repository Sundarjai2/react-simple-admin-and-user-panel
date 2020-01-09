import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation userSignUp($email: String!, $password: String!, $role: String!, $name: String!) {
    userSignUp(email: $email, password: $password, role: $role, name: $name) {
      email
      password
      role
      name
    }
  }
`;