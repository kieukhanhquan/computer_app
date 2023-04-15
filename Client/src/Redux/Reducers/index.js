import { combineReducers } from "redux";

import productReducer from "./productReducer/productReducer";

const allReducers = combineReducers({
    productReducer,
  // add more reducers here
});
