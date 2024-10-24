import { TRootState } from "../../../store/store";

export const getAuthStatusSelector = (state: TRootState) => state.auth.status;
