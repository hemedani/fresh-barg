import { ActFn, Document, ObjectId } from "share/deps.ts";
import { reffer } from "../../../../mod.ts";

export const countReffersFn: ActFn = async (body) => {
	const {
		set: {
			refferedId,
			type,
			deadline,
			isMoving,
			letterId,
		},
		get,
	} = body.details;

	const filters: Document = {};
	refferedId &&
		(filters["reffered._id"] = new ObjectId(refferedId));

	type &&
		(filters["type"] = { $in: [type] });

	deadline && (filters["deadline"] = deadline);
	isMoving &&
		(filters["isMoving"] = isMoving);

	letterId &&
		(filters["letter._id"] = new ObjectId(letterId));

	const lengthOfReffers = await reffer.countDocument({
		filter: filters,
	});

	return { qty: lengthOfReffers };
};
