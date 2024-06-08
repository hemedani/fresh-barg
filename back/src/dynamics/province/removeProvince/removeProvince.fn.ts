import { ActFn, ObjectId } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const removeProvinceFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await province.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
