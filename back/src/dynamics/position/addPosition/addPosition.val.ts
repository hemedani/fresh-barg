import {
	array,
	object,
	objectIdValidation,
	optional,
	size,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import {
	FeaturesEnum,
	LevelsEnum,
	PanelsEnum,
} from "share/schemas/core/mod.ts";

export const addPositionValidator = () => {
	return object({
		set: object({
			name: string(),
			unitId: optional(objectIdValidation),
			orgId: objectIdValidation,
			panel: PanelsEnum,
			level: LevelsEnum,
			userId: optional(objectIdValidation),
			features: optional(array(FeaturesEnum)),
			positionId: objectIdValidation,
		}),
		get: selectStruct("position", 2),
	});
};
