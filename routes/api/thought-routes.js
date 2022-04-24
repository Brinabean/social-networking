const router = require("express").Router();
const { get } = require("express/lib/response");
const {
  getAllThought,
  getThoughtById,
  addThought,
  addReaction,
  updateThought,
  removeThought,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);

router.route("/:userId").post(addThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/comments/<pizzaId>/<commentId>
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
