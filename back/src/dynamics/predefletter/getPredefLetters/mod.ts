import { coreApp } from "../../../../mod.ts";
import { getPredeflettersFn } from "./getPredefLetters.fn.ts";
import { getPredeflettersValidator } from "./getPredefLetters.val.ts";

export const getPredeflettersSetup = () =>
	coreApp.acts.setAct({
		schema: "preDefLetter",
		fn: getPredeflettersFn,
		actName: "getPredefletters",
		validator: getPredeflettersValidator(),
	});

export * from "./getPredefLetters.fn.ts";
export * from "./getPredefLetters.val.ts";
