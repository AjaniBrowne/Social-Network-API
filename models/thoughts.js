const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt:{
            type:Date,
            default: Date.now,
        },
        userName:{
            type: String,
            required:true,
        },
        reactions:{

        }
    }
);

const Thoughts = model('thoughts', thoughtsSchema);
  
  module.exports = Thoughts;