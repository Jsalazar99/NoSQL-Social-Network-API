const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thought
router
  .route('/')
  .get(getThought)
  .post(createThought);

// /api/thought/:thoughtID
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  
// /api/thought/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addAssignment);

// /api/thought/:thoughtId/reactions/:reactionsId
router
  .route('/:thoughtId/reactions/:reactionsId')
  .delete(removeAssignment);

module.exports = router;

