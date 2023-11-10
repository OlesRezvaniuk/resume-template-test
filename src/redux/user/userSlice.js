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
  modalData: { data: null, type: null, visible: false },
  changedData: null,
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
    changeData(state, { payload }) {
      state.userData.tel = "ggg";
    },
    changeVisibleContactsModal(state, { payload }) {
      state.modalData = null;
    },
    changedData(state, { payload }) {
      state.changedData = payload;
    },
  },
});

export const { changeData, changeVisibleContactsModal, changedData } =
  userSlice.actions;

export default userSlice.reducer;
