import { object, string } from "deps";
import { priorityInp } from "../../../../declarations/selectInp.ts";
import { selectStruct } from "../../../../mod.ts";

export const addPriorityValidator = () => {
  return object({
    set: object({
      name: string(),
      orgId: string(),
    }),
    get: selectStruct<priorityInp>("priority", 1),
  });
};
