import { ActFn, ObjectId } from "share/deps.ts";
import { unit } from "../../../../mod.ts";

export const getUnitsFn: ActFn = async (body) => {
	const {
		set: {
			page,
			limit,
			orgId,
			cityId,
			provinceId,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $limit: limit });
	pipeline.push({ $skip: (page - 1) * limit });
	orgId && pipeline.push({ $match: { "org._id": new ObjectId(orgId) } });
	cityId && pipeline.push({ $match: { "city._id": new ObjectId(cityId) } });
	provinceId &&
		pipeline.push({ $match: { "province._id": new ObjectId(provinceId) } });

	return await unit.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
