import { ActFn, Document, ObjectId } from "share/deps.ts";
import { position } from "../../../../mod.ts";

export const countPositionsFn: ActFn = async (body) => {
	const {
		set: {
			name,
			unitId,
			orgId,
			panel,
			level,
			userId,
			features,
		},
		get,
	} = body.details;

	const filters: Document = {};
	userId &&
		(filters["user._id"] = new ObjectId(userId));
	unitId &&
		(filters["unit._id"] = new ObjectId(unitId));
	orgId &&
		(filters["org._id"] = new ObjectId(orgId));
	level &&
		(filters["level"] = level);
	features &&
		(filters["features"] = { $in: features });
	panel &&
		(filters["panel"] = panel);
	name &&
		(filters["name"] = name);

	const lengthOfPositions = await position.countDocument({
		filter: filters,
	});

	return { qty: lengthOfPositions };
};
