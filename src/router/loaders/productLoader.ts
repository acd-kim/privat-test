import { defer, LoaderFunctionArgs } from "react-router-dom";

import type { TProductFull } from "../../services/products/types";

import { API_URL } from "../../globals";

export async function productByIdLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await fetch(`${API_URL}/products/${params.id}`);
    const data = (await response.json()) as TProductFull;

    // return (await response.json()) as TProductFull;
    return defer(data);
  } catch (error) {
    console.error(error);
  }
}
