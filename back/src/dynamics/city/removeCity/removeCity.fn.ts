import { ActFn, ObjectId } from "share/deps.ts";
import { city } from "../../../../mod.ts";

export const removeCityFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await city.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
