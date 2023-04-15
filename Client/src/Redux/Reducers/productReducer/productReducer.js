import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  "fetchProduct",
async (data, { dispatch }) => {
    try {
        const response = await axios.get("http://localhost/WebApp/Server/index.php/product")
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});

const productsSlice = createSlice({
  name: 'productReducer',
  initialState: {
    products: [],
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
