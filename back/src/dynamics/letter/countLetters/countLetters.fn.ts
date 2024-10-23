import { ActFn, Document, ObjectId } from "share/deps.ts";
import { letter } from "../../../../mod.ts";

export const countLettersFn: ActFn = async (body) => {
	const {
		set: {
			senderId,
			recieversId,
			authorId,
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
			text,
		},
		get,
	} = body.details;

	const filters: Document = {};
	senderId &&
		(filters["sender._id"] = new ObjectId(senderId));
	authorId &&
		(filters["auther._id"] = new ObjectId(authorId));
	recieversId &&
		(filters["recievers._id"] = new ObjectId(recieversId));
	is_end && (filters["is_end.done"] = is_end);
	tags &&
		(filters["tags"] = { $in: tags });
	text &&
		(filters["$text"] = { $search: text }, {
			score: { $meta: "textScore" },
		});
	leed && (filters["leed"] = { $regex: leed });
	subject && (filters["subject"] = { $regex: subject });
	content && (filters["content"] = { $regex: content });
	orgId &&
		(filters["org._id"] = new ObjectId(orgId));

	unitId &&
		(filters["unit._id"] = new ObjectId(unitId));
	refferIds &&
		(filters[
			"reffer._id"
		] = {
			$in: refferIds.map((_id: string) => new ObjectId(_id)),
		});

	readByPositions &&
		(filters["readByPositions._id"] = new ObjectId(readByPositions));

	readByUsers &&
		(filters["readByusers._id"] = new ObjectId(readByUsers));

	const lengthOfLetters = await letter.countDocument({
		filter: filters,
	});

	return { qty: lengthOfLetters };
};
