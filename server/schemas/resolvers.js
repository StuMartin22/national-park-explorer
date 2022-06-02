const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

// 
const resolvers = {
    Query: {
        users: async () => {
           return await User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        comments: async (parent, { parkCode }) => {
          const params = parkCode ? { parkCode } : {};
          return await Comment.find(params);
        },
        comment: async (parent, { commentId }) => {
          return Comment.findOne({ _id: commentId });
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await User.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent, args, context) => {
            if (context.user) {
              return User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        addComment: async (parent, { commentText, commentAuthor, parkCode }) => {
          const comment = await Comment.create({ commentText, commentAuthor, parkCode });

          await User.findOneAndUpdate(
            { username: commentAuthor },
            { $addToSet: { comments: comment._id }}
          );
        },
        removeComment: async (parent, { commentId }) => {
          return await Comment.findOneAndDelete({ _id: commentId });
        },
        addRating: async (parent, {commentId, ratingNumber, ratingAuthor}) => {
          Comment.findOneAndUpdate(
            { _id: commentId },
            { $addToSet: { ratings: { ratingNumber, ratingAuthor }}},
            { new: true }
          )
        },
        removeRating: async (parent, { commentId, ratingId }) => {
          return await Comment.findOneAndUpdate(
            { _id: commentId },
            { $pull: { comments: { _id: ratingId }}},
            { new: true }
          );
        }
    }
}

module.exports = resolvers;