import { FormEvent, memo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthForm } from "../components/AuthForm";
import { ERequestStatus } from "../global.types";
import { useUserContext } from "../services/auth/context/useUserContext";
import { getAuthStatusSelector } from "../services/auth/redux/authSelector";
import { sendLogin } from "../services/auth/redux/authThunk";
import { TUserData } from "../services/auth/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function AuthPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(getAuthStatusSelector);
  const { setContextUserData } = useUserContext();
  const isLoading = status === ERequestStatus.LOADING;

  async function login(username: string, password: string) {
    const { payload } = await dispatch(sendLogin({ username, password }));

    // save user and redirect after success
    if (payload) {
      setContextUserData(payload as TUserData);
      toast.success("You are successfully authorized");
      navigate("/");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;

    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    login(username, password);
  }

  return (
    <main className="page-container">
      <AuthForm onSubmit={handleSubmit} loading={isLoading} />
    </main>
  );
}

export default memo(AuthPage);
