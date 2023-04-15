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

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    product: [],
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
        state.product = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
