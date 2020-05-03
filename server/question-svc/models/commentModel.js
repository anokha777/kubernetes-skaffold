const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Comment description is required"],
    trim: true,
    maxlength: [
      2000,
      "A Comment description must have less or equal then 800 characters"
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
  questionId: {
    type: mongoose.Schema.ObjectId,
    required: true
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
