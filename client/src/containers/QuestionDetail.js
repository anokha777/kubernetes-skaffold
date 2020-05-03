import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllComments, resetAllStatus } from "../redux/action/comment";
import Question from "./Question";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { useUser } from "../custom-hooks/useUser";

const getQuestionById = (state, id) => {
  const {
    question: { questions }
  } = state;
  if (questions.length > 0) {
    return questions.find(question => question._id === id);
  }
  return null;
};

const QuestionDetail = () => {
  const { id } = useParams();
  let history = useHistory();
  const { questionInfo, comments } = useSelector(state => ({
    questionInfo: getQuestionById(state, id),
    comments: state.comment.comments
  }));
  const dispatch = useDispatch();
  const user = useUser();

  useEffect(() => {
    dispatch(getAllComments(id));
    dispatch(resetAllStatus());
  }, []);

  const renderQuestionCard = questionInfo => {
    return (
      <div>
        <Question data={questionInfo} onCardClick={() => {}} />
      </div>
    );
  };

  if (questionInfo === null) {
    history.push("/");
  }

  const renderLoginMessage = () => (
    <div className="question__login-message">
      <p>
        You need to <Link to="/login">login</Link> to ask question
      </p>
    </div>
  );

  return (
    <>
      {questionInfo ? renderQuestionCard(questionInfo) : null}
      <div>
        <h3 className="question-detail__comments-title">{`${comments.length} Comments`}</h3>
        <hr />
        <Comments data={comments} />
        {user ? <AddComment questionId={id} /> : renderLoginMessage()}
      </div>
    </>
  );
};

export default QuestionDetail;
