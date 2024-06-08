import { coreApp } from "../../../../mod.ts";
import { addPredefletterFn } from "./addPredefletter.fn.ts";
import { addPredefletterValidator } from "./addPredefletter.val.ts";

export const addPredefletterSetup = () =>
  coreApp.acts.setAct({
    schema: "preDefLetter",
    fn: addPredefletterFn,
    actName: "addPredefletter",
    validator: addPredefletterValidator(),
  });

export * from "./addPredefletter.fn.ts";
export * from "./addPredefletter.val.ts";
