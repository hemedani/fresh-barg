import {
	ActFn,
	Infer,
	object,
	ObjectId,
	objectIdValidation,
} from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { reffer } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { coreApp } from "../../../../mod.ts";
import { positionPure, userPure } from "share/schemas/mod.ts";

export const getRefferFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;

	const { user, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const foundedReffer = await reffer.findOne({
		filters: { _id: new ObjectId(_id) },
		projection: {
			...get,
			readByUsers: { _id: 1, ...get.readByUsers },
			readByPositions: { _id: 1, ...get.readByPositions },
		},
	});

	const userPureWithId = object({
		_id: objectIdValidation,
		...userPure,
	});
	type UserPure = Infer<typeof userPureWithId>;

	const positionPureWithId = object({
		...positionPure,
	});

	type PositionPure = Infer<typeof positionPureWithId>;

	if (foundedReffer) {
		const isReadByUser: boolean = foundedReffer.readByUsers
			? foundedReffer.readByUsers.some((
				{ _id }: UserPure,
			) => user._id.equals(_id))
			: false;

		const isReadByPostion: boolean = foundedReffer.readByPositions
			? foundedReffer.readByPositions.some((
				{ _id }: PositionPure,
			) => position!._id.equals(_id))
			: false;

		if (!isReadByPostion) {
			reffer.addRelation({
				filters: { _id: new ObjectId(_id) },
				relations: {
					readByPositions: {
						_ids: [position!._id],
						relatedRelations: {
							readedReffers: true,
						},
					},
				},
			});
		}

		if (!isReadByUser) {
			reffer.addRelation({
				filters: { _id: new ObjectId(_id) },
				relations: {
					readByUsers: {
						_ids: [user!._id],
						relatedRelations: {
							readedReffers: true,
						},
					},
				},
			});
		}

		return foundedReffer;
	} else {
		throwError("reffer not exist");
	}
};
