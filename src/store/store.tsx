import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionsSlice } from "./questions/questions.slice";

export const reducers = combineReducers({
  questions: questionsSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
