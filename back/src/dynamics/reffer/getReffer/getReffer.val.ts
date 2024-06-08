import { object, objectIdValidation } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getRefferValidator = () => {
	return object({
		set: object({
			_id: objectIdValidation,
			positionId: objectIdValidation,
		}),
		get: selectStruct("reffer", { reffer: 1 }),
	});
};
