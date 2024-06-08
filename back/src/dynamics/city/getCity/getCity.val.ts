import { object, objectIdValidation, string } from "share/deps.ts";
import { coreApp, selectStruct } from "../../../../mod.ts";

export const getCityValidator = () => {
	return object({
		set: object({
			_id: objectIdValidation,
			positionId: objectIdValidation,
		}),
		get: coreApp.schemas.selectStruct("city", 2),
	});
};
