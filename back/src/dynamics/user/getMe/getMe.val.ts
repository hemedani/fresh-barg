import { object, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getMeValidator = () => {
	return object({
		set: object({}),
		get: selectStruct("user", 2),
	});
};
