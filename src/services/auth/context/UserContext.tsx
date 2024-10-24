import { createContext, PropsWithChildren, useState } from "react";

import { TUserData } from "../types";

interface UserContextType {
  contextUserData: TUserData | null;
  setContextUserData: (data: TUserData) => void;
}

export const UserContext = createContext<UserContextType>({
  contextUserData: null,
  setContextUserData: () => {},
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [contextUserData, setContextUserData] = useState<UserContextType["contextUserData"]>(null);

  return <UserContext.Provider value={{ contextUserData, setContextUserData }}>{children}</UserContext.Provider>;
};
