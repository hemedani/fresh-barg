import { coreApp } from "../../../../mod.ts";
import { getProvinceFn } from "./getProvince.fn.ts";
import { getProvinceValidator } from "./getProvince.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";

export const getProvinceSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		fn: getProvinceFn,
		actName: "getProvince",
		preAct: [
			setTokens,
			setUser,
		],
		validator: getProvinceValidator(),
	});
