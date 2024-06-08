import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const readReplyToRefferValidator = () => {
	return object({
		set: object({
			_id: string(),
			replyId: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("reffer", 2),
	});
};
