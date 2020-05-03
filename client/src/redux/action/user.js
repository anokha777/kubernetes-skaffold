import api from "../../utils/api";
import { API_URLS, token } from "../../config/apiEndpoints";
import {
  TOGGLE_IS_POSTING,
  IS_SIGNUP_SUCCESS,
  IS_SIGNUP_FAILED,
  LOG_IN_SUCCESSFUL,
  LOG_IN_FAILED,
  RESET_IS_FAILED,
  LOGOUT
} from "../constants/user";

export const signup = (fname, lname, userName, password) => async dispatch => {
  try {
    const response = await api.post(API_URLS.signup, {
      fname,
      lname,
      username: userName,
      password
    });
    console.log("response----------------------", response);
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

export const login = (userName, password) => async dispatch => {
  try {
    const response = await api.post(API_URLS.signin, {
      username: userName,
      password
    });
    console.log("response------------------------------", response);
    const { status } = response;
    if (status === 200) {
      localStorage.setItem(token, response.data.token);
      dispatch(logInSuccessful(response.data));
    } else if (status === 401) {
      dispatch(logInFailed(response.msg));
    }
  } catch (error) {
    console.log(error);
    dispatch(logInFailed("error occured while log in"));
  }
};

const logInSuccessful = response => dispatch => {
  dispatch({
    type: LOG_IN_SUCCESSFUL,
    token: response.token,
    loggedIn: true,
    id: response.id,
    userName: response.userName
  });
};

const logInFailed = errorMessage => dispatch => {
  dispatch({
    type: LOG_IN_FAILED,
    logInErrorMessage: errorMessage,
    isLoginFailed: true
  });
};

export const resetIsLoginFailed = () => dispatch => {
  dispatch({
    type: RESET_IS_FAILED
  });
};

export const toggleIsPosting = isPosting => dispatch => {
  dispatch({
    type: TOGGLE_IS_POSTING,
    isPosting
  });
};

export const toggleIsPostingSuccess = isSignUpSuccess => dispatch => {
  dispatch({
    type: IS_SIGNUP_SUCCESS,
    isSignUpSuccess
  });
};

export const toggleIsErrorWhilePosting = isSignUpFailed => dispatch => {
  dispatch({
    type: IS_SIGNUP_FAILED,
    isSignUpFailed
  });
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
};
