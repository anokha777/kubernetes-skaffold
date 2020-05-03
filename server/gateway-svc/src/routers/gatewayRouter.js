const express = require('express');

const appRouter = express.Router();
const userService = require('../services/userService');
const questionService = require('../services/questionService');
const commentService = require('../services/commentService');

appRouter.route('/register')
  .post(userService.registerUser);

appRouter.route('/login')
  .post(userService.loginUser);

appRouter.route('/logout')
  .get(userService.logoutUser);

appRouter.route('/user/byid/:id')
  .get(userService.getUserById);

appRouter.route('/user/byusername/:username')
  .get(userService.getUserByUsername);
  
appRouter.route('/postQuestion')
  .post(questionService.postQuestion);
  
appRouter.route('/getAllQuestions')
  .get(questionService.getAllQuestions);
  
appRouter.route('/addLikeToQuestion')
    .post(questionService.addLikeToQuestion);

appRouter.route('/addDislikeToQuestion')
    .post(questionService.addDislikeToQuestion);

appRouter.route('/searchQuestions')
    .get(questionService.searchQuestions);


appRouter.route("/postComment")
  .post(commentService.postComment);
appRouter.route("/getAllComments/:questionId")
  .get(commentService.getAllComments);
appRouter.route("/addLikeToComment")
  .post(commentService.addLikeToComment);
appRouter.route("/addDislikeToComment")
  .post(commentService.addDislikeToComment);

module.exports = appRouter; 
