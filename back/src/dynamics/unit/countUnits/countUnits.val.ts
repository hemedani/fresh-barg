import { array, enums, object, optional, string } from "share/deps.ts";

export const countUnitsValidator = () => {
	return object({
		set: object({
			name: optional(string()),
			categories: optional(array(string())),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
