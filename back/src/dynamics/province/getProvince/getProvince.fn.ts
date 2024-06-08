import { ActFn, ObjectId } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const getProvinceFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	return await province.aggregation({
		pipeline: [
			{ $match: { _id: new ObjectId(_id) } },
		],
		projection: get,
	}).toArray();
};
