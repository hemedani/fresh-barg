import { ActFn, ObjectId } from "share/deps.ts";
import { reffer } from "../../../../mod.ts";

export const updateRefferFn: ActFn = async (body) => {
	//  const context: MyContext = coreApp.contextFns
	//  .getContextModel() as MyContext;

	// const _id = context.reffer._id;

	const {
		set: {
			_id,
			number,
			delivered,
			// actions :
			type,
			created_at,
			updated_at,
			deadline,
			isMoving,
			description,
		},
		get,
	} = body.details;
	return await reffer.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				number,
				delivered,
				// actions :
				type,
				created_at,
				updated_at,
				deadline,
				isMoving,
				description,
			},
		},
		projection: get,
	});

	// const foundedReffer = await reffer.findOne({ _id: new ObjectId(_id) });
	// !foundedReffer && throwError("reffer not exist");

	// // console.log("foundedReffer on update method", foundedReffer);

	// const updatedReffer = await reffer.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     number,
	//     delivered,
	//     // actions :
	//     type,
	//     created_at,
	//     updated_at,
	//     deadline,
	//     isMoving,
	//     description ,
	//     reply ,
	// }
	// });

	// console.log("updatedReffer on update method", updatedReffer);

	// return Object.keys(get).length != 0
	//     ? await reffer.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
