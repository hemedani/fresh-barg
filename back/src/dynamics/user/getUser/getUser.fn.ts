import { ActFn, ObjectId } from "share/deps.ts";
import { coreApp, user } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const getUserFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	const { position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	if (
		position?.level === "Ghost" || position?.level === "Orghead" ||
		position?.level === "Unithead"
	) {
		const foundedUser = await user.findOne({
			filters: { _id: new ObjectId(_id) },
			projection: get,
		});
		!foundedUser && throwError("user not exist");

		if (position.level === "Ghost") {
			return foundedUser;
		}

		if (
			position.level === "Orghead" &&
			foundedUser!.org.some(({ _id }: any) =>
				_id.equals(position.org?._id)
			)
		) {
			return foundedUser;
		}

		if (
			position.level === "Unithead" &&
			foundedUser!.unit.some(({ _id }: any) =>
				_id.equals(position.unit?._id)
			)
		) {
			return foundedUser;
		}

		throwError("Can not get this user");
	}

	throwError("Can not get this user");
};
