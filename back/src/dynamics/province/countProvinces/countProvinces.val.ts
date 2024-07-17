import { enums, object, optional, string } from "share/deps.ts";

export const countProvincesValidator = () => {
	return object({
		set: object({
			name: optional(string()),
			enName: optional(string()),
			abb: optional(string()),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
