import { ActFn, ObjectId } from "share/deps.ts";
import { province } from "../../../../mod.ts";

export const updateProvinceFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			name,
			enName,
			abb,
		},
		get,
	} = body.details;

	const updateObj: Record<string, any> = {};

	name && (updateObj.name = name);
	enName && (updateObj.enName = enName);
	abb && (updateObj.abb = abb);

	return await province.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: updateObj,
		},
		projection: get,
	});
};
