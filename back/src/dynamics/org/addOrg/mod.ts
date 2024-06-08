import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { addOrgFn } from "./addOrg.fn.ts";
import { addOrgValidator } from "./addOrg.val.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const addOrgSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		fn: addOrgFn,
		actName: "addOrg",
		preAct: [setTokens, setUser, justGhost],
		validator: addOrgValidator(),
	});

export * from "./addOrg.fn.ts";
export * from "./addOrg.val.ts";
