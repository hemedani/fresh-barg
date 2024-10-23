import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { getCitiessFn } from "./getCities.fn.ts";
import { getCitiesValidator } from "./getCities.val.ts";
import { setUser } from "utils/setUser.ts";

export const getCitiesSetup = () =>
	coreApp.acts.setAct({
		schema: "city",
		fn: getCitiessFn,
		actName: "getCities",
		preAct: [setTokens, setUser],
		validator: getCitiesValidator(),
	});
