import { addLetterSetup } from "./addLetter/mod.ts";
import { getLetterSetup } from "./getLetter/mod.ts";
import { getLettersSetup } from "./getLetters/mod.ts";
import { updateLetterSetup } from "./updateLetter/mod.ts";
import { removeLetterSetup } from "./removeLetter/mod.ts";

export const letterSetup = () => {
	addLetterSetup();
	updateLetterSetup();
	getLetterSetup();
	getLettersSetup();
	removeLetterSetup();
};

export * from "./addLetter/mod.ts";
export * from "./getLetter/mod.ts";
export * from "./getLetters/mod.ts";
export * from "./updateLetter/mod.ts";
export * from "./removeLetter/mod.ts";
