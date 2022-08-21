import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int!) {
    viewer {
      repositories(first: $first) {
        edges {
          node {
            id
            name
            description
            createdAt
          }
        }
      }
    }
  }
`;
