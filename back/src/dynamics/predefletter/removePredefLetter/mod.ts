import { justGhost } from "utils/justGhost.ts";
import { coreApp } from "../../../../mod.ts";
import { removePredefLetterFn } from "./removePredefLetter.fn.ts";
import { removePredefLetterValidator } from "./removePredefLetter.val.ts";

export const removePredefLetterSetup = () =>
	coreApp.acts.setAct({
		schema: "preDefLetter",
		actName: "removePredefLetter",
		fn: removePredefLetterFn,
		preAct: [justGhost],
		validator: removePredefLetterValidator(),
	});

export * from "./removePredefLetter.val.ts";
export * from "./removePredefLetter.fn.ts";
