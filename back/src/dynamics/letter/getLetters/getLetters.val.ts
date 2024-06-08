import {
	array,
	boolean,
	number,
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getLettersValidator = () => {
	return object({
		set: object({
			authorId: optional(objectIdValidation),
			senderId: optional(objectIdValidation),
			recieversId: optional(objectIdValidation),
			number: optional(number()),
			subject: optional(string()),
			is_end: optional(boolean()),
			tags: optional(array(string())),
			leed: optional(string()),
			content: optional(string()),

			orgId: optional(objectIdValidation),
			unitId: optional(objectIdValidation),
			readByUsers: optional(objectIdValidation),
			readByPositions: optional(objectIdValidation),
			refferIds: optional(array(objectIdValidation)),

			positionId: objectIdValidation,
		}),
		get: selectStruct("letter", 2),
	});
};
