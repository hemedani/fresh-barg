import { ActFn, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { position } from "../../../../mod.ts";
export const getPositionsFn: ActFn = async (body) => {
	const {
		set: {
			orgId,
			unitId,
			filterPositions,
			page,
			limit,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $limit: limit });
	orgId && pipeline.push({ $match: { "org._id": new ObjectId(orgId) } });
	unitId && pipeline.push({ $match: { "unit._id": new ObjectId(unitId) } });

	filterPositions === "busy"
		? pipeline.push({ $match: { userId: { $ne: null } } })
		: filterPositions === "free"
		? pipeline.push({ $match: { userId: null } })
		: filterPositions === "all"
		? {}
		: throwError("filterPositions is not valid");

	return await position.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
