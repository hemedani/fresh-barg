import { ActFn, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { preDefLetter } from "../../../../mod.ts";

export const getPredefletterFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;
	const foundedPredefletter = await preDefLetter.findOne({
		filters: {
			_id: new ObjectId(_id),
		},
		projection: get,
	});
	!foundedPredefletter && throwError("predefletter not exist");
	return foundedPredefletter;

	// console.log("foundedPredefletter on get method", foundedPredefletter);
};
