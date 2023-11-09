import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseExports } from "../../firebase/firebase";
import { userSelector } from "./userSelector";

export const googleAuth = createAsyncThunk(
  "user/singUp",
  async (_, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      (async () => {
        try {
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(firebaseExports.auth, provider);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;

          if (result && credential) {
            resolve({ token, user });
          }
        } catch (error) {
          reject(error);
        }
      })();
    });
    return promise
      .then((result) => result)
      .catch((error) => rejectWithValue(error.message));
  }
);
