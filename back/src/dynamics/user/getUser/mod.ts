import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getUserFn } from "./getUser.fn.ts";
import { getUserValidator } from "./getUser.val.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const getUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: getUserFn,
		actName: "getUser",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: getUserValidator(),
	});

export * from "./getUser.fn.ts";
export * from "./getUser.val.ts";
