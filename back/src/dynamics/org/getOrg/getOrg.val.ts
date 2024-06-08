import { object, objectIdValidation, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getOrgValidator = () => {
	return object({
		set: object({
			_id: string(),
			positionId: objectIdValidation,
		}),
		get: selectStruct("org", { org: 1 }),
	});
};
