import { enums, number, object, optional, size, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addOrgValidator = () => {
	return object({
		set: object({
			name: string(),
			address: string(),
			ownership: enums(["private", "government", "semi-private"]),
			type: enums([
				"service",
				"industrial",
				"trading",
				"technology",
				"financial",
				"healthcare",
			]),
			longitude: optional(number()),
			latitude: optional(number()),
			description: string(),
			provinceId: size(string(), 24),
			cityId: size(string(), 24),
		}),
		get: selectStruct("org", 2),
	});
};
