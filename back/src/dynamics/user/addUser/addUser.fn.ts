import { ActFn, ObjectId } from "share/deps.ts";
import { org, user } from "../../../../mod.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.1/src/utils/throwError.ts";

export const addUserFn: ActFn = async (body) => {
	let {
		set: {
			first_name,
			last_name,
			phone,
			gender,
			birth_date,
			personnel_code,
			email,
			orgIds,
			unitIds,
			position,
			province,
			city,
		},
		get,
	} = body.details;

	const objIdPositions = position.map(
		(posId: string) => new ObjectId(posId),
	);

	orgIds = orgIds.map((id: string) => new ObjectId(id));
	unitIds = unitIds.map((id: string) => new ObjectId(id));

	return await user.insertOne({
		doc: {
			first_name,
			last_name,
			phone,
			gender,
			birth_date,
			personnel_code,
			email,
			is_active: false,
		},
		relations: {
			org: {
				_ids: orgIds,
				relatedRelations: {
					users: true,
				},
			},
			unit: {
				_ids: unitIds,
				relatedRelations: {
					users: true,
				},
			},
			city: {
				_ids: new ObjectId(city),
				relatedRelations: {
					users: true,
				},
			},
			province: {
				_ids: new ObjectId(province),
				relatedRelations: {
					users: true,
				},
			},
			position: {
				_ids: objIdPositions,
				relatedRelations: {
					user: true,
				},
			},
		},
		projection: get,
	});
};
