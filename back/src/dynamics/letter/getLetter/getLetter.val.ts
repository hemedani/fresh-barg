import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getLetterValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("letter", { letter: 1 }),
	});
};
