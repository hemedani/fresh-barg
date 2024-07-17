import {
	array,
	boolean,
	enums,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";

export const countLettersValidator = () => {
	return object({
		set: object({
			positionId: objectIdValidation,
			authorId: optional(objectIdValidation),
			senderId: optional(objectIdValidation),
			recieversId: optional(objectIdValidation),
			subject: optional(string()),
			is_end: optional(boolean()),
			tags: optional(array(string())),
			leed: optional(string()),
			content: optional(string()),
			text: optional(string()),
			orgId: optional(objectIdValidation),
			unitId: optional(objectIdValidation),
			readByUsers: optional(objectIdValidation),
			readByPositions: optional(objectIdValidation),
			refferIds: optional(array(objectIdValidation)),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
