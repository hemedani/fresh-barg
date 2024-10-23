import { isPositionInUser } from "utils/isPositionInUser.ts";
import * as modTs from "../../../../mod.ts";
import { getReffersFn } from "./getReffers.fn.ts";
import { getReffersValidator } from "./getReffers.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const getReffersSetup = () =>
	modTs.coreApp.acts.setAct({
		schema: "reffer",
		fn: getReffersFn,
		actName: "getReffers",
		preAct: [
			setTokens,
			setUser,
			isPositionInUser,
		],
		validator: getReffersValidator(),
	});
