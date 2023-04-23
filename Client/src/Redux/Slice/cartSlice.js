import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk(
  "fetchCart",
async (data, { dispatch }) => {
    try {
        const response = await axios.get(`http://localhost/WebApp/Server/index.php/possess?$ClientID=${data.ID}`)
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});

export const updateQuantity = createAsyncThunk(
  "updateQuantity",
  async (data, {dispatch}) => {
      try {
          await axios.put(`http://localhost/WebApp/Server/index.php/possess`, {
              ProductID : data.ProductID,
              quantity : data.quantity
          })
          await dispatch(fetchCart(data.user));

      }
      catch (err) {
          alert(err.response.data)
      }
  }
)

export const addtoCart = createAsyncThunk(
  "addtoCart",
  async (data, { dispatch, getState }) => {
    console.log(data.user);
    try {
        const existItem = getState().cart.find(item => item.ProductID = data.ID);
        if(existItem){
          const newquantity = getState().cart.quantity + 1;
          const ID = data.product.ID;
          const cart = getState().cart;
            await dispatch(updateQuantity({}))

        }
        else{

        }
       
    }
    catch (err) {
        alert(err.response.data)
    }
  }
)



const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loader = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(updateQuantity.pending, (state, action) => {
        state.loader = true
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
  },
});

export default cartSlice.reducer;
