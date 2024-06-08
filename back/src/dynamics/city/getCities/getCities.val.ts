import {
	number,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
import { coreApp } from "../../../../mod.ts";

export const getCitiesValidator = () => {
	return object({
		set: object({
			page: number(),
			limit: number(),
			name: optional(string()),
			provinceId: optional(objectIdValidation),
			positionId: objectIdValidation,
		}),
		get: coreApp.schemas.selectStruct("city", 2),
	});
};
