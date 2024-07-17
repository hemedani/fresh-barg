import { coreApp } from "../../../../mod.ts";
import { countOrgsFn } from "./countOrgs.fn.ts";
import { countOrgsValidator } from "./countOrgs.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const countOrgsSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		fn: countOrgsFn,
		actName: "countOrgs",
		preAct: [
			setTokens,
			setUser,
			justGhost,
		],
		validator: countOrgsValidator(),
	});

export * from "./countOrgs.val.ts";
export * from "./countOrgs.fn.ts";
