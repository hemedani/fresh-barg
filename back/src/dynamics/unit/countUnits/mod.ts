import { coreApp } from "../../../../mod.ts";
import { countUnitsFn } from "./countUnits.fn.ts";
import { countUnitsValidator } from "./countUnits.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const countUnitsSetup = () =>
	coreApp.acts.setAct({
		schema: "unit",
		fn: countUnitsFn,
		actName: "countUnits",
		preAct: [
			setTokens,
			setUser,
			justGhost,
		],
		validator: countUnitsValidator(),
	});
