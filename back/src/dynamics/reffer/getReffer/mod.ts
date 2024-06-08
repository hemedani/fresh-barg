import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getRefferFn } from "./getReffer.fn.ts";
import { getRefferValidator } from "./getReffer.val.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const getRefferSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		fn: getRefferFn,
		actName: "getReffer",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: getRefferValidator(),
	});

export * from "./getReffer.fn.ts";
export * from "./getReffer.val.ts";
