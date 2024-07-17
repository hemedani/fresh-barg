import {
	boolean,
	date,
	enums,
	object,
	objectIdValidation,
	optional,
} from "share/deps.ts";
import { position } from "../../../../mod.ts";

export const countReffersValidator = () => {
	return object({
		set: object({
			positionId: objectIdValidation,
			refferedId: optional(objectIdValidation),
			type: optional(enums(["inUnit", "inOrg", "outOrg"])),
			deadline: optional(date()),
			isMoving: optional(boolean()),
		}),
		get: object({ qty: optional(enums([0, 1])) }),
	});
};
