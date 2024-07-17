import { ActFn, Document, ObjectId } from "share/deps.ts";
import { org } from "../../../../mod.ts";

export const countOrgsFn: ActFn = async (body) => {
	const {
		set: {
			name,
			ownership,
			type,
			longitude,
			latitude,
			provinceId,
			cityId,
		},
		get,
	} = body.details;

	const filters: Document = {};
	cityId &&
		(filters["city._id"] = new ObjectId(cityId));
	provinceId &&
		(filters["province._id"] = new ObjectId(provinceId));
	ownership &&
		(filters["ownership"] = { $in: [ownership] });
	type &&
		(filters["type"] = { $in: [type] });
	name &&
		(filters["name"] = name);

	longitude &&
		(filters["location.longitude"] = longitude);

	latitude &&
		(filters["location.latitude"] = latitude);

	const lengthOfOrgs = await org.countDocument({
		filter: filters,
	});

	return { qty: lengthOfOrgs };
};
