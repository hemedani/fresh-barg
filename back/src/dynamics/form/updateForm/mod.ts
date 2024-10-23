import { coreApp } from "../../../../mod.ts";
import { updateFormFn } from "./updateForm.fn.ts";
import { updateFormValidator } from "./updateForm.val.ts";

export const updateFormSetup = () =>
	coreApp.acts.setAct({
		schema: "form",
		fn: updateFormFn,
		actName: "updateForm",
		validator: updateFormValidator(),
	});
