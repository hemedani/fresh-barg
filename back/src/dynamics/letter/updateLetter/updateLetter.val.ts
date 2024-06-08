import {
	array,
	boolean,
	date,
	number,
	object,
	optional,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

export const updateLetterValidator = () => {
	return object({
		set: object({
			_id: string(),
			number: number(),
			subject: string(),
			created_at: optional(date()),
			updated_at: optional(date()),
			delivered: boolean(),
			is_end: object({
				text: string(), // text || des ??
				done: boolean(),
			}),
			tags: array(string()),
			lid: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("letter", { letter: 1 }),
	});
};
