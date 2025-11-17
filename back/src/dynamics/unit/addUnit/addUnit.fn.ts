import { ActFn, ObjectId } from "share/deps.ts";
import { position, unit } from "../../../../mod.ts";
import { throwError } from "utils/throwError.ts";

export const addUnitFn: ActFn = async (body) => {
	const {
		set,
		get,
	} = body.details;

	const {
		orgId,
		cityId,
		provinceId,
		...rest
	} = set;

	const newUnit = await unit.insertOne({
		doc: { ...rest },
		relations: {
			city: {
				_ids: new ObjectId(cityId),
				relatedRelations: {
					units: true,
				},
			},
			province: {
				_ids: new ObjectId(provinceId),
				relatedRelations: {
					units: true,
				},
			},
			org: {
				_ids: new ObjectId(orgId),
				relatedRelations: {
					units: true,
				},
			},
		},
	});

	if (newUnit) {
		await position.insertOne({
			doc: {
				name: `رییس واحد ${rest.name}`,
				level: "Unithead",
				features: [],
				panel: "johar",
			},
			relations: {
				unit: {
					_ids: newUnit._id,
					relatedRelations: {
						positions: true,
					},
				},
			},
		});
		return unit.findOne({ filters: { _id: newUnit._id }, projection: get });
	} else {
		throwError("can not create this unit");
	}
};
