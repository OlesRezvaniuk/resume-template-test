import { createSlice } from "@reduxjs/toolkit";
import { googleAuth } from "./userOperations";

export const StatusForAll = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  user: null,
  token: null,
  status: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(googleAuth.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.token = payload.user.accessToken;
      state.user = payload.user;
    });
  },
});

export default userSlice.reducer;
