import {
	array,
	number,
	object,
	objectIdValidation,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addLetterValidator = () => {
	return object({
		set: object({
			number: number(),
			subject: string(),
			authorId: objectIdValidation,
			positionId: objectIdValidation,
			recieversId: objectIdValidation,
			tags: array(string()),
			leed: string(),
			content: string(),
			orgId: objectIdValidation,
			unitId: objectIdValidation,
		}),
		get: selectStruct("letter", 2),
	});
};
