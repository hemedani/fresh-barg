import { ActFn, ObjectId } from "share/deps.ts";
import { letter } from "../../../../mod.ts";

export const addReplyToLetterFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			text,
		},
		get,
	} = body.details;

	const reply = {
		_id: new ObjectId(),
		text,
		viewed: false,
	};

	return await letter.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$addToSet: { reply },
		},
		projection: get,
	});
};
