import { coreApp } from "../../../../mod.ts";
import { getPriorityFn } from "./getPriority.fn.ts";
import { getPriorityValidator } from "./getPriority.val.ts";

export const getPrioritySetup = () =>
  coreApp.acts.setAct({
    schema: "priority",
    fn: getPriorityFn,
    actName: "getPriority",
    validator: getPriorityValidator(),
  });

export * from "./getPriority.fn.ts";
export * from "./getPriority.val.ts";
