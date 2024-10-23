import { coreApp } from "../../../../mod.ts";
import { countPositionsFn } from "./countPositions.fn.ts";
import { countPositionsValidator } from "./countPositions.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const countPositionsSetup = () =>
	coreApp.acts.setAct({
		schema: "position",
		fn: countPositionsFn,
		actName: "countPositions",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Staff"],
				features: ["create letters"],
			}),
		],
		validator: countPositionsValidator(),
	});
