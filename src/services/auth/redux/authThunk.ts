import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { CookieWrapper } from "../helpers/cookie";
import { TUserFields } from "../types";
import { fetchLogin, fetchLoginWithToken } from "./authAPI";

export const sendLogin = createAsyncThunk("sendLogin", async ({ username, password }: TUserFields) => {
  try {
    const { data } = await fetchLogin(username, password);

    // save session token
    if (data?.token) {
      CookieWrapper.setCookieAuth(data.token);
    }

    return data;
  } catch (error) {
    toast.error((error as Error).message);

    return null;
  }
});

export const sendLoginWithToken = createAsyncThunk("sendLoginWithToken", async (token: string) => {
  try {
    const { data } = await fetchLoginWithToken(token);

    return data;
  } catch (error) {
    toast.error((error as Error).message);

    return null;
  }
});
