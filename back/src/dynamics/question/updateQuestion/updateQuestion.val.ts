import { boolean, number, object, objectIdValidation, optional, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const updateQuestionValidator = () => {
  return object({
    set: object({
      id:objectIdValidation,
      order:optional(number()),
      title: optional(string()),
      isActive: optional(boolean())
    }),
    get: selectStruct("question", 1),
  });
};
