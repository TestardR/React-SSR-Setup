import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../client/reducers";

const INITIAL_STATE = {};

export default () => {
  const store = createStore(reducers, INITIAL_STATE, applyMiddleware(thunk));

  return store;
};
