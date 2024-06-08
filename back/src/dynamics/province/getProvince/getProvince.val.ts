import { object, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const getProvinceValidator = () => {
	return object({
		set: object({
			_id: string(),
		}),
		get: selectStruct("province", 2),
	});
};
