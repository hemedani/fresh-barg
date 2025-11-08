import { ActFn, ObjectId } from "share/deps.ts";

import { city } from "../../../../mod.ts";

export const getCitiessFn: ActFn = async (body) => {
	const {
		set: { page, limit, name, provinceId },
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $limit: limit });
	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $sort: { _id: -1 } });
	name &&
		pipeline.push({
			$match: {
				name: { $regex: new RegExp(name, "i") },
			},
		});

	provinceId &&
		pipeline.push({ $match: { "province._id": new ObjectId(provinceId) } });

	return await city
		.aggregation({
			pipeline,
			projection: get,
		})
		.toArray();
};
