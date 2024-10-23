import { coreApp } from "../../../../mod.ts";
import { updatePriorityFn } from "./updatePriority.fn.ts";
import { updatePriorityValidator } from "./updatePriority.val.ts";

export const updatePrioritySetup = () =>
	coreApp.acts.setAct({
		schema: "priority",
		fn: updatePriorityFn,
		actName: "updatePriority",
		validator: updatePriorityValidator(),
	});
