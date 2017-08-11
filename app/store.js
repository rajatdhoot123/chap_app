import { createStore, combineReducers } from "redux";

const reducer = (state = { user: "test", authed: false }, action) => {
  return state;
};

export const store = createStore(
  combineReducers({
    usr: reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
