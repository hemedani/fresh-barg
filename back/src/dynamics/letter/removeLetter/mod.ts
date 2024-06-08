import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removeLetterFn } from "./removeLetter.fn.ts";
import { removeLetterValidator } from "./removeLetter.val.ts";

export const removeLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "letter",
		actName: "removeLetter",
		fn: removeLetterFn,
		preAct: [justGhost],
		validator: removeLetterValidator(),
	});

export * from "./removeLetter.val.ts";
export * from "./removeLetter.fn.ts";
