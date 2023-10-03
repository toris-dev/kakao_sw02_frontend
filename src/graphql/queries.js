import { gql } from '@apollo/client';

export const ALL_POSTS = gql`
  query AllPosts {
    allPosts {
      message
      ok
      posts {
        title
        postId
        text
        writerNickname
        writerId
        recommend
        share
        commentCnt
        updatedAt
        createdAt
      }
    }
  }
`;
