import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchcomments = createAsyncThunk(
  "fetchcomments",
async (data, { dispatch }) => {
    try {
        const response = await axios.get("http://localhost/WebApp/Server/index.php/comment")
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: {
    comments: [],
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcomments.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchcomments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchcomments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
