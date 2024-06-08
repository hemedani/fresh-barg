import {
	enums,
	number,
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getOrgsValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			provinceId: optional(objectIdValidation),
			cityId: optional(objectIdValidation),
			ownership: optional(
				enums(["private", "goverment", "semi-private"]),
			),
			type: optional(
				enums([
					"service",
					"industrial",
					"trading",
					"technology",
					"financial",
					"healthcare",
				]),
			),
			positionId: objectIdValidation,
		}),
		get: selectStruct("org", 2),
	});
};
