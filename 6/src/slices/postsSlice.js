import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.ids = payload.ids;
      state.entities = payload.entities;
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;