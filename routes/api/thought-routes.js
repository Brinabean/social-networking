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

router.route("/:userId").get(getAllThought).post(addThought);

// /api/comments/<pizzaId>/<commentId>
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(addReaction)
  .put(updateThought)
  .delete(removeThought);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
