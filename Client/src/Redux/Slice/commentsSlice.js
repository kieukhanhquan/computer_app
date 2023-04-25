import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  "fetchComments",
async (data, { dispatch }) => {
    try {
        const response = await axios.get(`http://localhost/WebApp/Server/index.php/comment?productID=${data}`)
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});
export const addComment = createAsyncThunk(
  "addComment",
async (data_post, { dispatch }) => {
    try {
        await axios.post("http://localhost/WebApp/Server/index.php/comment?add", {
          clientID: data_post.ClientID,
          productID: data_post.ProductID,
          content: data_post.Content,
      })
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
      .addCase(fetchComments.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
