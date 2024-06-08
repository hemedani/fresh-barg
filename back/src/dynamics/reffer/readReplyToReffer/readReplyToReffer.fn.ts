import { ActFn, ObjectId } from "share/deps.ts";
import { reffer } from "../../../../mod.ts";
export const readReplyToRefferFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			replyId,
		},
		get,
	} = body.details;

	const read = {
		viewed: true,
	};

	return await reffer.findOneAndUpdate({
		filter: { _id: new ObjectId(_id), "reply._id": new ObjectId(replyId) },
		update: {
			$set: { "reply.$.viewed": true },
		},
		projection: get,
	});
};
