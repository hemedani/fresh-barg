import { ActFn, ObjectId } from "share/deps.ts";
import { org, position } from "../../../../mod.ts";

export const addOrgFn: ActFn = async (body) => {
	const {
		set,
		get,
	} = body.details;

	const {
		latitude,
		longitude,
		provinceId,
		cityId,
		...rest
	} = set;

	const location = { latitude, longitude };

	const newOrg = await org.insertOne({
		doc: { ...rest, location },
		relations: {
			city: {
				_ids: new ObjectId(cityId),
				relatedRelations: {
					orgs: true,
				},
			},
			province: {
				_ids: new ObjectId(provinceId),
				relatedRelations: {
					orgs: true,
				},
			},
		},
	});

	await position.insertOne({
		doc: {
			name: `رئیس سازمان ${rest.name}`,
			level: "Orghead",
			features: [],
			panel: "johar",
		},
		relations: {
			org: {
				_ids: newOrg._id,
				relatedRelations: {
					positions: true,
				},
			},
		},
	});
	return org.findOne({ filters: { _id: newOrg._id } });
};
