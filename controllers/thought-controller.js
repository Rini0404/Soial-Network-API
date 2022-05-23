const { User, Reaction, Thought } = require('../models')

getAllThoughts = (req, res) => {
  Thought.find({}).populate({ path: "reactions",  select: '-__v'})
    .select('-__v').then(data=>res.json(data));
}


module.exports = { getAllThoughts, };