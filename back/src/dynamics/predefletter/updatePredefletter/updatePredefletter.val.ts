import { number, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const updatePredefletterValidator = () => {
	return object({
		set: object({
			_id: string(),
			title: optional(string()),
			description: optional(string()),
			number: number(),
		}),
		get: selectStruct("preDefLetter", { preDefLetter: 1 }),
	});
};
