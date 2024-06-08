import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeUnitFn } from "./removeUnit.fn.ts";
import { removeUnitValidator } from "./removeUnit.val.ts";

export const removeUnitSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		actName: "removeCity",
		fn: removeUnitFn,
		preAct: [justGhost],
		validator: removeUnitValidator(),
	});

export * from "./removeUnit.val.ts";
export * from "./removeUnit.fn.ts";
