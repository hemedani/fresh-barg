import { instance, object } from "share/deps.ts";
import { coreApp } from "../../../../mod.ts";

export const uploadFileValidator = () => {
	return object({
		set: object({
			formData: instance(FormData),
		}),
		get: coreApp.schemas.selectStruct("file", 1),
	});
};
