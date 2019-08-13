import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { lazyReducerEnhancer } from 'pwa-helpers';

const composetEnhancers = composeWithDevTools({});

export default createStore(
  (state, payload) => payload,
  composetEnhancers(lazyReducerEnhancer(combineReducers))
);
