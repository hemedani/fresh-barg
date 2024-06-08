import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { updateProvinceFn } from "./updateProvince.fn.ts";
import { updateProvinceValidator } from "./updateProvince.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const updateProvinceSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		fn: updateProvinceFn,
		actName: "updateProvince",
		preAct: [setTokens, setUser, justGhost],
		validator: updateProvinceValidator(),
	});

export * from "./updateProvince.fn.ts";
export * from "./updateProvince.val.ts";
