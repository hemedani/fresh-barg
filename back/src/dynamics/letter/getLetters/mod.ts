import { coreApp } from "../../../../mod.ts";
import { getLettersFn } from "./getLetters.fn.ts";
import { getLettersValidator } from "./getLetters.val.ts";
import { setTokens } from "utils/setToken.ts";
import { setUser } from "utils/setUser.ts";
import { isPositionInUser } from "utils/isPositionInUser.ts";

export const getLettersSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		fn: getLettersFn,
		actName: "getLetters",
		preAct: [setTokens, setUser, isPositionInUser],
		validator: getLettersValidator(),
	});
