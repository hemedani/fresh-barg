import { coreApp } from "../../../../mod.ts";
import { getProvincesFn } from "./getProvinces.fn.ts";
import { getProvincesValidator } from "./getProvinces.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const getProvincesSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		fn: getProvincesFn,
		actName: "getProvinces",
		preAct: [
			setTokens,
			setUser,
		],
		validator: getProvincesValidator(),
	});

export * from "./getProvinces.fn.ts";
export * from "./getProvinces.val.ts";
