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
    toogleCompleted: (state, action: PayloadAction<number>) => {
      state.data = state.data.map((post) => {
        if (post.id === action.payload) {
          return { ...post, completed: !post.completed };
        }
        return post;
      });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPost, toogleCompleted, deletePost } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
