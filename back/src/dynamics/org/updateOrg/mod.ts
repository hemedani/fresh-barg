import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { updateOrgFn } from "./updateOrg.fn.ts";
import { updateOrgValidator } from "./updateOrg.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export * from "./updateOrg.fn.ts";
export * from "./updateOrg.val.ts";

export const updateOrgSetup = () =>
	coreApp.acts.setAct({
		schema: "org",
		fn: updateOrgFn,
		actName: "updateOrg",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Ghost", "Orghead"],
				features: ["edit org"],
			}),
		],
		validator: updateOrgValidator(),
	});
