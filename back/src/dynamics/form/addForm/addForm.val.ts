import { boolean, object, objectIdValidation, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const addFormValidator = () => {
	return object({
		set: object({
			title: string(),
			isActive: boolean(),

			orgId: objectIdValidation,
			unitId: objectIdValidation,
			// tagIds: optional(array(FeaturesEnum)),
		}),
		get: selectStruct("form", 1),
	});
};
