import { ActFn, Document, ObjectId } from "share/deps.ts";
import { letter, user } from "../../../../mod.ts";

export const countUsersFn: ActFn = async (body) => {
	const {
		set: {
			first_name,
			last_name,
			gender,
			birth_date,
			provinceId,
			cityId,
			orgIds,
			unitIds,
			position,
		},
		get,
	} = body.details;

	const filters: Document = {};
	provinceId &&
		(filters["province._id"] = new ObjectId(provinceId));
	cityId &&
		(filters["city._id"] = new ObjectId(cityId));
	gender &&
		(filters["gender"] = gender);
	first_name && (filters["first_name"] = first_name);
	last_name && (filters["last_name"] = last_name);
	birth_date && (filters["birth_date"] = birth_date);

	position && (filters["position._id"] = {
		$in: position.map((_id: string) => new ObjectId(_id)),
	});

	orgIds &&
		(filters[
			"org._id"
		] = {
			$in: orgIds.map((_id: string) => new ObjectId(_id)),
		});
	unitIds &&
		(filters[
			"unit._id"
		] = {
			$in: unitIds.map((_id: string) => new ObjectId(_id)),
		});

	const lengthOfUsers = await user.countDocument({
		filter: filters,
	});

	return { qty: lengthOfUsers };
};
