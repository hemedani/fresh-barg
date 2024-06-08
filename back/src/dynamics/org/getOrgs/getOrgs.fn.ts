import { ActFn, ObjectId } from "share/deps.ts";
import { org } from "../../../../mod.ts";

export const getOrgsFn: ActFn = async (body) => {
	const {
		set: {
			page,
			limit,
			cityId,
			provinceId,
			ownership,
			type,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $limit: limit });

	cityId && pipeline.push({ $match: { "city._id": new ObjectId(cityId) } });

	provinceId &&
		pipeline.push({ $match: { "province._id": new ObjectId(provinceId) } });

	ownership &&
		pipeline.push({ $match: { "ownership": ownership } });

	type &&
		pipeline.push({ $match: { "type": type } });

	return await org.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
