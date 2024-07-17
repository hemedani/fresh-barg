import {
	array,
	boolean,
	enums,
	number,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";

export const countOrgsValidator = () => {
	return object({
		set: object({
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
			longitude: optional(number()),
			latitude: optional(number()),
			provinceId: optional(objectIdValidation),
			cityId: optional(objectIdValidation),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
