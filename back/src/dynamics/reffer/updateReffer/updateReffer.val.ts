import { boolean, date, number, object, optional, string } from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const updateRefferValidator = () => {
	return object({
		set: object({
			_id: string(),
			number: number(),
			deadline: optional(date()),
			isMoving: boolean(),
		}),
		get: selectStruct("reffer", { reffer: 1 }),
	});
};
