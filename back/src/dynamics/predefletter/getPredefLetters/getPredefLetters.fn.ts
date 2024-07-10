import { ActFn, ObjectId } from "share/deps.ts";
import { preDefLetter } from "../../../../mod.ts";

export const getPredeflettersFn: ActFn = async (body) => {
	const {
		set: {
			description,
			org, //not working
			number,
			title,
			page,
			limit,
		},
		get,
	} = body.details;

	const pipeline = [];

	pipeline.push({ $skip: (page - 1) * limit });
	pipeline.push({ $limit: limit });
	pipeline.push({ $sort: { _id: -1 } });

	number &&
		pipeline.push({ $match: { number: number } });

	title &&
		pipeline.push({ $match: { title: { $regex: title } } });

	description &&
		pipeline.push({ $match: { description: { $regex: description } } });

	org &&
		pipeline.push({
			$match: {
				"org._id": {
					$in: org.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	return await preDefLetter.aggregation({
		pipeline,

		projection: get,
	}).toArray();
};
