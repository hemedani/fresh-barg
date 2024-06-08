import { ActFn } from "deps";
import { priority } from "../../../../mod.ts";

export const updatePriorityFn: ActFn = async (body) => {
	//  const context: MyContext = coreApp.contextFns
	//  .getContextModel() as MyContext;

	// const _id = context.priority._id;
	const {
		set: {
			_id,
			name,
		},
		get,
	} = body.details;

	return await priority.updateById({
		_id,
		update: {
			$set: {
				name,
			},
		},
		get,
	});

	// const foundedPriority = await priority.findOne({ _id: new ObjectId(_id) });
	// !foundedPriority && throwError("priority not exist");

	// // console.log("foundedPriority on update method", foundedpriority);

	// const updatedPriority = await priority.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     name
	// }
	// });

	// console.log("updatedPriority on update method", updatedpriority);

	// return Object.keys(get).length != 0
	//     ? await priority.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
