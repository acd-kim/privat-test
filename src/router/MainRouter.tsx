import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "../components/Layout";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import Page404 from "../pages/Page404";
import ProductPage from "../pages/ProductPage";
import { useAuthWithToken } from "../services/auth/hooks/useAuthWithToken";
import { productByIdLoader } from "./loaders/productLoader";
import { PrivateRoute } from "./PrivateRoute";

export function MainRouter() {
  const { loading } = useAuthWithToken();

  if (loading) {
    return null;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          element: <PrivateRoute forSignedIn />,
          children: [
            {
              path: "/login",
              element: <AuthPage />,
            },
          ],
        },
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "/:id",
              element: <ProductPage />,
              loader: productByIdLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
