import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
