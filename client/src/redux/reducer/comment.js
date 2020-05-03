import {
  TOGGLE_IS_COMMENT_POSTING,
  TOGGLE_IS_COMMENT_POSTING_SUCCESS,
  TOGGLE_IS_ERROR_WHILE_POSTING_COMMENT,
  GET_COMMENTS,
  RESET_ALL_STATUS,
  ADD_LIKE_TO_COMMENT,
  ADD_DISLIKE_TO_COMMENT
} from "../constants/comment";
import { incrementFieldByOne } from "../../utils/dataHelper";

const initialState = {
  isPostingComment: false,
  isPostingCommentSuccess: false,
  isErrorWhilePostingComment: false,
  questionId: null,
  comments: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_COMMENT_POSTING:
      return {
        ...state,
        isPosting: action.isPosting
      };
    case TOGGLE_IS_COMMENT_POSTING_SUCCESS:
      return {
        ...state,
        isPostingSuccess: action.isPostingSuccess
      };
    case TOGGLE_IS_ERROR_WHILE_POSTING_COMMENT:
      return {
        ...state,
        isErrorWhilePosting: action.isErrorWhilePosting
      };
    case GET_COMMENTS:
      return {
        ...state,
        questionId: action.questionId,
        comments: action.comments
      };
    case RESET_ALL_STATUS:
      return {
        ...state,
        isPosting: false,
        isPostingSuccess: false,
        isErrorWhilePosting: false
      };
    case ADD_LIKE_TO_COMMENT:
      return {
        ...state,
        comments: incrementFieldByOne(state.comments, "_id", action.id, "likes")
      };
    case ADD_DISLIKE_TO_COMMENT:
      return {
        ...state,
        comments: incrementFieldByOne(
          state.comments,
          "_id",
          action.id,
          "dislikes"
        )
      };
    default:
      return state;
  }
};

export default commentReducer;
