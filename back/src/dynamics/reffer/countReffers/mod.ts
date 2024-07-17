import { coreApp } from "../../../../mod.ts";
import { countReffersFn } from "./countReffers.fn.ts";
import { countReffersValidator } from "./countReffers.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const countReffersSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		fn: countReffersFn,
		actName: "countReffers",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: countReffersValidator(),
	});

export * from "./countReffers.val.ts";
export * from "./countReffers.fn.ts";
