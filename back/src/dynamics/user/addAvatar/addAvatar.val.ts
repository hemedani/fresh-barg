import { object } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { objectIdValidation } from "share/deps.ts";

export const addAvatarValidator = () => {
	return object({
		set: object({
			avatarId: objectIdValidation,
		}),
		get: selectStruct("user", 1),
	});
};
