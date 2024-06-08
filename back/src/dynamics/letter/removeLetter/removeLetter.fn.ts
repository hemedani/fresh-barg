import { ActFn, ObjectId } from "share/deps.ts";
import { letter } from "../../../../mod.ts";

export const removeLetterFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await letter.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
