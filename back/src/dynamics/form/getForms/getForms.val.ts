import { enums, object, optional, size, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const FormStatus = enums(["active", "notActive"]);

export const getFormsValidator = () => {
	return object({
		set: object({
			orgId: optional(size(string(), 24)),
			unitId: optional(size(string(), 24)),
			filterForms: optional(FormStatus),
		}),
		get: selectStruct("form", 2),
	});
};
