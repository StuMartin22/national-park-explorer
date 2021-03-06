const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: 'Please leave a comment with text!',
    minlength: 1,
    maxlength: 280,
    trim: true
  },
  // username of author
  commentAuthor: {
    type: String,
    required: true,
    trim: true
  },
  // from API, code of park being commented on
  parkCode: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  },
  ratings: [
        {
        ratingNumber: {
            type: Number,
            min: 0,
            max: 5
        },
        // session username
        ratingAuthor: {
            type: String,
            required: true
        }
    }
  ]
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;