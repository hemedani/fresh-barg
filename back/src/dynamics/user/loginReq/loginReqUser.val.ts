import { enums, number, object, string } from "share/deps.ts";

export const loginUserReqValidator = () => {
	return object({
		set: object({
			phone: string(),
		}),
		get: object({
			phone: enums([1]),
		}),
	});
};
