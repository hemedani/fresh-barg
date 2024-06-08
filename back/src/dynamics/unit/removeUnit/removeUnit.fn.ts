import { ActFn, ObjectId } from "share/deps.ts";
import { unit } from "../../../../mod.ts";

export const removeUnitFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await unit.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
