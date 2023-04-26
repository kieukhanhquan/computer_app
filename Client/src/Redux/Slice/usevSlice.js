import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsev = createAsyncThunk(
    "fetchUsev",
  async (data, { dispatch }) => {
      try {
          const response = await axios.get(`http://localhost/WebApp/Server/index.php/usev?$ClientID=${data.ID}`)
          return response.data
      }
      catch (err) {
          alert(err.response.data)
      }
  });


const usevSlice = createSlice({
    name: 'usevSlice',
    initialState: {
      usev: [],
      loader: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsev.pending, (state) => {
          state.loader = true;
          state.error = null;
        })
        .addCase(fetchUsev.fulfilled, (state, action) => {
          state.usev = action.payload;
          state.loader = false;
          state.error = null;
        })
        .addCase(fetchUsev.rejected, (state, action) => {
          state.loader = false;
          state.error = action.error.message;
        })
        
    },
  });
  
  export default usevSlice.reducer;