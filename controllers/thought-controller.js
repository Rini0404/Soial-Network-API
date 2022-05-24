const { User, Reaction, Thought } = require('../models')

getAllThoughts = (req, res) => {
  Thought.find({}).populate({ path: "reactions",  select: '-__v'})
    .select('-__v').then(data=>res.json(data));
}

createdThought = (req, res) => {
  Thought.create({username: req.body.username, thoughtText: req.body.thoughtText})
  .then(data => {
    User.findOneAndUpdate({_id: req.body.userId},{$push: { thoughts: data._id}},
      {new: true}).then(data =>res.json(data))
  })
}

getThoughtById =(req, res) => {

  console.log('data: ',req.path);
  Thought.findById(req.params.id).populate({path: 'reactions'}).then(data=>res.json(data))
}

updatedThought = (req, res, {body}) => {
  Thought.findOneAndUpdate({_id:req.params.id}, body, {new: true}).then(data=>res.json(data))
}

deleteThought = (req, res,) => {
  Thought.findOneAndDelete({_id:req.params.id},).then(data=>res.json(data));
  User.findOneAndUpdate({ username: data.username}, {$pull: { thoughts: req.params.id}})
  .then(data=>res.json(data));
}

addReaction = (req, res) => {
  Thought.findOneAndUpdate({id: req.params.id}, {$addToSet: {reactions: req.body}}, {new: true})
  .then(data=>res.json(data));
}

deleteReaction = (req, res, {body}) => {
  Thought.findOneAndUpdate({_id: req.params}, { $pull: {reactions: {reactionId: body.reactionId}}},
    {new: true, runValidators:true},
    )
}

module.exports = { getAllThoughts, createdThought, getThoughtById, updatedThought, deleteThought, deleteReaction, addReaction };