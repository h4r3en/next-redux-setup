import * as reduxModule from "redux";
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from "../reducers";

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const enhancer = composeEnhancers(applyMiddleware(logger, thunk));


// ## THIS FOR INJECTABLE
const store = createStore(createReducer(), enhancer);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default () => store;
