import { enums, object, optional, string } from "share/deps.ts";

export const countPredeflettersValidator = () => {
	return object({
		set: object({
			title: optional(string()),
			orgId: optional(string()),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
