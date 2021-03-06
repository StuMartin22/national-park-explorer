const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

// 
const resolvers = {
    Query: {
        users: async () => {
           return await User.find().populate('comments');
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
        },
        me: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('comments');
          }
          throw new AuthenticationError('You need to be logged in!');
        },
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
      
            const correctPw = await user.isCorrectPassword(password);
      
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
        
        addComment: async (parent, { commentText, parkCode, commentAuthor }, context) => {
          const comment = await Comment.create({ commentText, commentAuthor, parkCode });

          await User.findOneAndUpdate(
            { username: commentAuthor },
            { $addToSet: { comments: comment._id } }
          );

          return comment;
        },

        
        addRating: async (parent, {commentId, ratingNumber, ratingAuthor}) => {
          return Comment.findOneAndUpdate(
            { _id: commentId },
            { $addToSet: { ratings: { ratingNumber, ratingAuthor }}},
            { new: true }
            )
          },
          
        removeComment: async (parent, { commentId }) => {
            return await Comment.findOneAndDelete({ _id: commentId });
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