import { object, objectIdValidation } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addPosToUserValidator = () => {
	return object({
		set: object({
			positionId: objectIdValidation,
			position: objectIdValidation,
			userId: objectIdValidation,
		}),
		get: selectStruct("user", { org: { users: { org: 1 } } }),
	});
};
