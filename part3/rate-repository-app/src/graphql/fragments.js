import { gql } from '@apollo/client';

export const REPOSITORY_FRAGMENT = gql`
  fragment ReporsitoryFragment {
    description,
    fullName,
    language,
    forksCount,
    ownerAvatarUrl,
    stargazersCount,
    reviewCount,
    ratingAverage,
    id
  }
`;