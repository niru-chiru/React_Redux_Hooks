import { combineReducers } from "redux";
import login from './loginReducer';
import search from './searchReducer';

export default combineReducers({
  login,
  search
});
