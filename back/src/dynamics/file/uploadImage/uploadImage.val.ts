import { instance, object } from "deps";
import { coreApp } from "../../../../mod.ts";

export const uploadImageValidator = () => {
	return object({
		set: object({
			formData: instance(FormData),
		}),
		get: coreApp.schemas.selectStruct("file", 1),
	});
};
