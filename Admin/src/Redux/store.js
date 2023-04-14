import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/userSlice'
import orderReducer from './Slice/orderSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer
  },
})