import { ActFn, jwt } from "deps";
import { throwError } from "utils/throwError.ts";
import { myRedis, user } from "../../../../mod.ts";

const encoder = new TextEncoder();
const keyBuf = encoder.encode("mySuperSecret");
export const key = await crypto.subtle.importKey(
	"raw",
	keyBuf,
	{ name: "HMAC", hash: "SHA-512" },
	true,
	["sign", "verify"],
);

export const loginUserFn: ActFn = async (body) => {
	const {
		set: {
			phone,
			code,
		},
		get,
	} = body.details;

	const createToken = async (user: any) => {
		const token = await jwt.create(
			{ alg: "HS512", typ: "JWT" },
			{ ...user, exp: jwt.getNumericDate(60 * 60 * 24 * 30 * 3) },
			key,
		);
		return {
			token,
			user,
		};
	};

	const checkCode = async (user: any) => {
		if (user.phone) {
			const redisCode = await myRedis.get(user.phone.toString());

			return code.toString() === redisCode
				? await createToken(user)
				: throwError("your code is incorect");
		} else {
			throwError("can not found user phone inside user object");
		}
	};

	const foundedUser = await user.findOne({
		filters: { phone },
		projection: get.user,
	});
	return foundedUser
		? await checkCode(foundedUser)
		: throwError("can not find this user");
};
