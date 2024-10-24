import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../../globals";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch(`${API_URL}/products`);

  return response.json();
});
