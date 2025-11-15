import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getOrgsFn } from "./getOrgs.fn.ts";
import { getOrgsValidator } from "./getOrgs.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const getOrgsSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		fn: getOrgsFn,
		actName: "getOrgs",
		preAct: [
			setTokens,
			setUser,
			grantAccess({ levels: ["Ghost", "Orghead", "Unithead"] }),
		],
		validator: getOrgsValidator(),
	});
