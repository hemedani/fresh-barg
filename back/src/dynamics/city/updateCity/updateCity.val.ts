import { object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const updateCityValidator = () => {
	return object({
		set: object({
			_id: string(),
			name: optional(string()),
			enName: optional(string()),
			abb: optional(string()),
		}),
		get: selectStruct("city", 2),
	});
};
