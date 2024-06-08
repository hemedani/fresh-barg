import { boolean, object, objectIdValidation, optional, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const updateFormValidator = () => {
  return object({
    set: object({
      id:objectIdValidation,
      title: optional(string()),
      isActive: optional(boolean())
    }),
    get: selectStruct("form", 1),
  });
};
