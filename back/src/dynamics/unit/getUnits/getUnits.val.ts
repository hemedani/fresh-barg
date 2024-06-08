import {
	number,
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getUnitsValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			orgId: optional(objectIdValidation),
			provinceId: optional(objectIdValidation),
			cityId: optional(objectIdValidation),
			positionId: objectIdValidation,
		}),
		get: selectStruct("unit", 2),
	});
};
