import React from "react";
import { useDispatch } from "react-redux";

import Card from "../components/QuestionCard";
import {
  addLikeToQuestion,
  addDislikeToQuestion
} from "../redux/action/question";

const Question = ({ data, onCardClick }) => {
  const dispatch = useDispatch();

  const handleLikeClick = id => {
    dispatch(addLikeToQuestion(id));
  };

  const handleDislikeClick = id => {
    dispatch(addDislikeToQuestion(id));
  };

  const { _id, title, description, likes, dislikes, createDate } = data;
  return (
    <Card
      id={_id}
      title={title}
      description={description}
      likes={likes}
      dislikes={dislikes}
      createDate={createDate}
      onLikeClick={handleLikeClick}
      onDislikeClick={handleDislikeClick}
      onCardClick={onCardClick}
    />
  );
};

export default Question;
