import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userSlice from "./user/userSlice";

const persistRegistrConfig = {
  key: "user",
  storage,
  blacklist: ["status"],
};

const persistedRegistrReducer = persistReducer(persistRegistrConfig, userSlice);

export const rootReducer = combineReducers({
  user: persistedRegistrReducer,
});
