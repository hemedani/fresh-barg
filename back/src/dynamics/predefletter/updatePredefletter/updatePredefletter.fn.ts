import { ActFn, ObjectId } from "share/deps.ts";
import { preDefLetter } from "../../../../mod.ts";
export const updatePredefletterFn: ActFn = async (body) => {
	//  const context: MyContext = coreApp.contextFns
	//  .getContextModel() as MyContext;

	// const _id = context.preDefLetter._id;

	const {
		set: {
			_id,
			title,
			description,
			number,
		},
		get,
	} = body.details;

	return await preDefLetter.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: {
				title,
				description,
				number,
			},
		},
		projection: get,
	});

	//     const foundedPredefletter = await preDefLetter.findOne({ _id: new ObjectId(_id) });
	//     !foundedPredefletter && throwError("predefletter not exist");

	//     // console.log("foundedPredefletter on update method", foundedPredefletter);

	//     const updatedPredefletter = await preDefLetter.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//         title ,
	//         description,
	//         number
	//     }
	//     });

	//     console.log("updatedPredefletter on update method", updatedPredefletter);

	//     return Object.keys(get).length != 0
	//         ? await preDefLetter.findOne({ _id: new ObjectId(_id) }, get)
	//         : { _id: _id };
};
