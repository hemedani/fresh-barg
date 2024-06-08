import { ActFn, ObjectId } from "share/deps.ts";
import { preDefLetter } from "../../../../mod.ts";

export const removePredefLetterFn: ActFn = async (body) => {
	const {
		set: { _id },
		get,
	} = body.details;
	return await preDefLetter.deleteOne({
		filter: { _id: new ObjectId(_id) },
		hardCascade: false,
	});
};
