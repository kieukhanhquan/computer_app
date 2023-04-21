import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/userSlice'
import orderReducer from './Slice/orderSlice'
import adminSlice from './Slice/adminSlice'
import inforSlice from './Slice/inforSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    admin: adminSlice,
    infor: inforSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})