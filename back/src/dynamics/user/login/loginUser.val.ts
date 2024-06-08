import { enums, number, object, optional, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const loginUserValidator = () => {
  return object({
    set: object({
      phone: string(),
      code: number(),
    }),
    get: optional(object({
      token: optional(enums([0, 1])),
      user: selectStruct("user", 1),
    })),
  });
};
