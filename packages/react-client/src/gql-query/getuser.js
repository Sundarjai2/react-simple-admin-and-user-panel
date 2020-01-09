import gql from "graphql-tag";

export const GetUsers = gql`
{
  users {
    _id
    email
    password
    name
    isAuth
  }
}
`;