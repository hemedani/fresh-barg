import { ActFn, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { position } from "../../../../mod.ts";

export const getPositionFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	const foundedPosition = await position.findOne(
		{ filters: { _id: new ObjectId(_id) }, projection: get },
	);

	!foundedPosition && throwError("position not exist");

	return foundedPosition;

	// console.log("foundedPosition on get method", foundedPosition);
};
