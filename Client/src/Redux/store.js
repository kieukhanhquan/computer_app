import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./Slice/productSlice";
import newsSlice from "./Slice/newsSlice";
import commentsSlice from "./Slice/commentsSlice";

export const store = configureStore({
  reducer:{
    product: productSlice,
    news: newsSlice,
    comments: commentsSlice,
  }

  // add more reducers here
});
