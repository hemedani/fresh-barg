import { enums, object } from "share/deps.ts";
import { mobilePattern } from "share/schemas/mod.ts";

export const loginUserReqValidator = () => {
	return object({
		set: object({
			phone: mobilePattern,
		}),
		get: object({
			phone: enums([1]),
		}),
	});
};
