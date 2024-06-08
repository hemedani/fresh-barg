import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeRefferFn } from "./removeReffer.fn.ts";
import { removeRefferValidator } from "./removeReffer.val.ts";

export const removeRefferSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		actName: "removeReffer",
		fn: removeRefferFn,
		preAct: [justGhost],
		validator: removeRefferValidator(),
	});

export * from "./removeReffer.val.ts";
export * from "./removeReffer.fn.ts";
