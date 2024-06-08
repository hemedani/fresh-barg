import { ActFn, ObjectId } from "share/deps.ts";
import { letter } from "../../../../mod.ts";

export const updateLetterFn: ActFn = async (body) => {
	//  const context: MyContext = coreApp.contextFns
	//  .getContextModel() as MyContext;

	// const _id = context.letter._id;

	const {
		set: {
			_id,
			number,
			subject,
			created_at,
			updated_at,
			delivered,
			is_end,
			tags,
			lid,
		},
		get,
	} = body.details;

	return await letter.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				number,
				subject,
				created_at,
				updated_at,
				delivered,
				is_end,
				tags,
				lid,
			},
		},
		projection: get,
	});
	// const foundedLetter = await letter.findOne({ _id: new ObjectId(_id) });
	// !foundedLetter && throwError("letter not exist");

	// // console.log("foundedLetter on update method", foundedLetter);

	// const updatedLetter = await letter.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     number,
	//     subject,
	//     created_at,
	//     updated_at,
	//     delivered ,
	//     is_end ,
	//     tags,
	//     lid
	// }
	// });

	// console.log("updatedLetter on update method", updatedLetter);

	// return Object.keys(get).length != 0
	//     ? await letter.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
