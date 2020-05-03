import api from "../../utils/api";
import { API_URLS, config } from "../../config/apiEndpoints";
import {
  TOGGLE_IS_COMMENT_POSTING,
  TOGGLE_IS_COMMENT_POSTING_SUCCESS,
  TOGGLE_IS_ERROR_WHILE_POSTING_COMMENT,
  GET_COMMENTS,
  RESET_ALL_STATUS,
  ADD_LIKE_TO_COMMENT,
  ADD_DISLIKE_TO_COMMENT
} from "../constants/comment";

export const postComment = ({
  description,
  questionId,
  userId
}) => async dispatch => {
  try {
    console.log("postComment config-----", config);
    const response = await api.post(
      API_URLS.postComment,
      {
        description,
        questionId,
        userId
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
    const { status } = response;
    if (status === 201) {
      dispatch(toggleIsPostingCommentSuccess(true));
      dispatch(getAllComments(questionId));
    } else {
      dispatch(toggleIsErrorWhilePostingComment(true));
    }
    dispatch(toggleIsPostingComment(false));
  } catch (error) {
    console.error(error);
    dispatch(toggleIsErrorWhilePostingComment(true));
    dispatch(toggleIsPostingComment(false));
  }
};

export const toggleIsPostingComment = isPosting => dispatch => {
  dispatch({
    type: TOGGLE_IS_COMMENT_POSTING,
    isPosting
  });
};

export const toggleIsPostingCommentSuccess = isPostingSuccess => dispatch => {
  dispatch({
    type: TOGGLE_IS_COMMENT_POSTING_SUCCESS,
    isPostingSuccess
  });
};

export const toggleIsErrorWhilePostingComment = isErrorWhilePosting => dispatch => {
  dispatch({
    type: TOGGLE_IS_ERROR_WHILE_POSTING_COMMENT,
    isErrorWhilePosting
  });
};

export const getAllComments = questionId => async dispatch => {
  try {
    const response = await api.get(`${API_URLS.getAllComments}/${questionId}`);
    const { status, data } = response;
    if (status === 200) {
      dispatch({
        type: GET_COMMENTS,
        questionId,
        comments: data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const resetAllStatus = () => dispatch => {
  dispatch({
    type: RESET_ALL_STATUS
  });
};

export const addLikeToComment = id => async dispatch => {
  try {
    console.log("addLikeToComment config-----", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
    const response = await api.post(
      API_URLS.addLikeToComment,
      { id },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
    const { status } = response;
    if (status === 201) {
      dispatch({
        type: ADD_LIKE_TO_COMMENT,
        id
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const addDislikeToComment = id => async dispatch => {
  try {
    console.log("addDislikeToComment config new-----", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    });
    const response = await api.post(
      API_URLS.addDislikeToComment,
      { id },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
    const { status } = response;
    if (status === 201) {
      dispatch({
        type: ADD_DISLIKE_TO_COMMENT,
        id
      });
    }
  } catch (error) {
    console.error(error);
  }
};
