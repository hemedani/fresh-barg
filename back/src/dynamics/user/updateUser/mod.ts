import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { coreApp } from "../../../../mod.ts";
import { updateUserFn } from "./updateUser.fn.ts";
import { updateUserValidator } from "./updateUser.val.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const updateUserSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: updateUserFn,
		actName: "updateUser",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: updateUserValidator(),
	});
