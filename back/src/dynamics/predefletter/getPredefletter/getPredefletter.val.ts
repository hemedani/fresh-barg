import { object, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getPredefletterValidator = () => {
	return object({
		set: object({
			_id: string(),
		}),
		get: selectStruct("preDefLetter", { preDefLetter: 1 }),
	});
};
