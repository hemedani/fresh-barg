import {
	array,
	coerce,
	date,
	enums,
	object,
	objectIdValidation,
	optional,
	pattern,
	string,
} from "deps";
import { selectStruct } from "../../../../mod.ts";

const gender = enums(["Male", "Female"]);

const dateStringRegex = pattern(
	string(),
	/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
);

export const addUserValidator = () => {
	return object({
		set: object({
			first_name: string(),
			last_name: string(),
			phone: string(),
			gender: gender,
			birth_date: optional(
				coerce(date(), string(), (value) => (new Date(value))),
			),
			personnel_code: string(),
			email: optional(string()),
			province: objectIdValidation,
			city: objectIdValidation,
			orgIds: array(objectIdValidation),
			unitIds: array(objectIdValidation),
			positionId: objectIdValidation,
			position: array(objectIdValidation),
		}),
		get: selectStruct("user", 1),
	});
};
