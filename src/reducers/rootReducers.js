import { combineReducers } from "redux";

import reducer from "./reducer";

const rootReducer = combineReducers({
  kryptoList: reducer,
});

export default rootReducer;
