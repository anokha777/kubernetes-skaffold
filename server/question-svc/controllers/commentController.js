const Comment = require("../models/commentModel");

exports.getAllComments = async (req, res, next) => {
  console.log("Question id is", req.params.questionId);
  Comment.find({ questionId: req.params.questionId }, null, function(
    err,
    comments
  ) {
    if (!err) {
      console.log(comments);
      res.send(comments);
    }
  });
};

exports.postComment = async (req, res, next) => {
  try {
    await Comment.create({
      description: req.body.description,
      questionId: req.body.questionId
    });

    res.status(200).json({
      status: "success"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something broke!");
  }
};

exports.addLikeToComment = async (req, res, next) => {
  try {
    await Comment.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { likes: 1 } }
    );

    res.status(200).json({
      status: "success"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something broke!");
  }
};

exports.addDislikeToComment = async (req, res, next) => {
  try {
    await Comment.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { dislikes: 1 } }
    );

    res.status(200).json({
      status: "success"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something broke!");
  }
};
