import { ActFn, ObjectId } from "share/deps.ts";
import { org } from "../../../../mod.ts";

export const getOrgFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	return await org.aggregation({
		pipeline: [
			{ $match: { _id: new ObjectId(_id) } },
		],
		projection: get,
	}).toArray();
};
