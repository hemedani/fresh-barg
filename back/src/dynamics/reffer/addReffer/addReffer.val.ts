import {
	array,
	boolean,
	date,
	enums,
	number,
	object,
	objectIdValidation,
	optional,
	string,
} from "share/deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addRefferValidator = () => {
	return object({
		set: object({
			positionId: objectIdValidation,
			refferedId: objectIdValidation,
			number: number(),
			type: enums(["inUnit", "inOrg", "outOrg"]),
			deadline: optional(date()),
			isMoving: boolean(),
			description: optional(
				object({ text: string(), viewed: boolean() }),
			),
			letterId: objectIdValidation,
		}),
		get: selectStruct("reffer", 1),
	});
};
