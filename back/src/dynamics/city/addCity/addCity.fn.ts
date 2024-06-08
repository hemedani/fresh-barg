import { ActFn, ObjectId } from "share/deps.ts";
import { city } from "../../../../mod.ts";

export const addCityFn: ActFn = async (body) => {
	const {
		set,
		get,
	} = body.details;
	const { provinceId, ...rest } = set;

	return await city.insertOne({
		doc: rest,
		projection: get,
		relations: {
			province: {
				_ids: new ObjectId(provinceId),
				relatedRelations: {
					cities: true,
				},
			},
		},
	});
};
