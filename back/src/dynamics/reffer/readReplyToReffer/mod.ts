import { coreApp } from "../../../../mod.ts";
import { readReplyToRefferFn } from "./readReplyToReffer.fn.ts";
import { readReplyToRefferValidator } from "./readReplyToReffer.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";
export const readReplyToRefferSetup = () =>
	coreApp.acts.setAct({
		schema: "reffer",
		fn: readReplyToRefferFn,
		actName: "readReplyToReffer",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: readReplyToRefferValidator(),
	});
