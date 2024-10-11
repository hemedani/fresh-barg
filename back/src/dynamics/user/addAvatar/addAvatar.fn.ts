import { ActFn, ObjectId } from "share/deps.ts";
import { MyContext } from "interfaces/context.ts";
import { coreApp, user } from "../../../../mod.ts";

export const addAvatarFn: ActFn = async (body) => {
	const context: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const _id = context.user._id;

	const {
		set: {
			avatarId,
		},
		get,
	} = body.details;

	return await user.addRelation({
		filters: { _id: new ObjectId(_id) },
		relations: {
			avatar: {
				_ids: new ObjectId(avatarId),
			},
		},
		projection: get,
	});
};
