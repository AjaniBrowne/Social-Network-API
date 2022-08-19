const { Schema, model, Types } = require('mongoose');
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
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
      }
);
thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
  });

const Thoughts = model('Thoughts', thoughtsSchema);
  
  module.exports = Thoughts;