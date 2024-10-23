import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeCityFn } from "./removeCity.fn.ts";
import { removeCityValidator } from "./removeCity.val.ts";

export const removeCitySetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		actName: "removeCity",
		fn: removeCityFn,
		preAct: [justGhost],
		validator: removeCityValidator(),
	});
