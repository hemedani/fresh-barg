import { ActFn, ObjectId } from "share/deps.ts";
import { MyContext } from "interfaces/context.ts";
import { coreApp, user } from "../../../../mod.ts";

export const updateUserFn: ActFn = async (body) => {
	const context: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const _id = context.user._id;

	const {
		set: {
			first_name,
			last_name,
			phone,
			gender,
			birth_date,
			personnel_code,
			email,
		},
		get,
	} = body.details;

	const updateObj: Record<string, any> = {};

	first_name && (updateObj.first_name = first_name);
	last_name && (updateObj.last_name = last_name);
	phone && (updateObj.phone = phone);
	gender && (updateObj.gender = gender);
	birth_date && (updateObj.birth_date = birth_date);
	personnel_code && (updateObj.personnel_code = personnel_code);
	email && (updateObj.email = email);

	return await user.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: updateObj,
		},

		projection: get,
	});
};
