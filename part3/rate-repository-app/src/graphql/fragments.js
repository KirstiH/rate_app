import { gql } from '@apollo/client';

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFragment on Repository {
    description
    fullName
    language
    forksCount
    ownerAvatarUrl
    stargazersCount
    reviewCount
    ratingAverage
    id
  }
`;