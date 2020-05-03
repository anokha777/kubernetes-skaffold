import React from "react";
import Card from "@material-ui/core/Card";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const Comment = ({ id, description, likes, dislikes, onLike, onDislike }) => {
  return (
    <div className="comment">
      <Card className="comment__container">
        <div className="comment__likes-wrapper">
          <button
            className="comment__like-btn"
            type="button"
            onClick={() => onLike(id)}
          >
            <ThumbUpIcon color="primary" />
          </button>
          <span className="comment__likes-count">{likes - dislikes}</span>
          <button
            className="comment__like-btn"
            type="button"
            onClick={() => onDislike(id)}
          >
            <ThumbDownAltIcon color="primary" />
          </button>
        </div>
        <div className="comment__info">
          <h3 className="question__desc">{description}</h3>
        </div>
      </Card>
    </div>
  );
};

export default Comment;
