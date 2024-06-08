import { ActFn, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { coreApp, user } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";

export const getMeFn: ActFn = async (body) => {
	const context: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;
	const _id = context.user._id;

	const {
		set,
		get,
	} = body.details;

	const foundedUser = await user.findOne({
		filters: { _id: new ObjectId(_id) },
		projection: get,
	});
	!foundedUser && throwError("user not exist");
	return foundedUser;

	// return Object.keys(get).length != 0
	//     ? await user.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
