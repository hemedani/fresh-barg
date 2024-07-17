import {
	enums,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";

export const countCitiesValidator = () => {
	return object({
		set: object({
			enName: optional(string()),
			name: optional(string()),
			abb: optional(string()),
			provinceId: optional(objectIdValidation),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
