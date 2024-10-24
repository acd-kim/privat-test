import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../../store/hooks";
import { useUserContext } from "../context/useUserContext";
import { CookieWrapper } from "../helpers/cookie";
import { sendLoginWithToken } from "../redux/authThunk";
import { TUserData } from "../types";

export function useAuthWithToken() {
  const dispatch = useAppDispatch();
  const { setContextUserData } = useUserContext();
  const [loading, setLoading] = useState(true);
  const notify = () =>
    toast.success("You are successfully authorized", {
      position: "top-center",
    });
  const hasNotified = useRef(false);

  function notifyOnce() {
    if (!hasNotified.current) {
      notify();
      hasNotified.current = true;
    }
  }

  async function getUser(token: string) {
    const { payload } = await dispatch(sendLoginWithToken(token));

    if (payload) {
      setContextUserData(payload as TUserData);
      setLoading(false);
      notifyOnce();
    }
  }

  useEffect(() => {
    const token = CookieWrapper.getCookieAuth();

    if (token) {
      getUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  return { loading };
}
