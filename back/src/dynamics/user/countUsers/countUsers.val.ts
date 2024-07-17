import {
	array,
	coerce,
	date,
	enums,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
const gender = enums(["Male", "Female"]);

export const countUsersValidator = () => {
	return object({
		set: object({
			first_name: optional(string()),
			last_name: optional(string()),
			gender: optional(gender),
			birth_date: optional(
				coerce(date(), string(), (value) => (new Date(value))),
			),
			province: optional(objectIdValidation),
			city: optional(objectIdValidation),
			orgIds: optional(array(objectIdValidation)),
			unitIds: optional(array(objectIdValidation)),
			position: optional(array(objectIdValidation)),
			positionId: objectIdValidation,
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
