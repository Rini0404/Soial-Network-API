const router = require('express').Router();
// TODO: Pass in objects like, user-routes
const {
  createdThought, 
    updatedThought,
      addReaction,
        getAllThoughts,
          getThoughtById,
            deleteThought,
              deleteReaction,
} = require('../../controllers/thought-controller')

// TODO: Pass in objects to your routes

router.route('/').get(getAllThoughts)
// .post(createdThought);
// router.route('/').get(getAllThoughts).post(createdThought);

  // router.route('/:id').get(getThoughtById).put(updatedThought).delete(deleteThought);
  // router.route('/:id').get(getThoughtById).put(updatedThought).delete(deleteThought);
  
  //     router.route('/:thoughtId/reactions/').post(addReaction).delete(deleteReaction);
  //     router.route('/:thoughtId/reactions/').post(addReaction).delete(deleteReaction);

      module.exports = router;