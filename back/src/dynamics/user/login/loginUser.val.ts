import { enums, number, object, optional } from "deps";
import { selectStruct } from "../../../../mod.ts";
import { mobilePattern } from "share/schemas/mod.ts";

export const loginUserValidator = () => {
  return object({
    set: object({
      phone: mobilePattern,
      code: number(),
    }),
    get: optional(object({
      token: optional(enums([0, 1])),
      user: selectStruct("user", 1),
    })),
  });
};
