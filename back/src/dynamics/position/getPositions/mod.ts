import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getPositionsFn } from "./getPositions.fn.ts";
import { getPositionsValidator } from "./getPositions.val.ts";
import { setUser } from "utils/setUser.ts";

export const getPositionsSetup = () =>
	coreApp.acts.setAct({
		schema: "position",
		fn: getPositionsFn,
		actName: "getPositions",
		preAct: [
			setTokens,
			setUser,
		],
		validator: getPositionsValidator(),
	});
