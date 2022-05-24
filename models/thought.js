const reactSchema = require('./Reaction');
const moment = require('momment');
const { Schema, model } = require('mongoose');


// TODO: new Schema, text, createdAt, username, toJSON

const thoughtSchema = new Schema({
  thoughtText: {
    type: String, 
      maxLength: 300,
        required: true,
  },
    username: {
      type: String,
        required: true,
    },
      createdAt: {
        type: Date,
          default: Date.now,
            // get: (createdValue) => moment(createdValue).format('YYYY-MM-DD')
        },
        reactions: [reactSchema]
  },{
    toJSON:{
      getters: true,
    },
    id: false,
  
  });

    thoughtSchema.virtual('reactCount').get(function(){
      return this.reactions.length;
    });
    const Thought = model('Thought', thoughtSchema);
    module.exports = Thought; 
