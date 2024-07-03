import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TData } from "../../utils/transformData";

interface initialPosts {
  posts: TData[];
}

const initialState: initialPosts = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<TData[]>) => {
      state.posts = action.payload;
    },
    addFavorite: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload) {
          if (state.posts[i].isFavorite !== true) {
            state.posts[i].likes += 1;
          } else {
            state.posts[i].likes -= 1;
          }
          state.posts[i].isFavorite = !state.posts[i].isFavorite;
        }
      }
    },
  },
});

export const { addData, addFavorite } = postsSlice.actions;
