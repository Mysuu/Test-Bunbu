import { combineReducers } from "redux";

import appReducer from "./Todo/reducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
