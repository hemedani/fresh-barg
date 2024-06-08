import { ActFn, ObjectId } from "deps";
import { form } from "../../../../mod.ts";

export const addFormFn: ActFn = async (body) => {
	const {
		set: {
			// order,
			title,
			isActive,

			// tagIds,
			orgId,
			unitId,
		},
		get,
	} = body.details;


	// if (tagIds) {
	//   relations.tags = {
	//     _ids: tagIds.map((tagId: string) => new ObjectId(tagId)),
	//     relatedRelations: {
	//       forms: true,
	//     }
	//   }
	// }
	
    //TODO
	// const forms = await form.aggregation({
	// 	projection: {_id:1}
	// }).toArray();

	return await form.insertOne({
		doc: {
			order: 1,
			title,
			isActive,
		},
		projection: get,
		relations: {
			org: {
				_ids: new ObjectId(orgId),
				relatedRelations: {
					forms: true
				}
			},
			unit: {
				_ids: new ObjectId(unitId),
				relatedRelations: {
					forms: true
				}
			}
		},
	});
};
