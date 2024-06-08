import { coreApp } from "../../../../mod.ts";
import { tempUserFn } from "./tempUser.fn.ts";
import { tempUserValidator } from "./tempUser.val.ts";

export const tempUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: tempUserFn,
		actName: "tempUser",
		validator: tempUserValidator(),
		validationRunType: "create",
	});

export * from "./tempUser.fn.ts";
export * from "./tempUser.val.ts";
