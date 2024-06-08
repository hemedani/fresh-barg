import { grantAccess } from "utils/grantAccess.ts";
import { coreApp } from "../../../../mod.ts";
import { getUnitsFn } from "./getUnits.fn.ts";
import { getUnitsValidator } from "./getUnits.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const getUnitsSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		fn: getUnitsFn,
		actName: "getUnits",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Orghead", "Ghost"],
				features: ["create unit"],
			}),
		],
		validator: getUnitsValidator(),
	});

export * from "./getUnits.fn.ts";
export * from "./getUnits.val.ts";
