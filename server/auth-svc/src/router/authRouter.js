const express = require('express');

const authRouter = express.Router();
const authController = require('../controller/authController');

authRouter.route('/auth')
  .post(authController.authenticateUser);

module.exports = authRouter;
