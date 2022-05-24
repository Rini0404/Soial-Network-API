const { User, Thought } = require('../models');

getAllUsers = (req, res)  => User.find().then(data=>res.json(data));

createUser = (req,res) => User.create(req.body).then(data=>res.json(data));

addFriend = (req, res) => {
  let personId = req.params.userId; 
    let friendId = req.params.friendId;
    User.findOneAndUpdate({ _id: personId}, {$addToSet: {friends: friendId }}, {new: true})
    .then(data=>res.json(data))
}

deleteFriend = (req, res) => {
  let friendId = req.params.userId;
  User.findByIdAndRemove({ _id: friendId }, 
    {$pull: { friends: params.friendId }}, 
    {new: true, 
  runValidators: true 
}).then(data=>res.json(data));

}

// good
getUserById = (req, res) => {
  User.findOne({_id: req.params.id}).populate([{path: 'thoughts', select: '-__v'}, {path: 'friends', select: '-__v'}])
  .select('-__v')
  .then(dbUserData => res.json(dbUserData)).catch(err => {
    console.log(err);
      res.status(500).json(err);
  })
}

deleteUser = ({params}, res) => {
  User.findOneAndDelete({_id: params.id})
  .then(dbUserData => res.json(dbUserData))
}

updateUser = (req, {body}, res) => {
  User.findOneAndUpdate( body, {id: req.params.id}, {new: true, runValidators: true}).then(data => res.json(data)); 
}

module.exports = { getAllUsers, createUser, addFriend, deleteFriend, getUserById, deleteUser, updateUser };