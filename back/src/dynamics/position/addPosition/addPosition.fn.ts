import { ActFn, ObjectId } from "share/deps.ts";
import { position } from "../../../../mod.ts";

export const addPositionFn: ActFn = async (body) => {
	const {
		// set: { name, orgId, unitId, userId },
		set: { name, panel, features, level, orgId, unitId },
		get,
	} = body.details;

	const relations: { org: any; unit?: any } = {
		org: {
			_ids: new ObjectId(orgId),
			relatedRelations: {
				positions: true,
			},
		},
	};

	if (unitId) {
		relations.unit = {
			_ids: new ObjectId(unitId),
			relatedRelations: {
				positions: true,
			},
		};
	}

	return await position.insertOne({
		doc: {
			name,
			level,
			features,
			panel,
		},
		relations,
		projection: get,
	});
};
