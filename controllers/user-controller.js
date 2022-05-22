const { User } = require('../models');


// const { 
//   getAllUsers, 
//     addFriend,
//         getUserById,
//           deleteUser,
//           updateUser,
//             createUser,
// } = require('../../controllers/user-controller');

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
  User.findByIdAndRemove({ _id: friendId }).then(data=>res.json(data));
    // User.updateMany({_id: {$in: dbUserData.friends}}, {$pull: { friends: params.id}}).then(data=>res.json(data));
}


module.exports = { getAllUsers, createUser, addFriend, deleteFriend };