import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { coreApp } from "../../../../mod.ts";
import { addAvatarFn } from "./addAvatar.fn.ts";
import { addAvatarValidator } from "./addAvatar.val.ts";

export const addAvatarSetup = () =>
	coreApp.acts.setAct({
		schema: "user",
		fn: addAvatarFn,
		actName: "addAvatar",
		preAct: [
			setTokens,
			setUser,
		],
		validator: addAvatarValidator(),
	});
