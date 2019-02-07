import { createStore, applyMiddleware, compose } from 'redux'; // This createStore takes in multiple reducer (like auth reducer, profile reducer etc.)
// combineReducer combines all of our reducer
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];
// @params  root reducer, initial state, enhancer (applyMiddleWare)
const store = createStore(
  rootReducer,
  initialState,
  compose(
    // compose() is used when we want to enable Redux devtools
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
