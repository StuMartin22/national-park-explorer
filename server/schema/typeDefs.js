const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
        ratings: [Rating]!
    }

    type Rating {
        _id: ID
        ratingNumber: Number
        ratingAuthor: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        comments(parkCode: String): [Comment]
        comment(commentId: ID!): Comment
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser: User
        login(email: String!, password: String!): Auth
        addComment(commentText: String!, commentAuthor: String!, parkCode: String!): Comment
        removeComment(commentId: ID!): Comment
        addRating(commentId: ID!, ratingNumber: Number!, ratingAuthor: String!): Comment
        removeRating(commentId: ID!, ratingId: ID!): Comment
  }`;

module.exports = typeDefs;