import { setTokens } from "utils/setToken.ts";
import { coreApp } from "../../../../mod.ts";
import { updateLetterFn } from "./updateLetter.fn.ts";
import { updateLetterValidator } from "./updateLetter.val.ts";
import { setUser } from "utils/setUser.ts";

export const updateLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: updateLetterFn,
		actName: "updateLetter",
		preAct: [
			setTokens,
			setUser,
		],
		validator: updateLetterValidator(),
	});
