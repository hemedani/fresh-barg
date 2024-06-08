import { number, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getProvincesValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			name: optional(string()),
		}),
		get: selectStruct("province", 2),
	});
};
