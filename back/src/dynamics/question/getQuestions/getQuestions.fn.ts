import { ActFn, ObjectId } from 'deps';
import { question } from "../../../../mod.ts";

export const getQuestionsFn: ActFn = async (body) => {
	const {
		set: {
			orgId,
			unitId,
			filterQuestions,
		},
		get
	} = body.details;

	const pipeline = []

	orgId && pipeline.push({ $match: { "org._id": new ObjectId(orgId) } })
	unitId && pipeline.push({ $match: { "unit._id": new ObjectId(unitId) } })

	filterQuestions === "active"
		? pipeline.push({ $match: { isActive: true } })
		:filterQuestions === "notActive"
		? pipeline.push({ $match: { isActive: false } })
		: {}
	return await question.aggregation({
		pipeline,
		projection: get
	}).toArray();
}