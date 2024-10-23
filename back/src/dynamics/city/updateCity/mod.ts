import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { updateCityFn } from "./updateCity.fn.ts";
import { updateCityValidator } from "./updateCity.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const updateCitySetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		fn: updateCityFn,
		actName: "updateCity",
		preAct: [
			setTokens,
			setUser,
			justGhost,
		],
		validator: updateCityValidator(),
	});
