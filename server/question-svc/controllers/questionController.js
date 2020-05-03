const Question = require("../models/questionModel");

exports.getAllQuestions = async (req, res, next) => {
  console.log('addLikeToQuestion-------------in questionController.js');
  Question.find({}, null, { sort: { createDate: -1 } }, function (
    err,
    questions
  ) {
    if (!err) {
      res.send(questions);
    }
  });
};

exports.searchQuestions = async (req, res, next) => {
  const searchQuery = req.query.search || '';
  await Question.createIndex({"title":"text"});
  const result = await Question.find(
    { $text: { $search: searchQuery } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });

  res.status(200).json({
    status: "success",
    questions: result
  });
}

exports.postQuestion = async (req, res, next) => {
  console.log('req.body in questionsvc-------', req.body);
  try {
    await Question.create({
      title: req.body.title,
      description: req.body.description,
      likes: req.body.likes
    });

    res.status(200).json({
      status: "success"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something broke!");
  }
};

exports.addLikeToQuestion = async (req, res, next) => {
  try {
    await Question.findOneAndUpdate(
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

exports.addDislikeToQuestion = async (req, res, next) => {
  try {
    await Question.findOneAndUpdate(
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
