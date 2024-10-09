import { boolean, coerce, date, object, optional, string } from "share/deps.ts";
import { userGender } from "share/schemas/mod.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

//const gender = enums(["Male", "Female"]);

export const updateUserValidator = () => {
	return object({
		set: object({
			first_name: optional(string()),
			last_name: optional(string()),
			gender: optional(userGender),
			birth_date: optional(
				coerce(date(), string(), (value) => new Date(value)),
			),
			personnel_code: optional(string()),
			email: optional(string()),
			is_active: optional(boolean()),
			positionId: objectIdValidation,
		}),
		get: selectStruct("user", 1),
	});
};
