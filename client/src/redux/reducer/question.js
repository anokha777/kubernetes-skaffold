import {
  TOGGLE_IS_POSTING,
  TOGGLE_IS_POSTING_SUCCESS,
  TOGGLE_IS_ERROR_WHILE_POSTING,
  GET_ALL_QUESTIONS,
  ADD_LIKE_TO_QUESTION,
  ADD_DISLIKE_TO_QUESTION
} from "../constants/question";
import { incrementFieldByOne } from "../../utils/dataHelper";

const initialState = {
  questions: [],
  isPosting: false,
  isPostingSuccess: false,
  isErrorWhilePosting: false
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_POSTING:
      return {
        ...state,
        isPosting: action.isPosting
      };
    case TOGGLE_IS_POSTING_SUCCESS:
      return {
        ...state,
        isPostingSuccess: action.isPostingSuccess
      };
    case TOGGLE_IS_ERROR_WHILE_POSTING:
      return {
        ...state,
        isErrorWhilePosting: action.isErrorWhilePosting
      };
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case ADD_LIKE_TO_QUESTION:
      return {
        ...state,
        questions: incrementFieldByOne(
          state.questions,
          "_id",
          action.id,
          "likes"
        )
      };
    case ADD_DISLIKE_TO_QUESTION:
      return {
        ...state,
        questions: incrementFieldByOne(
          state.questions,
          "_id",
          action.id,
          "dislikes"
        )
      };
    default:
      return state;
  }
};

export default questionReducer;
