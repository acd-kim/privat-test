import { createSlice } from "@reduxjs/toolkit";

import { ERequestStatus } from "../../../global.types";
import { TProduct } from "../types";
import { getProducts } from "./productsThunk";

type TProductsState = {
  items: TProduct[];
  term: string;
  status: ERequestStatus;
};

const initialState: TProductsState = {
  items: [],
  term: "",
  status: ERequestStatus.IDLE,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsTermAction: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = ERequestStatus.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = ERequestStatus.FULFILLED;
        state.items = action.payload;
        state.term = "";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = ERequestStatus.FAILED;
      });
  },
});

export const { setProductsTermAction} = productsSlice.actions;
export default productsSlice.reducer;
