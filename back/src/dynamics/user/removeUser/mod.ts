import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeUserFn } from "./removeUser.fn.ts";
import { removeUserValidator } from "./removeUser.val.ts";

export const removeUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		actName: "removeUser",
		fn: removeUserFn,
		preAct: [justGhost],
		validator: removeUserValidator(),
	});

export * from "./removeUser.fn.ts";
export * from "./removeUser.val.ts";
