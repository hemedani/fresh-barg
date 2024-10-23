import { setTokens } from "utils/setToken.ts";
import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { addProvinceFn } from "./addProvince.fn.ts";
import { addProvinceValidator } from "./addProvince.val.ts";
import { setUser } from "utils/setUser.ts";

export const addProvinceSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		fn: addProvinceFn,
		actName: "addProvince",
		preAct: [setTokens, setUser, justGhost],
		validator: addProvinceValidator(),
	});
