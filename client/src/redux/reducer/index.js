import { combineReducers } from "redux";
import question from "./question";
import comment from "./comment";
import user from "./user";

const rootReducer = combineReducers({
  question,
  comment,
  user
});

export default rootReducer;
