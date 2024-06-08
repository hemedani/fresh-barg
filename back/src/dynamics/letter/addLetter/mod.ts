import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { addLetterFn } from "./addLetter.fn.ts";
import { addLetterValidator } from "./addLetter.val.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const addLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: addLetterFn,
		actName: "addLetter",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Staff"],
				features: ["create letters"],
			}),
		],
		validator: addLetterValidator(),
	});

export * from "./addLetter.fn.ts";
export * from "./addLetter.val.ts";
