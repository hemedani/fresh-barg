import { ActFn, Infer, object, ObjectId } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";
import { coreApp, letter, position, user } from "../../../../mod.ts";
import { letterPure } from "share/schemas/mod.ts";

export const addLetterFn: ActFn = async (body) => {
	const {
		set: {
			number,
			subject,
			authorId,
			positionId,
			recieversId,
			content,
			tags,
			leed,
			orgId,
			unitId,
		},
		get,
	} = body.details;

	/*const {user} : MyContext = coreApp.contextFns
  .getContextModel () as MyContext;*/
	const pureUserProjection = coreApp.schemas.createProjection(
		"user",
		"Pure",
	);

	const foundedAuthor = await user.findOne({
		filters: { _id: new ObjectId(authorId) },
		projection: pureUserProjection,
	});

	if (!foundedAuthor) throwError("can not find Author user");

	const purePositionProjection = coreApp.schemas.createProjection(
		"position",
		"Pure",
	);

	const foundedSender = await position.findOne(
		{
			filters: { _id: new ObjectId(positionId) },
			projection: purePositionProjection,
		},
	);

	if (!foundedSender) throwError("can not find Sender position");

	const foundedReciever = await position.findOne({
		filters: {
			_id: new ObjectId(recieversId),
		},
		projection: purePositionProjection,
	});

	if (!foundedReciever) throwError("can not find Reciever position");

	const letterPureObj = object(letterPure);

	const createdLeter: Infer<typeof letterPureObj> = {
		number,
		subject,
		created_at: new Date(),
		leed,
		content,
		recievers: foundedReciever as any,
		author: foundedAuthor as any,
		sender: foundedSender as any,
		tags,
	};

	return await letter.insertOne({
		doc: createdLeter,
		projection: get,
		relations: {
			org: {
				_ids: new ObjectId(orgId),
				relatedRelations: {
					letters: true,
				},
			},
			unit: {
				_ids: new ObjectId(unitId),
				relatedRelations: {
					letters: true,
				},
			},
		},
	});
};
