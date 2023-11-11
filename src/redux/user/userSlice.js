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
  userContacts: {
    tel: "+380681193663",
    email: "orezvaniuk@gmail.com",
    city: "Kyiv",
    country: "Ukraine",
  },
  token: null,
  status: null,
  modalData: { item: null, type: null, visible: false },
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
  reducers: {
    changeContacts(state, { payload }) {
      state.userContacts = payload;
    },
    optionsVisible(state, { payload }) {
      state.modalData = payload;
    },
    changedData(state, { payload }) {
      state.changedData = payload;
    },
  },
});

export const { changeContacts, optionsVisible, changedData } =
  userSlice.actions;

export default userSlice.reducer;
