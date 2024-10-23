import { coreApp } from "../../../../mod.ts";
import { countCitiesFn } from "./countCities.fn.ts";
import { countCitiesValidator } from "./countCities.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const countCitiesSetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		fn: countCitiesFn,
		actName: "countCities",
		preAct: [
			setTokens,
			setUser,
			justGhost,
		],
		validator: countCitiesValidator(),
	});
