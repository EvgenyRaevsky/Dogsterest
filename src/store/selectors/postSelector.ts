import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectPostState = (state: RootState) => state.posts;

export const selectPosts = createSelector(
  [selectPostState],
  (selectPostState) => selectPostState.posts
);
