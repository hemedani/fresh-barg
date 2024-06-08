import { ActFn, ObjectId } from "share/deps.ts";
import { reffer } from "../../../../mod.ts";

export const getReffersFn: ActFn = async (body) => {
	const {
		set: {
			page,
			take,
			number,
			type,
			letter,
			delivered,
			description,
			refferer,
			reffered,
			readByUsers,
			readByPositions,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $skip: (page - 1) * take });
	pipeline.push({ $limit: take });

	number && pipeline.push({ $match: { number } });

	delivered && pipeline.push({ $match: { delivered: delivered } });

	type && pipeline.push({ $match: { "type": { $in: [type] } } });

	description &&
		pipeline.push({ $match: { description: { $regex: description } } });

	letter &&
		pipeline.push({
			$match: {
				"letter._id": {
					$in: letter.map((_id: string) => new ObjectId(_id)),
				},
			},
		});
	reffered &&
		pipeline.push({
			$match: {
				"reffered._id": {
					$in: reffered.map((_id: string) => new ObjectId(_id)),
				},
			},
		});
	refferer &&
		pipeline.push({
			$match: {
				"refferer._id": {
					$in: refferer.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	readByPositions &&
		pipeline.push({
			$match: { "readByPositions._id": new ObjectId(readByPositions) },
		});

	readByUsers &&
		pipeline.push({
			$match: { "readByUsers._id": new ObjectId(readByUsers) },
		});

	return await reffer.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
