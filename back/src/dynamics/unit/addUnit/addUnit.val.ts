import {
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { unitPure } from "share/schemas/core/mod.ts";
import { selectStruct } from "../../../../mod.ts";

export const addUnitValidator = () => {
	return object({
		set: object({
			...unitPure,
			positionId: objectIdValidation,
			provinceId: size(string(), 24),
			cityId: size(string(), 24),
			orgId: size(string(), 24),
		}),
		get: selectStruct("unit", 2),
	});
};
