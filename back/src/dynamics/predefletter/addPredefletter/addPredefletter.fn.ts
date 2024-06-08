import { ActFn, ObjectId } from "share/deps.ts";
import { preDefLetter } from "../../../../mod.ts";

export const addPredefletterFn: ActFn = async (body) => {
	const {
		set: {
			title,
			description,
			number,
			orgId,
		},
		get,
	} = body.details;

	return await preDefLetter.insertOne({
		doc: {
			title,
			description,
			number,
		},
		relations: {
			org: {
				_ids: new ObjectId(orgId),
				relatedRelations: {
					preDefLetters: true,
				},
			},
		},
		projection: get,
	});
};
