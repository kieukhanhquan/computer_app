import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk(
  "fetchNews",
async (data, { dispatch }) => {
    try {
        const response = await axios.get("http://localhost/WebApp/Server/index.php/news")
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState: {
    news: [],
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
