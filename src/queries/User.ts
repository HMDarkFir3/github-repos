import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    viewer {
      login
      avatarUrl
    }
  }
`;
