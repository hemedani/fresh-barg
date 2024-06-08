import { ActFn, ObjectId } from "share/deps.ts";
import { unit } from "../../../../mod.ts"; //

export const getUnitFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	return await unit.aggregation({
		pipeline: [
			{ $match: { _id: new ObjectId(_id) } },
		],
		projection: get,
	}).toArray();
	// const foundedUnit = await unit.findOne({ _id: new ObjectId(_id) }, get); //
	// !foundedUnit && throwError("unit not exist"); //
	// return foundedUnit;

	// console.log("foundedunit on get method", foundedOrg);
};
