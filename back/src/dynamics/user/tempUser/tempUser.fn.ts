import { ActFn, ObjectId } from "share/deps.ts";
import { city, org, position, province, unit, user } from "../../../../mod.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.13/src/utils/throwError.ts";

export const tempUserFn: ActFn = async (body) => {
	const {
		set: {
			first_name,
			last_name,
			phone,
		},
		get,
	} = body.details;

	const existTemp = await user.find({ filters: {} }).limit(1).toArray();

	if (existTemp.length > 0) {
		return throwError("can't do this work.");
	}

	const provinceId = await province.insertOne({
		doc: {
			name: "همدان",
			enName: "Hamedan",
			abb: "Hmd",
		},
	});

	const cityId = await city.insertOne({
		doc: {
			name: "همدان",
			enName: "Hamedan",
			abb: "Hmd",
		},
		relations: {
			province: {
				_ids: (provinceId!._id as ObjectId),
				relatedRelations: {
					cities: true,
				},
			},
		},
	});

	const orgId = await org.insertOne({
		doc: {
			name: "tem org",
			address: "nothign",
			ownership: "government",
			type: "service",
			location: {
				longitude: 300,
				latitude: 1000,
			},
			description: "here is initial org",
			// icon
		},
		relations: {
			province: {
				_ids: (provinceId!._id as ObjectId),
				relatedRelations: {
					orgs: true,
				},
			},
			city: {
				_ids: (cityId!._id as ObjectId),
				relatedRelations: {
					orgs: true,
				},
			},
		},
	});

	const unitId = await unit.insertOne({
		doc: {
			name: "temp unit",
			categories: ["temp category1", "temp category2"],
		},
		relations: {
			org: {
				_ids: (orgId!._id as ObjectId),
				relatedRelations: {
					units: true,
				},
			},

			province: {
				_ids: (provinceId!._id as ObjectId),
				relatedRelations: {
					units: true,
				},
			},
			city: {
				_ids: (cityId!._id as ObjectId),
				relatedRelations: {
					units: true,
				},
			},
		},
	});

	const positionId = await position.insertOne({
		doc: {
			name: "Ghost User",
			panel: "darya",
			level: "Ghost",
		},
		relations: {
			org: {
				_ids: (orgId!._id as ObjectId),
				relatedRelations: {
					positions: true,
				},
			},
			unit: {
				_ids: (unitId!._id as ObjectId),
				relatedRelations: {
					positions: true,
				},
			},
		},
	});

	return await user.insertOne({
		doc: {
			first_name,
			last_name,
			phone,
			gender: "Male",
			birth_date: new Date(),
			personnel_code: "123",
			email: "temp@gmai.com",
			is_active: true,
		},
		relations: {
			province: {
				_ids: (provinceId!._id as ObjectId),
				relatedRelations: {
					users: true,
				},
			},
			city: {
				_ids: (cityId!._id as ObjectId),
				relatedRelations: {
					users: true,
				},
			},

			org: {
				_ids: [orgId!._id as ObjectId],
				relatedRelations: {
					users: true,
				},
			},

			unit: {
				_ids: [unitId!._id as ObjectId],
				relatedRelations: {
					users: true,
				},
			},

			position: {
				_ids: [positionId!._id as ObjectId],
				relatedRelations: {
					users: true,
				},
			},
		},
		projection: get,
	});
};
