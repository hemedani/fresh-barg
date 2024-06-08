import { ActFn, ObjectId } from "share/deps.ts";
import { org } from "../../../../mod.ts";
export const updateOrgFn: ActFn = async (body) => {
	// const context: MyContext = coreApp.contextFns
	// .getContextModel() as MyContext;

	//	const _id = context.org._id;

	const {
		set: {
			_id,
			name,
			address,
			location,
			description,
			// icon
		},
		get,
	} = body.details;

	const updateObj: Record<string, any> = {};

	name && (updateObj.name = name);
	address && (updateObj.address = address);
	location && (updateObj.location = location);
	description && (updateObj.description = description);

	return await org.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: updateObj,
		},
		projection: get,
	});

	// const foundedOrg = await org.findOne({ _id: new ObjectId(_id) });
	// !foundedOrg && throwError("org not exist");

	// // console.log("foundedOrg on update method", foundedOrg);

	// const updatedOrg = await org.updateOne({ _id: new ObjectId(_id) }, { $set: {
	//     name,
	//     address
	// }
	// });

	// console.log("updatedOrg on update method", updatedOrg);

	// return Object.keys(get).length != 0
	//     ? await org.findOne({ _id: new ObjectId(_id) }, get)
	//     : { _id: _id };
};
