import { ActFn } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { myRedis, user } from "../../../../mod.ts";

export const loginReqUserFn: ActFn = async (body) => {
	const {
		set: {
			phone,
		},
		get,
	} = body.details;

	const generatingCode = () => {
		return Math.random();
	};

	const generatedCode = Deno.env.get("ENV") === "development"
		? "11111"
		: generatingCode().toString();

	/*
	 *  @LOG @DEBUG @ERROR
	 *  This log written by ::==> {{ syd }}
	 *
	 *  Please remove your log after debugging
	 */

	const sendSms = async () => {
	};

	const returnUser = async (user: any) => {
		await myRedis.set(user.phone.toString(), generatedCode, { ex: 100 });
		// send SMS to user
		await sendSms();

		return user;
	};

	const foundedUser = await user.findOne({
		filters: { phone },
		projection: { _id: 0, phone: 1 },
	});

	return foundedUser
		? await returnUser(foundedUser)
		: throwError("can not find this user");
};
