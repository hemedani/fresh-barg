import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { updateUnitFn } from "./updateUnit.fn.ts";
import { updateUnitValidator } from "./updateUnit.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const updateUnitSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		fn: updateUnitFn,
		actName: "updateUnit",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Ghost", "Orghead"],
				features: ["edit unit"],
			}),
		],
		validator: updateUnitValidator(),
	});

export * from "./updateUnit.fn.ts";
export * from "./updateUnit.val.ts";
