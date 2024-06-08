import {
	array,
	boolean,
	enums,
	number,
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getUsersValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			orgId: optional(objectIdValidation),
			unitId: optional(objectIdValidation),
			city: optional(objectIdValidation),
			province: optional(objectIdValidation),
			is_active: optional(boolean()),
			gender: optional(enums(["Male", "Female"])),
			position: optional(array(objectIdValidation)),
			/*	position: optional(
				enums(["Ghost", "Orghead", "Orgunit", "Staff"]),
			),*/
		}),
		get: selectStruct("user", 2),
	});
};
