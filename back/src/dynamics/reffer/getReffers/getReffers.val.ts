import {
	array,
	enums,
	number,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getReffersValidator = () => {
	return object({
		set: object({
			page: number(),
			take: number(),
			positionId: objectIdValidation,
			number: optional(number()),
			readByUsers: optional(objectIdValidation),
			readByPositions: optional(objectIdValidation),
			type: optional(enums(["inUnit", "inOrg", "outOrg"])),
			refferer: optional(array(objectIdValidation)),
			reffered: optional(array(objectIdValidation)),
			description: optional(string()),
			letterIds: optional(objectIdValidation),
		}),
		get: selectStruct("reffer", 2),
	});
};
