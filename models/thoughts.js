const { Schema, model } = require('mongoose');
const reactionsSchema = require('./reaction');
const moment = require('moment');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt:{
            type:Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        userName:{
            type: String,
            required:true,
        },
        reactions:[reactionsSchema],
    }
);
thoughtsSchema.virtuals('reactionCount').get(function(){
    return this.friends.length;
  });

const Thoughts = model('thoughts', thoughtsSchema);
  
  module.exports = Thoughts;