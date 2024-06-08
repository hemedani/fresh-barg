import { object, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const getPriorityValidator = () => {
  return object({
    set: object({
      _id: string(),
    }),
    get: selectStruct("priority", { priority: 1 }),
  });
};
