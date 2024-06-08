import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getPositionFn } from "./getPosition.fn.ts";
import { getPositionValidator } from "./getPosition.val.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const getPositionSetup = () =>
	coreApp.acts.setAct({
		schema: "position",
		fn: getPositionFn,
		actName: "getPosition",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: getPositionValidator(),
	});

export * from "./getPosition.fn.ts";
export * from "./getPosition.val.ts";
