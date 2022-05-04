import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducers";

// ///////////////////////////////////////

///////////////////////////// import middleware

import { secondMiddleware, fetchData } from "../middleware/middleware";

const store = createStore(rootReducer, applyMiddleware(secondMiddleware));

console.log("store");
console.log(store.getState());

store.dispatch(fetchData());

export default store;
