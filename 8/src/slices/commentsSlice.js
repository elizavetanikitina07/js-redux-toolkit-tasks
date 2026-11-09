import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => {
    builder
      .addCase(usersActions.removeUser, (state, { payload }) => {
        const removedUserId = payload.id ?? payload;
        const remaining = Object.values(state.entities).filter(
          (comment) => comment.author !== removedUserId
        );
        commentsAdapter.setAll(state, remaining);
      })
      .addCase(postsActions.removePost, (state, { payload }) => {
        const removedPost = payload;
        const commentIds = removedPost.comments ?? [];
        const remaining = Object.values(state.entities).filter(
          (comment) => !commentIds.includes(comment.id)
        );
        commentsAdapter.setAll(state, remaining);
      });
  },
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;
