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
			subject: optional(string()),
			delivered: optional(boolean()),
			is_end: optional(object({
				text: string(), // text || des ??
				done: boolean(),
			})),
			tags: optional(array(string())),
			lid: optional(string()),
			positionId: objectIdValidation,
		}),
		get: selectStruct("letter", { letter: 1 }),
	});
};
