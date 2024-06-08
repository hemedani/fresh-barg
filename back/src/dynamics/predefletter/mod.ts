import { addPredefletterSetup } from "./addPredefletter/mod.ts";
import { getPredefletterSetup } from "./getPredefletter/mod.ts";
import { updatePredefletterSetup } from "./updatePredefletter/mod.ts";
import { removePredefLetterSetup } from "./removePredefLetter/mod.ts";
import { getPredeflettersSetup } from "./getPredefLetters/mod.ts";

export const predefletterSetup = () => {
	addPredefletterSetup();
	updatePredefletterSetup();
	getPredefletterSetup();
	removePredefLetterSetup();
	getPredeflettersSetup();
};

export * from "./addPredefletter/mod.ts";
export * from "./getPredefletter/mod.ts";
export * from "./updatePredefletter/mod.ts";
export * from "./removePredefLetter/mod.ts";
export * from "./getPredefLetters/mod.ts";
