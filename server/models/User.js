const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Setting up mongoose User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ]
});

// pre-save the password as a bcrypt hash
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  
  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};
  
const User = model('User', userSchema);
  
module.exports = User;
  