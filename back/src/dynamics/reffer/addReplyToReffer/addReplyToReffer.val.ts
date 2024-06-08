import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addReplyToRefferValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
			text: string(),
		}),
		get: selectStruct("reffer", 2),
	});
};
