import { object } from "share/deps.ts";
import { provincePure } from "share/schemas/mod.ts";
import { selectStruct } from "../../../../mod.ts";

export const addProvinceValidator = () => {
	return object({
		set: object(provincePure),
		get: selectStruct("province", 2),
	});
};
