import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { addCityFn } from "./addCity.fn.ts";
import { addCityValidator } from "./addCity.val.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const addCitySetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		actName: "addCity",
		fn: addCityFn,
		preAct: [setTokens, setUser, justGhost],
		validator: addCityValidator(),
	});

export * from "./addCity.fn.ts";
export * from "./addCity.val.ts";
