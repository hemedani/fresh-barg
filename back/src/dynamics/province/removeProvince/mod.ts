import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeProvinceFn } from "./removeProvince.fn.ts";
import { removeProvinceValidator } from "./removeProvince.val.ts";

export const removeProvinceSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		actName: "removeProvince",
		fn: removeProvinceFn,
		preAct: [justGhost],
		validator: removeProvinceValidator(),
	});
