import { object, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const updatePriorityValidator = () => {
  return object({
    set: object({
      _id: string(),
      name: string(),
    }),
    get: selectStruct("priority", { priority: 1 }),
  });
};
