import { number, object, string } from "share/deps.ts";
import { preDefLetterInp } from "../../../../declarations/selectInp.ts";
import { selectStruct } from "../../../../mod.ts";

export const addPredefletterValidator = () => {
	return object({
		set: object({
			title: string(),
			description: string(),
			number: number(),
			orgId: string(),
		}),
		get: selectStruct<preDefLetterInp>("preDefLetter", 1),
	});
};
