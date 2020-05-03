import {
  IS_SIGNUP_SUCCESS,
  IS_SIGNUP_FAILED,
  TOGGLE_IS_POSTING,
  LOG_IN_FAILED,
  LOG_IN_SUCCESSFUL,
  RESET_IS_FAILED,
  LOGOUT
} from "../constants/user";

const initialState = {
  isPosting: false,
  isSignUpSuccess: false,
  isSignUpFailed: false,
  signedIn: false,
  isLoginFailed: false,
  isLoginFailed: "",
  loggedIn: false,
  id: null,
  userName: null,
  token: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: action.isSignUpSuccess
      };
    case IS_SIGNUP_FAILED:
      return {
        ...state,
        isSignUpFailed: action.isSignUpFailed
      };
    case TOGGLE_IS_POSTING:
      return {
        ...state,
        isPosting: action.isPosting
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        logInErrorMessage: action.logInErrorMessage,
        isLoginFailed: action.isLoginFailed
      };
    case LOG_IN_SUCCESSFUL:
      return {
        ...state,
        token: action.token,
        loggedIn: action.loggedIn,
        id: action.id,
        userName: action.userName
      };
    case RESET_IS_FAILED:
      return {
        ...state,
        isLoginFailed: false
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        userName: null,
        id: null,
        token: null
      };
    default:
      return state;
  }
};

export default userReducer;
