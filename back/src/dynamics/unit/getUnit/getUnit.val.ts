import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getUnitValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("unit", { org: 1 }),
	});
};
