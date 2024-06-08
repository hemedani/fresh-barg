import { coreApp } from "../../../../mod.ts";
import { updatePredefletterFn } from "./updatePredefletter.fn.ts";
import { updatePredefletterValidator } from "./updatePredefletter.val.ts";

export const updatePredefletterSetup = () =>
  coreApp.acts.setAct({
    schema: "preDefLetter",
    fn: updatePredefletterFn,
    actName: "updatePredefletter",
    validator: updatePredefletterValidator(),
  });

export * from "./updatePredefletter.fn.ts";
export * from "./updatePredefletter.val.ts";
