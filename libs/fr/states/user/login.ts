import { bargApi } from "../../mod.ts";
import { user } from "./mod.ts";

export const login = async (
  signalInp: typeof user,
  phone: string,
  code: number,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const loggedUser = await bargApi.send({
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
  if (loggedUser.success) {
    signalInp.value = {
      data: { ...loggedUser.body },
      loader: false,
      err: null,
    };
  } else {
    signalInp.value = { data: {}, loader: false, err: loggedUser.body };
  }
  return loggedUser;
};
