import { LoaderFunction } from "react-router-dom";

export type TRouterLoaderData<TLoaderFn extends LoaderFunction> =
  Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;

export enum ERequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  FULFILLED = "fulfilled",
  FAILED = "failed",
}
