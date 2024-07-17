import { ActFn, Document, ObjectId } from "share/deps.ts";
import { unit } from "../../../../mod.ts";

export const countUnitsFn: ActFn = async (body) => {
	const {
		set: {
			name,
			categories,
		},

		get,
	} = body.details;

	const filters: Document = {};
	name &&
		(filters["name"] = name);

	categories &&
		(filters["categories"] = { $in: categories });

	const lengthOfUnits = await unit.countDocument({
		filter: filters,
	});

	return { qty: lengthOfUnits };
};
