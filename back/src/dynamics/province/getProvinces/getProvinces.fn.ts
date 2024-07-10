import { ActFn } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const getProvincesFn: ActFn = async (body) => {
	const {
		set: {
			page,
			limit,
			name,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $limit: limit });
	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $sort: { _id: -1 } });
	name && pipeline.push({ $match: { name } });

	return await province.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
