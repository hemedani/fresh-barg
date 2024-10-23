import { coreApp } from "../../../../mod.ts";
import { countLettersFn } from "./countLetters.fn.ts";
import { countLettersValidator } from "./countLetters.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { grantAccess } from "utils/grantAccess.ts";

export const countLettersSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: countLettersFn,
		actName: "countLetters",
		preAct: [
			setTokens,
			setUser,
			grantAccess({
				levels: ["Staff"],
				features: ["create letters"],
			}),
		],
		validator: countLettersValidator(),
	});
