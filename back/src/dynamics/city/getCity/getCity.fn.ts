import { ActFn, ObjectId } from "share/deps.ts";
import { city } from "../../../../mod.ts";

export const getCityFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	return await city.aggregation({
		pipeline: [
			{ $match: { _id: new ObjectId(_id) } },
		],
		projection: get,
	}).toArray();
};
