import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { addUnitFn } from "./addUnit.fn.ts";
import { addUnitValidator } from "./addUnit.val.ts";
import { setUser } from "utils/setUser.ts";
import { checkOrgId } from "utils/checkOrgId.ts";

export const addUnitSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		fn: addUnitFn,
		actName: "addUnit",
		preAct: [
			setTokens,
			setUser,
			/*grantAccess({
				levels: ["Orghead", "Ghost"],
				features: ["create unit"],
			}),*/
			checkOrgId,
		],
		validator: addUnitValidator(),
	});
