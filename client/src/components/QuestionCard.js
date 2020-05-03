import React from "react";
import TimeAgo from "react-timeago";
import Card from "@material-ui/core/Card";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const QuestionCard = ({
  id,
  title,
  description,
  likes,
  dislikes,
  createDate,
  onLikeClick,
  onDislikeClick,
  onCardClick
}) => {
  return (
    <div className="question-card">
      <Card className="question-card__container">
        <div className="question-card__likes-wrapper">
          <button
            className="question-card__like-btn"
            type="button"
            onClick={() => onLikeClick(id)}
          >
            <ThumbUpIcon color="primary" />
          </button>
          <span className="question-card__likes-count">{likes - dislikes}</span>
          <button
            className="question-card__like-btn"
            type="button"
            onClick={() => onDislikeClick(id)}
          >
            <ThumbDownAltIcon color="primary" />
          </button>
        </div>
        <div className="question-card__question-info" onClick={onCardClick}>
          <h2 className="question-card__title">{title}</h2>
          <h3 className="question-card__desc">{description}</h3>
          <div className="question-card__user-info">
            <span>asked </span>
            <TimeAgo date={createDate} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuestionCard;
