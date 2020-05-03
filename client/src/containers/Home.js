import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAllQuestions } from "../redux/action/question";
import Question from "./Question";

const Home = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(state => ({
    questions: state.question.questions
  }));
  let history = useHistory();

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  const handleCardClick = id => {
    history.push(`/question/${id}`);
  };

  return (
    <div>
      {questions.map(question => {
        const { _id } = question;
        return (
          <Question
            key={_id}
            data={question}
            onCardClick={() => handleCardClick(_id)}
          />
        );
      })}
    </div>
  );
};

export default Home;
