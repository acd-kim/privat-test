import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { MainRouter } from "./router/MainRouter";
import { UserContextProvider } from "./services/auth/context/UserContext";
import { store } from "./store/store";

import "react-toastify/dist/ReactToastify.css";

import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <MainRouter />
        <ToastContainer autoClose={2000} hideProgressBar />
      </UserContextProvider>
    </Provider>
  </StrictMode>,
);
