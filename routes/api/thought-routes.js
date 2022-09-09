const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

//  /api/thoughts <GET>
router.route("/").get(getAllThoughts);

//  /api/thoughts/:id <GET, PUT, DELETE>
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts/:userId <POST>
router.route("/:userId").post(addThought);

//  /api/thoughts/:thoughtId/reactions <POST>
router.route("/:thoughtId/reactions").post(addReaction);

//  /api/thoughts/:thoughtId/reactionId <DELETE>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
