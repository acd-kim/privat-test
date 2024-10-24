import { COOKIE_MAX_AGE } from "../../../globals";

export class CookieWrapper {
  static setCookieAuth(token: string) {
    document.cookie = `AuthorizationToken=Bearer ${token}; path=/; max-age=${COOKIE_MAX_AGE}`;
  }

  static getCookieAuth() {
    const data = document.cookie;
    const match = data.match(/AuthorizationToken=Bearer\s([^\s;]+)/);

    return match ? match[1] : null;
  }
}
