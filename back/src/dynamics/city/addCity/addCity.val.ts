import { object, size, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";
import { cityPure } from "share/schemas/core/mod.ts";

export const addCityValidator = () => {
	return object({
		set: object({ ...cityPure, provinceId: size(string(), 24) }),
		get: selectStruct("city", 2),
	});
};
