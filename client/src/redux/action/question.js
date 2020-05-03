import api from "../../utils/api";
import { API_URLS, config, token } from "../../config/apiEndpoints";
import {
  TOGGLE_IS_POSTING,
  TOGGLE_IS_POSTING_SUCCESS,
  TOGGLE_IS_ERROR_WHILE_POSTING,
  GET_ALL_QUESTIONS,
  ADD_LIKE_TO_QUESTION,
  ADD_DISLIKE_TO_QUESTION
} from "../constants/question";

export const postQuestion = question => async dispatch => {
  try {
    console.log('postQuestion config-----', config);
    console.log('localStorage.getItem(token)-----', localStorage.getItem('token'));
    const response = await api.post(API_URLS.postQuestion, question, {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    });
    console.log("postQuestion response------------", response);
    const { status } = response;
    if (status === 201) {
      dispatch(toggleIsPostingSuccess(true));
    } else {
      dispatch(toggleIsErrorWhilePosting(true));
    }
    dispatch(toggleIsPosting(false));
  } catch (error) {
    console.error(error);
    dispatch(toggleIsErrorWhilePosting(true));
    dispatch(toggleIsPosting(false));
  }
};

export const getAllQuestions = () => async dispatch => {
  try {
    const response = await api.get(API_URLS.getAllQuestions);
    console.log("response--getAllQuestions----------", response);
    const { status, data } = response;
    if (status === 200) {
      dispatch({
        type: GET_ALL_QUESTIONS,
        questions: data
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const searchQuestions = query => async dispatch => {
  try {
    const response = await api.get(
      `${API_URLS.searchQuestions}?search=${query}`
    );
    const { status, data } = response;
    if (status === 200) {
      dispatch({
        type: GET_ALL_QUESTIONS,
        questions: data
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const toggleIsPosting = isPosting => dispatch => {
  dispatch({
    type: TOGGLE_IS_POSTING,
    isPosting
  });
};

export const toggleIsPostingSuccess = isPostingSuccess => dispatch => {
  dispatch({
    type: TOGGLE_IS_POSTING_SUCCESS,
    isPostingSuccess
  });
};

export const toggleIsErrorWhilePosting = isErrorWhilePosting => dispatch => {
  dispatch({
    type: TOGGLE_IS_ERROR_WHILE_POSTING,
    isErrorWhilePosting
  });
};

export const addLikeToQuestion = id => async dispatch => {
  try {
    console.log('addLikeToQuestion config-----', {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    });
    const response = await api.post(API_URLS.addLikeToQuestion, { id }, {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    });
    const { status } = response;
    if (status === 201) {
      dispatch({
        type: ADD_LIKE_TO_QUESTION,
        id
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const addDislikeToQuestion = id => async dispatch => {
  try {
    console.log('addDislikeToQuestion config-----', {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    });
    const response = await api.post(API_URLS.addDislikeToQuestion, { id }, {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    });
    const { status } = response;
    if (status === 201) {
      dispatch({
        type: ADD_DISLIKE_TO_QUESTION,
        id
      });
    }
  } catch (error) {
    console.error(error);
  }
};
