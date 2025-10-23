import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeOrgFn } from "./removeOrg.fn.ts";
import { removeOrgValidator } from "./removeOrg.val.ts";

export const removeOrgSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		actName: "removeOrg",
		fn: removeOrgFn,
		preAct: [justGhost],
		validator: removeOrgValidator(),
	});
