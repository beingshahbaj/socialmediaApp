import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";




 export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;

      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
  

})

export default PostsSlice.reducer;
























































































































































































































