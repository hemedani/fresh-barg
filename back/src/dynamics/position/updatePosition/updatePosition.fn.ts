import { ActFn, Infer, object, ObjectId } from "share/deps.ts";
import { position } from "../../../../mod.ts";
import { positionPure } from "share/schemas/mod.ts";

export const updatePositionFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			name,
			panel,
			features,
		},
		get,
	} = body.details;

	const pureStruct = object(positionPure);
	const updateObj: Partial<Infer<typeof pureStruct>> = {};

	name && (updateObj.name = name);
	panel && (updateObj.panel = panel);
	features && (updateObj.features = features);

	return await position.findOneAndUpdate({
		filter: { _id: new ObjectId(_id) },
		update: {
			$set: updateObj,
		},
		projection: get,
	});
};
