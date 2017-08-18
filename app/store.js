import { createStore, combineReducers , compose , applyMiddleware } from "redux";
import * as reducers from './reducers'
import thunk from 'redux-thunk';

const composeEnhancers = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export const store = createStore(
  combineReducers({...reducers}),
  composeEnhancers
);
