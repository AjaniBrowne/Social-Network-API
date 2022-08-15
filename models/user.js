const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./thoughts');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, "Please enter a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
      },
      thoughts:  [thoughtsSchema],
       
       friends: [{
        type: Schema.Types.ObjectId,
        ref:'User',
       }]
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
    }
  );
  userSchema.virtuals('friendCount').get(function(){
    return this.friends.length;
  });
  
  const User = model('user', userSchema);
  
  module.exports = User;
  