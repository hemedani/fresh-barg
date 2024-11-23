import { ActFn } from "share/deps.ts";
import { ObjectId } from "https://deno.land/x/lesan@v0.1.1/mod.ts";
import { reffer } from "../../../../mod.ts";
export const addRefferFn: ActFn = async (body) => {
	const {
		set: {
			positionId,
			refferedId,
			number,
			delivered,
			// actions :
			type,
			deadline,
			isMoving,
			description,
			letterId,
		},
		get,
	} = body.details;

	const createdReffer = {
		number,
		delivered,
		type,
		created_at: new Date(),
		updated_at: new Date(),
		deadline,
		isMoving,
		description,
	};
	return await reffer.insertOne({
		doc: createdReffer,
		relations: {
			letter: {
				_ids: new ObjectId(letterId),
				relatedRelations: {
					reffers: true,
				},
			},
			reffered: {
				_ids: new ObjectId(refferedId),
				relatedRelations: {
					recievedReffer: true,
				},
			},
			refferer: {
				_ids: new ObjectId(positionId),
				relatedRelations: {
					sendReffer: true,
				},
			},
		},
		projection: get,
	});
};
