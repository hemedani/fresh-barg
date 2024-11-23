import { objectIdValidation } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { object, string } from "https://deno.land/x/lesan@v0.1.1/mod.ts";
export const addReplyToLetterValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
			text: string(),
		}),
		get: selectStruct("letter", 2),
	});
};
