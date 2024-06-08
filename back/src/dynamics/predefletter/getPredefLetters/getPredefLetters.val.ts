import {
	number,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getPredeflettersValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			description: optional(string()),
			title: optional(string()),
			org: optional(objectIdValidation),
			number: optional(number()),
		}),
		get: selectStruct("preDefLetter", { preDefLetter: 1 }),
	});
};
