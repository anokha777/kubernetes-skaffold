import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { useUser } from "../custom-hooks/useUser";
import {
  postQuestion,
  toggleIsPosting,
  toggleIsPostingSuccess,
  toggleIsErrorWhilePosting
} from "../redux/action/question";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const { isPosting, isPostingSuccess, isErrorWhilePosting } = useSelector(
    state => ({
      isPosting: state.question.isPosting,
      isPostingSuccess: state.question.isPostingSuccess,
      isErrorWhilePosting: state.question.isErrorWhilePosting
    })
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  let history = useHistory();
  const user = useUser();

  useEffect(() => {
    dispatch(toggleIsErrorWhilePosting(false));
  }, []);

  useEffect(() => {}, [isPosting, isPostingSuccess, isErrorWhilePosting]);

  const handleSubmit = e => {
    e.preventDefault();
    if (user) {
      dispatch(toggleIsErrorWhilePosting(false));
      dispatch(toggleIsPosting(true));
      dispatch(
        postQuestion({
          title,
          description,
          tags,
          userId: user.id
        })
      );
    } else {
      alert("please login to ask question");
    }
  };

  const handleCancelClick = () => {
    dispatch(toggleIsPostingSuccess(false));
    dispatch(toggleIsErrorWhilePosting(false));
    history.push("/");
  };

  const renderSuccessMessage = () => (
    <div className="question__message">
      <p>Question posted successfully.</p>
    </div>
  );

  const renderErrorMessage = () => (
    <div className="question__message-error">
      <p>Something went wrong. Please try again</p>
    </div>
  );

  const renderForm = () => (
    <form className="ask-question-form" onSubmit={handleSubmit}>
      <TextField
        id="questionTitle"
        name="questionTitle"
        label="Title"
        type="text"
        margin="dense"
        autoFocus
        InputLabelProps={{
          className: "ask-question__input-label"
        }}
        onChange={e => setTitle(e.target.value)}
        className="ask-question__input-title"
        value={title}
      />

      <TextField
        id="questionDesc"
        name="questionDesc"
        label="Description"
        placeholder="Enter your Question"
        multiline={true}
        rows={2}
        rowsMax={4}
        className="ask-question__input-desc"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        id="questionTag"
        name="questionTag"
        label="Tags"
        placeholder="Enter Question Tags"
        className="ask-question__input-tags"
        onChange={e => setTags(e.target.value)}
        value={tags}
      />
      <div className="buttons-row">
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className="ask-question__button"
          disabled={isPosting}
        >
          Post Question
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="primary"
          className="ask-question__button"
          onClick={handleCancelClick}
        >
          Back
        </Button>
      </div>
    </form>
  );

  const renderLoginMessage = () => (
    <div className="question__login-message">
      <p>
        You need to <Link to="/login">login</Link> to ask question
      </p>
    </div>
  );

  return (
    <>
      {isPostingSuccess && renderSuccessMessage()}
      {isErrorWhilePosting && renderErrorMessage()}
      <div className="ask-question">
        <div className="ask-question__heading">
          <h1>Ask Question</h1>
        </div>
        {user ? renderForm() : renderLoginMessage()}
      </div>
    </>
  );
};

export default AskQuestion;
