import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const commentsAdapter = createEntityAdapter();

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    addComment: commentsAdapter.addOne,
    addComments: commentsAdapter.addMany,
  },
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors((state) => state.commentsReducer);
export default commentsSlice.reducer;