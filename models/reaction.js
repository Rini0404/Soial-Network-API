const moment = require('moment');
const { Schema, Types } = require('mongoose');

const reactSchema = new Schema({
  reactionId: { 
    default: new Types.objectId(),
      type: Types.objectId,
  },
    reactionBody: { 
      type: String,
        maxLength: 300,
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