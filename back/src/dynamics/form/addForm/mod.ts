import { coreApp } from "../../../../mod.ts";
import { addFormFn } from "./addForm.fn.ts";
import { addFormValidator } from "./addForm.val.ts";

export const addFormSetup = () =>
	coreApp.acts.setAct({
		schema: "form",
		fn: addFormFn,
		actName: "addForm",
		validator: addFormValidator(),
	});

export * from "./addForm.fn.ts";
export * from "./addForm.val.ts";
