import { signal } from "@preact/signals";
import {
  DeepPartial,
  lesanApi,
  userSchema,
} from "../../back/declarations/selectInp.ts";

export const bargApi = lesanApi({ URL: "http://localhost:1377/lesan" });

export function createAppState() {
  type User = DeepPartial<userSchema>;
  const user = signal<User>({});

  const loginRequest = async (phone: string) =>
    await bargApi.send({
      model: "user",
      act: "loginReq",
      details: {
        set: {
          phone,
        },
        get: {
          phone: 1,
        },
      },
    });

  const login = async (phone: string, code: number) => {
    const getUser = await bargApi.send({
      model: "user",
      act: "login",
      details: {
        set: {
          phone,
          code,
        },
        get: {
          token: 1,
          user: {
            first_name: 1,
            last_name: 1,
            phone: 1,
            email: 1,
            province: {
              _id: 1,
              name: 1,
            },
            readedLetter: {
              _id: 1,
              author: 1,
              sender: 1,
              recievers: 1,
              content: 1,
            },
          },
        },
      },
    });
    user.value = { ...user.value, ...getUser.user };
    return getUser;
  };

  return { user, loginRequest, login };
}
