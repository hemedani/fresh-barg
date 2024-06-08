import { ActFn, ObjectId } from "share/deps.ts";
import { letter } from "../../../../mod.ts";

export const getLettersFn: ActFn = async (body) => {
	const {
		set: {
			senderId,
			recieversId,
			authorId,
			number,
			subject,
			is_end,
			tags,
			leed,
			content,
			orgId,
			unitId,
			refferIds,
			readByUsers,
			readByPositions,
		},
		get,
	} = body.details;

	const pipeline = [];
	senderId &&
		pipeline.push({ $match: { "sender._id": new ObjectId(senderId) } });
	authorId &&
		pipeline.push({ $match: { "auther._id": new ObjectId(authorId) } });
	recieversId &&
		pipeline.push({
			$match: { "recievers._id": new ObjectId(recieversId) },
		});
	number && pipeline.push({ $match: { number } });
	is_end && pipeline.push({ $match: { "is_end.done": is_end } });
	tags && pipeline.push({ $match: { "tags": { $in: [tags] } } });
	leed || subject ||
		content &&
			pipeline.push({ $text: { $search: leed, subject, content } }, {
				score: { $meta: "textScore" },
			});
	/*leed && pipeline.push({ $match: { leed: { $regex: leed } } });
	subject && pipeline.push({ $match: { subject: { $regex: subject } } });
	content && pipeline.push({ $match: { content: { $regex: content } } });
	//	content && pipeline.push({ $match: { content } });*/

	orgId &&
		pipeline.push({ $match: { "org._id": new ObjectId(orgId) } });

	unitId &&
		pipeline.push({ $match: { "org._id": new ObjectId(unitId) } });

	refferIds &&
		pipeline.push({
			$match: {
				"reffer._id": {
					$in: refferIds.map((_id: string) => new ObjectId(_id)),
				},
			},
		});

	readByPositions &&
		pipeline.push({
			$match: { "readByPositions._id": new ObjectId(readByPositions) },
		});

	readByUsers &&
		pipeline.push({
			$match: { "readByusers._id": new ObjectId(readByUsers) },
		});

	/*readByPositionIds &&
		pipeline.push({
			$match: {
				"readByPositions._id": {
					$in: readByPositionIds.map((_id: string) =>
						new ObjectId(_id)
					),
				},
			},
		});
	readByUserIds &&
		pipeline.push({
			$match: {
				"readByUsers._id": {
					$in: readByUserIds.map((_id: string) => new ObjectId(_id)),
				},
			},
		});
	*/
	return await letter.aggregation({
		pipeline,
		projection: get,
	}).toArray();
};
