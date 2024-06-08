import { ActFn, ObjectId } from "share/deps.ts";
import { org } from "../../../../mod.ts";

export const removeOrgFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await org.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
