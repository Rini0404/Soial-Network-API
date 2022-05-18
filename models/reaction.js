const moment = require('momment');
const { Schema, Types } = require('mongoose');

const reactSchema = new Schema({
  reactionId: { 
    type: Types.ObjectId,
    default: () => new Types.ObjectId()
      
  },
    reactionBody: { 
      type: String,
        maxLength: 280,
          required: true,
    },
    createdAt: { 
      type: Date,
        default: Date.now,
          get: (createdValue) => moment(createdValue).format('YYYY-MM-DD')
    },
      username: { 
        type: String,
          required: true,
      }

},
  {
    toJson: {
      getters: true,
    },
    id: false,
  });

  module.exports = reactSchema;