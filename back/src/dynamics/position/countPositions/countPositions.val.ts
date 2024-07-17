import {
	array,
	enums,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
import { FeaturesEnum, LevelsEnum, PanelsEnum } from "share/schemas/mod.ts";

export const countPositionsValidator = () => {
	return object({
		set: object({
			name: optional(string()),
			unitId: optional(objectIdValidation),
			orgId: optional(objectIdValidation),
			panel: optional(PanelsEnum),
			level: optional(LevelsEnum),
			userId: optional(objectIdValidation),
			features: optional(array(FeaturesEnum)),
			positionId: objectIdValidation,
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
