import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      state.ids = payload.ids;
      state.entities = payload.entities;
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;