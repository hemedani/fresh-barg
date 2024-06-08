import { object, objectIdValidation } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getUserValidator = () => {
	return object({
		set: object({
			_id: objectIdValidation,
			positionId: objectIdValidation,
		}),
		get: selectStruct("user", 2),
	});
};
