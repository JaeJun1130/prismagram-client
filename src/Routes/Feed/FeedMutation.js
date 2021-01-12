import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      createdAt
      comments {
        id
        text
        user {
          id
          username
        }
      }
    }
  }
`;
