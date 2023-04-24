import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/userSlice'
import orderReducer from './Slice/orderSlice'
import adminSlice from './Slice/adminSlice'
import inforSlice from './Slice/inforSlice'
import statisslice from './Slice/statisSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    admin: adminSlice,
    infor: inforSlice, 
    statis: statisslice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})