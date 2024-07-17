import { ActFn, Document } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const countProvincesFn: ActFn = async (body) => {
	const {
		set: {
			name,
			enName,
			abb,
		},
		get,
	} = body.details;

	const filters: Document = {};
	name &&
		(filters["name"] = name);

	enName &&
		(filters["location.longitude"] = enName);

	abb &&
		(filters["location.latitude"] = abb);

	const lengthOfProvinces = await province.countDocument({
		filter: filters,
	});

	return { qty: lengthOfProvinces };
};
