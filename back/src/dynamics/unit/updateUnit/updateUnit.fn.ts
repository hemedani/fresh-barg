import { ActFn, ObjectId } from "share/deps.ts";
import { unit } from "../../../../mod.ts";

export const updateUnitFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			name,
			categories,
		},
		get,
	} = body.details;
	return await unit.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				name,
				categories,
			},
		},
		projection: get,
	});

	// const foundedUnit = await unit.findOne({ _id: new ObjectId(_id) });
	// !foundedUnit && throwError("unit not exist");

	// const updatedUnit = await unit.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     name,
	//     categories
	// }
	// });

	// console.log("updatedUnit on update method", updatedUnit);

	// return Object.keys(get).length != 0
	//     ? await unit.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
