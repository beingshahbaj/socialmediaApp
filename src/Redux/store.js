import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import SongReducer from "./Reducers/songreducer";
import Postreducer from "./Reducers/PostReducer";

const rootReducer = combineReducers({
  song: SongReducer,
  post: Postreducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
