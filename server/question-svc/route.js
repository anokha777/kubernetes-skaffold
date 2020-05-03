const express = require("express");
const router = express.Router();
const questionController = require("./controllers/questionController");
const commentController = require("./controllers/commentController");

router.route("/api/postQuestion").post(questionController.postQuestion);

router.route("/api/getAllQuestions").get(questionController.getAllQuestions);

router
  .route("/api/addLikeToQuestion")
  .post(questionController.addLikeToQuestion);
router
  .route("/api/addDislikeToQuestion")
  .post(questionController.addDislikeToQuestion);

router.route("/api/postComment").post(commentController.postComment);
router
  .route("/api/getAllComments/:questionId")
  .get(commentController.getAllComments);

router.route("/api/addLikeToComment").post(commentController.addLikeToComment);
router
  .route("/api/addDislikeToComment")
  .post(commentController.addDislikeToComment);

  router.route("/api/searchQuestions").get(questionController.searchQuestions);

module.exports = router; 
