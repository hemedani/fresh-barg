import { coreApp } from "../../../../mod.ts";
import { addPriorityFn } from "./addPriority.fn.ts";
import { addPriorityValidator } from "./addPriority.val.ts";

export const addPrioritySetup = () =>
  coreApp.acts.setAct({
    schema: "priority",
    fn: addPriorityFn,
    actName: "addPriority",
    validator: addPriorityValidator(),
  });

export * from "./addPriority.fn.ts";
export * from "./addPriority.val.ts";
