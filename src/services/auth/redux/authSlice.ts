import { createSlice } from "@reduxjs/toolkit";

import { ERequestStatus } from "../../../global.types";
import { sendLogin, sendLoginWithToken } from "./authThunk";

type TAuthState = {
  status: ERequestStatus;
};

const initialState: TAuthState = {
  status: ERequestStatus.IDLE,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder
      .addCase(sendLogin.pending, (state) => {
        state.status = ERequestStatus.LOADING;
      })
      .addCase(sendLogin.fulfilled, (state /*, action*/) => {
        state.status = ERequestStatus.FULFILLED;
      })
      .addCase(sendLogin.rejected, (state) => {
        state.status = ERequestStatus.FAILED;
      });

    // login with token
    builder
      .addCase(sendLoginWithToken.pending, (state) => {
        state.status = ERequestStatus.LOADING;
      })
      .addCase(sendLoginWithToken.fulfilled, (state /*, action*/) => {
        state.status = ERequestStatus.FULFILLED;
      })
      .addCase(sendLoginWithToken.rejected, (state) => {
        state.status = ERequestStatus.FAILED;
      });
  },
});

export default authSlice.reducer;
