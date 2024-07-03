import { Signal } from "@preact/signals";
import { bargApi } from "../../mod.ts";
import { User } from "./mod.ts";

export const login = async (
  user: Signal<User>,
  phone: string,
  code: number,
) => {
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
          position: {
            _id: 1,
            level: 1,
          },
        },
      },
    },
  });
  user.value = { ...user.value, ...getUser.user };
  return getUser;
};
