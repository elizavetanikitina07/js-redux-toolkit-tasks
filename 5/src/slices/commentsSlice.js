import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
    addComment: (state, { payload: { comment } }) => {
      state.comments.push(comment);
    },
  },
});

export const { actions } = commentsSlice;

export default commentsSlice.reducer;