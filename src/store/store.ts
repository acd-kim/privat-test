import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../services/auth/redux/authSlice";
import productsReducer from "../services/products/redux/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
