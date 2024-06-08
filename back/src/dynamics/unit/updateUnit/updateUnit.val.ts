import { array, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

export const updateUnitValidator = () => {
	return object({
		set: object({
			_id: string(),
			name: optional(string()),
			categories: optional(array(string())),
			positionId: objectIdValidation,
		}),
		get: selectStruct("unit", { unit: 1 }),
	});
};
