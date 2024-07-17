import { ActFn, Document, ObjectId } from "share/deps.ts";
import { preDefLetter } from "../../../../mod.ts";

export const countPredeflettersFn: ActFn = async (body) => {
	const {
		set: {
			title,
			orgId,
		},
		get,
	} = body.details;

	const filters: Document = {};
	orgId &&
		(filters["org._id"] = new ObjectId(orgId));
	title && (filters["title"] = title);

	const lengthOfPredefletters = await preDefLetter.countDocument({
		filter: filters,
	});

	return { qty: lengthOfPredefletters };
};
