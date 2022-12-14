const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionsSchema = new Schema({
    reactionId: {
        type:Schema.Types.ObjectId,
        default:() => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    userName:{
        type: String,
        required: true,
    },
    createdAt:{
            type:Date,
            default: Date.now, 
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
         
},
    {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
  
  );


  
 module.exports = reactionsSchema;