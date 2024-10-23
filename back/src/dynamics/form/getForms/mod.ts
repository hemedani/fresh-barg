import { coreApp } from "../../../../mod.ts";
import { getFormsFn } from "./getForms.fn.ts";
import { getFormsValidator } from "./getForms.val.ts";

export const getFormsSetup = () =>
	coreApp.acts.setAct({
		schema: "form",
		fn: getFormsFn,
		actName: "getForms",
		validator: getFormsValidator(),
	});
