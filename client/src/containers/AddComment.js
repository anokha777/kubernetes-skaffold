import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { postComment, toggleIsPostingComment } from "../redux/action/comment";
import { useUser } from "../custom-hooks/useUser";

const AddComment = ({ questionId }) => {
  const dispatch = useDispatch();
  const { isPosting, isPostingSuccess, isErrorWhilePosting } = useSelector(
    state => ({
      isPosting: state.comment.isPosting,
      isPostingSuccess: state.comment.isPostingSuccess,
      isErrorWhilePosting: state.comment.isErrorWhilePosting
    })
  );
  const [description, setDescription] = useState("");
  const user = useUser();

  useEffect(() => {
    if (isPostingSuccess) {
      setDescription("");
    }
  }, [isPostingSuccess]);

  const handlePostComment = e => {
    e.preventDefault();
    if (user) {
      dispatch(toggleIsPostingComment(true));
      dispatch(
        postComment({
          description,
          questionId,
          userId: user.id
        })
      );
    } else {
      alert("please login to post comment");
    }
  };

  return (
    <div className="add-comment">
      <h3 className="add-comment__comments-title">Add your comment</h3>
      <form className="add-comment-form" onSubmit={handlePostComment}>
        <TextField
          id="commentDescription"
          name="commentDescription"
          label="Description"
          placeholder="Enter your comment"
          multiline={true}
          rows={2}
          rowsMax={4}
          className="add-comment__input-desc"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <div className="add-comment__button-row">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className="add-comment__button"
            disabled={isPosting}
          >
            Post Comment
          </Button>
        </div>
      </form>
      {isPostingSuccess && (
        <div className="question__message">
          <p>Comment posted successfully.</p>
        </div>
      )}
      {isErrorWhilePosting && (
        <div className="question__message-error">
          <p>Something went wrong. Please try again</p>
        </div>
      )}
    </div>
  );
};

export default AddComment;
