import { object, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { mobilePattern } from "share/schemas/mod.ts";

export const tempUserValidator = () => {
	return object({
		set: object({
			first_name: string(),
			last_name: string(),
			phone: mobilePattern,
			// gender: gender,
			// birth_date: optional(
			//   coerce(date(), string(), (value) => (new Date(value))),
			// ),
			// personnel_code: string(),
			// email: optional(string()),
			// is_active: optional(boolean()),
			// features: array(ftu),
			// userLevels: ul,
		}),
		get: selectStruct("user", 1),
	});
};
