import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { dogsReducer } from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export const myStore = createStore(
  dogsReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default myStore;
