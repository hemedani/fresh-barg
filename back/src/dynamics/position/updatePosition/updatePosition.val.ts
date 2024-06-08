import { object, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

export const updatePositionValidator = () => {
	return object({
		set: object({
			_id: string(),
			name: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("position", 2),
	});
};
