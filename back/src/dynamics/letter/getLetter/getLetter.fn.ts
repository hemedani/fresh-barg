import {
	ActFn,
	Infer,
	object,
	ObjectId,
	objectIdValidation,
} from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { coreApp, letter } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { positionPure, userPure } from "share/schemas/mod.ts";

export const getLetterFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details;
	/*const foundedLetter = await letter.findOne({
		filters: { _id: new ObjectId(_id) },
		projection: get,
	});
	!foundedLetter && throwError("letter not exist");
	return foundedLetter;
	*/
	// console.log("foundedLetter on get method", foundedLetter);

	const { user, position }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const foundedLetter = await letter.findOne({
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

	if (foundedLetter) {
		const isReadByUser: boolean = foundedLetter.readByUsers
			? foundedLetter.readByUsers.some((
				{ _id }: UserPure,
			) => user._id.equals(_id))
			: false;

		const isReadByPostion: boolean = foundedLetter.readByPositions
			? foundedLetter.readByPositions.some((
				{ _id }: PositionPure,
			) => position!._id.equals(_id))
			: false;

		if (!isReadByPostion) {
			letter.addRelation({
				filters: { _id: new ObjectId(_id) },
				relations: {
					readByPositions: {
						_ids: [position!._id],
						relatedRelations: {
							readedLetter: true,
						},
					},
				},
			});
		}

		if (!isReadByUser) {
			letter.addRelation({
				filters: { _id: new ObjectId(_id) },
				relations: {
					readByUsers: {
						_ids: [user!._id],
						relatedRelations: {
							readedLetter: true,
						},
					},
				},
			});
		}

		return foundedLetter;
	} else {
		throwError("letter not exist");
	}
};
