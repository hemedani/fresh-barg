import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getPositionValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("position", { position: 1 }),
	});
};
