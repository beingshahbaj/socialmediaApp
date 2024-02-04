import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from "../feature/FetchpostSlice";
import DetailSlice from "../feature/GetDetails";



const store = configureStore({
  reducer: {
    posts: PostsSlice,
    detail: DetailSlice,

  },
})

export default store;