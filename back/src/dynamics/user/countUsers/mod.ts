import { coreApp } from "../../../../mod.ts";
import { countUsersFn } from "./countUsers.fn.ts";
import { countUsersValidator } from "./countUsers.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const countUsersSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: countUsersFn,
		actName: "countUsers",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
			grantAccess({
				levels: ["Orghead", "Unithead"],
				features: ["add staff"],
			}),
		],
		validator: countUsersValidator(),
	});

export * from "./countUsers.val.ts";
export * from "./countUsers.fn.ts";
