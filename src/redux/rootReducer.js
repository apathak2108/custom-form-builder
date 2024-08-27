import { combineReducers } from "redux";
import homeReducer from "./reducers/home";
import formReducer from "./reducers/form";

const rootReducer = combineReducers({
  home: homeReducer,
  form: formReducer,
});

export default rootReducer;
