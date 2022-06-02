import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

// export const REMOVE_USER = gql`
//   mutation removeUser($username: String!, $email: String!, $password: String!) {
//     removeUser(username: $username, email: $email, password: $password) {
//       token
//       User {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
      ratings {
        _id
        ratingNumber
        ratingAuthor
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
      ratings {
        _id
        ratingNumber
        ratingAuthor
      }
    }
  }
`;
