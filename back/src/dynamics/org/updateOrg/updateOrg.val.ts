import { enums, number, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

export const updateOrgValidator = () => {
	return object({
		set: object({
			_id: string(),
			name: optional(string()),
			address: optional(string()),
			ownership: optional(
				enums(["private", "government", "semi-private"]),
			),
			type: optional(enums([
				"service",
				"industrial",
				"trading",
				"technology",
				"financial",
				"healthcare",
			])),
			location: optional(object({
				longitude: number(),
				latitude: number(),
			})),
			description: optional(string()),
			positionId: objectIdValidation,
		}),
		get: selectStruct("org", { org: 1 }),
	});
};
