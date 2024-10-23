import { coreApp } from "../../../../mod.ts";
import { countProvincesFn } from "./countProvinces.fn.ts";
import { countProvincesValidator } from "./countProvinces.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { justGhost } from "utils/justGhost.ts";

export const countProvincesSetup = () =>
	coreApp.acts.setAct({
		schema: "province",
		fn: countProvincesFn,
		actName: "countProvinces",
		preAct: [
			setTokens,
			setUser,
			justGhost,
		],
		validator: countProvincesValidator(),
	});
