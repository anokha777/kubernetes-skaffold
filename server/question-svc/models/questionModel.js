const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Question title is required"],
    trim: true,
    maxlength: [
      200,
      "A question title must have less or equal then 200 characters"
    ]
  },
  description: {
    type: String,
    required: [true, "Question description is required"],
    trim: true,
    maxlength: [
      800,
      "A question title must have less or equal then 800 characters"
    ]
  },
  askedBy: {
    type: mongoose.Schema.ObjectId
    // ref: 'User',
    // required: [true, 'question must belong to a user']
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
