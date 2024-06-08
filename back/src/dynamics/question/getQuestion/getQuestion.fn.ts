import { ActFn, ObjectId } from "deps";
import { throwError } from "utils/throwError.ts";
import { question } from "../../../../mod.ts";

export const getQuestionFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details

	const foundedQuestion = await question.findOne(
	  { filters: { _id: new ObjectId(_id) }, projection: get }
	)
	!foundedQuestion && throwError("the question does not exist")
	return foundedQuestion
}