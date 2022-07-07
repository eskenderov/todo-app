import { RootState } from "store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postItem, postsTypes } from "./postsTypes";

const initialState: postsTypes = {
  data: [],
  error: null,
  loading: false,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<postItem>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setPost } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
