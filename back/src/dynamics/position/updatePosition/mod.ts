import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { updatePositionFn } from "./updatePosition.fn.ts";
import { updatePositionValidator } from "./updatePosition.val.ts";
import { setUser } from "utils/setUser.ts";

export const updatePositionSetup = () =>
	coreApp.acts.setAct({
		schema: "position",
		fn: updatePositionFn,
		actName: "updatePosition",
		preAct: [
			setTokens,
			setUser,
		],
		validator: updatePositionValidator(),
	});

export * from "./updatePosition.fn.ts";
export * from "./updatePosition.val.ts";
