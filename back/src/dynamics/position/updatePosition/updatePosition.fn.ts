import { ActFn, ObjectId } from "share/deps.ts";
import { position } from "../../../../mod.ts";

export const updatePositionFn: ActFn = async (body) => {
	//  const context: MyContext = coreApp.contextFns
	//  .getContextModel() as MyContext;

	// const _id = context.position._id;

	const {
		set: {
			_id,
			name,
		},
		get,
	} = body.details;

	return await position.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				name,
			},
		},
		projection: get,
	});
	// const foundedPosition = await position.findOne({ _id: new ObjectId(_id) });
	// !foundedPosition && throwError("position not exist");

	// // console.log("foundedPosition on update method", foundedPosition);

	// const updatedPosition = await position.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     name
	// }
	// });

	// console.log("updatedPosition on update method", updatedPosition);

	// return Object.keys(get).length != 0
	//     ? await position.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
