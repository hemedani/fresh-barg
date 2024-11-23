import { ActFn, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { user } from "../../../../mod.ts";

export const addPosToUserFn: ActFn = async (body) => {
	const {
		set: {
			userId,
			position,
		},
		get,
	} = body.details;

	const foundedUser = await user.findOne({
		filters: { _id: new ObjectId(userId) },
		projection: get,
	});

	!foundedUser && throwError("user not exist");

	return await user.addRelation({
		filters: { _id: new ObjectId(userId) },
		projection: body.details.get,
		relations: {
			position: {
				_ids: [new ObjectId(position)],
				relatedRelations: {
					user: true,
				},
			},
		},
		replace: true,
	});
};
