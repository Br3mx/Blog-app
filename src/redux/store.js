import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import postsReducer from './postsRedux.js';
import categoriesReducer from './categoriesRedux.js';

const subreducers = {
    posts: postsReducer,
    categories: categoriesReducer
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;