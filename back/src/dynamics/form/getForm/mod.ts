import { coreApp } from "../../../../mod.ts";
import { getFormFn } from "./getForm.fn.ts";
import { getFormValidator } from "./getForm.val.ts";

export const getFormSetup = () =>
	coreApp.acts.setAct({
		schema: "form",
		fn: getFormFn,
		actName: "getForm",
		validator: getFormValidator(),
	});
