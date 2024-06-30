import { bargApi } from "../../mod.ts";

export const loginRequest = async (phone: string) =>
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
