import { array, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";
import { FeaturesEnum, PanelsEnum } from "share/schemas/mod.ts";

export const updatePositionValidator = () => {
	return object({
		set: object({
			_id: string(),
			name: optional(string()),
			positionId: objectIdValidation,
			panel: optional(PanelsEnum),
			features: optional(array(FeaturesEnum)),
		}),
		get: selectStruct("position", 2),
	});
};
