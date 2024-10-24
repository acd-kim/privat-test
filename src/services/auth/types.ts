export type TUserFields = {
  username: string;
  password: string;
};

export type TUserData = TUserFields & {
  id: number;
  token: string;
};

export type TUserResponse =
  | {
      data: TUserData;
    }
  | {
      data: null;
      message: string;
    };
