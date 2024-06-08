import { ActFn, ObjectId } from "share/deps.ts";
import { city } from "../../../../mod.ts";

export const updateCityFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			name,
			enName,
			abb,
		},
		get,
	} = body.details;

	return await city.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				name,
				enName,
				abb,
			},
		},
		projection: get,
	});
};
