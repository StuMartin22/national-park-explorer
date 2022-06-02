import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      comments {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      comments {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      comments {
        _id
        commentText
      }
    }
  }
`;

export const QUERY_PARK_COMMENTS = gql`
  query parkComments($parkCode: String!) {
    comments(parkCode: $parkCode) {
      _id
      commentText
      commentAuthor
      parkCode
      createdAt
      ratings {
        _id
        ratingNumber
        ratingAuthor
      }
    }
  }
`;
