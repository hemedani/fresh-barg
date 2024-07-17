import { ActFn, Document, ObjectId } from "share/deps.ts";
import { city } from "../../../../mod.ts";

export const countCitiesFn: ActFn = async (body) => {
	const {
		set: {
			enName,
			name,
			abb,
			provinceId,
		},
		get,
	} = body.details;

	const filters: Document = {};

	provinceId &&
		(filters["province._id"] = new ObjectId(provinceId));
	enName &&
		(filters["enName"] = enName);
	name &&
		(filters["name"] = name);

	abb &&
		(filters["abb"] = abb);

	const lengthOfCities = await city.countDocument({
		filter: filters,
	});

	return { qty: lengthOfCities };
};
