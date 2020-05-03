import React from "react";
import { useDispatch } from "react-redux";

import Comment from "../components/Comment";
import { addLikeToComment, addDislikeToComment } from "../redux/action/comment";

const Comments = ({ data }) => {
  const dispatch = useDispatch();

  const handleLikeClick = id => {
    dispatch(addLikeToComment(id));
  };

  const handleDislikeClick = id => {
    dispatch(addDislikeToComment(id));
  };

  return (
    <div>
      {data.map(comment => {
        const { _id, description, likes, dislikes } = comment;
        return (
          <Comment
            key={_id}
            id={_id}
            description={description}
            likes={likes}
            dislikes={dislikes}
            onLike={() => handleLikeClick(_id)}
            onDislike={() => handleDislikeClick(_id)}
          />
        );
      })}
    </div>
  );
};

export default Comments;
