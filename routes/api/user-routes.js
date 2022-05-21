const router = require('express').Router();
const { 
  getAllUsers, 
    addFriend,
      removeFriend,
    //     getUserById,
    //       deleteUser,
    //       updateUser,
            createUser,
} = require('../../controllers/user-controller');
// TODO: Pass in all objects to routes. PUT GET DELETE POST

router.route('/').get(getAllUsers).post(createUser);

// router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
// router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
// router.route('/:userId/friends/:friendId').post(addFriend)

// router.post('/', (req, res) => {
//   User.create(req.body)
//     .then(data => res.json(data));
// });

module.exports = router;