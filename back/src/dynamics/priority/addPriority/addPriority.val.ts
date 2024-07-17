import { object, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const addPriorityValidator = () => {
	return object({
		set: object({
			name: string(),
			orgId: string(),
		}),
		get: selectStruct("priority", 1),
	});
};
