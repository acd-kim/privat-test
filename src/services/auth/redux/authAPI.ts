import { usersMock } from "../mocks/usersMock";
import { TUserResponse } from "../types";

const TIMEOUT = 500;

export function fetchLogin(username: string, password: string) {
  return new Promise<TUserResponse>((resolve, reject) =>
    setTimeout(() => {
      const user = usersMock.find((user) => user.username === username && user.password === password);

      if (user) {
        return resolve({
          data: user,
        });
      } else {
        return reject({ message: "Invalid credentials", data: null });
      }
    }, TIMEOUT),
  );
}

export function fetchLoginWithToken(token: string) {
  return new Promise<TUserResponse>((resolve, reject) =>
    setTimeout(() => {
      const user = usersMock.find((user) => user.token === token);

      if (user) {
        return resolve({
          data: user,
        });
      } else {
        return reject({ message: "Invalid token", data: null });
      }
    }, TIMEOUT),
  );
}
