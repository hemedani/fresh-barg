import { ActFn, ObjectId } from "share/deps.ts";
import { user } from "../../../../mod.ts";

export const getUsersFn: ActFn = async (body) => {
	const {
		set: {
			orgId,
			unitId,
			gender,
			is_active,
			province, //not working
			city, //not working
			position, //not working
			page,
			limit,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $limit: limit });
	pipeline.push({ $sort: { _id: -1 } });

	orgId &&
		pipeline.push({ $match: { "org._id": new ObjectId(orgId) } });

	unitId &&
		pipeline.push({ $match: { "unit._id": new ObjectId(unitId) } });

	gender &&
		pipeline.push({ $match: { "gender": gender } });

	is_active &&
		pipeline.push({ $match: { is_active: is_active } });
	/*
	province &&
		pipeline.push({ $match: { "province._id": new ObjectId(province) } });
	*/
	position &&
		pipeline.push({
			$match: {
				"position._id": {
					$in: position.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	province &&
		pipeline.push({
			$match: {
				"province._id": {
					$in: province.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	city &&
		pipeline.push({
			$match: {
				"city._id": {
					$in: city.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	return await user.aggregation({
		pipeline,

		projection: get,
	}).toArray();
};
