import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "../services/auth/context/useUserContext";

type PrivateRouteProps = {
  forSignedIn?: boolean;
};

export function PrivateRoute({ forSignedIn = false }: PrivateRouteProps) {
  const { contextUserData } = useUserContext();

  if ((forSignedIn && contextUserData) || (!forSignedIn && !contextUserData)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
