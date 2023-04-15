import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productReducer/productReducer";

export const store = configureStore({
  reducer:{
    product: productReducer
  }

  // add more reducers here
});
