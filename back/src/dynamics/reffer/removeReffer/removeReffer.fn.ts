import { ActFn, ObjectId } from "share/deps.ts";
import { reffer } from "../../../../mod.ts";

export const removeRefferFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await reffer.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
