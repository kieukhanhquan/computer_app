import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./Slice/productSlice";

export const store = configureStore({
  reducer:{
    product: productSlice
  }

  // add more reducers here
});
