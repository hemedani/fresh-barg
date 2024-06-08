import { ActFn, ObjectId } from 'deps';
import { form } from "../../../../mod.ts";

export const getFormsFn: ActFn = async (body) => {
	const {
		set: {
			orgId,
			unitId,
			filterForms,
		},
		get
	} = body.details;

	const pipeline = []

	orgId && pipeline.push({ $match: { "org._id": new ObjectId(orgId) } })
	unitId && pipeline.push({ $match: { "unit._id": new ObjectId(unitId) } })

	filterForms === "active"
		? pipeline.push({ $match: { isActive: true } })
		:filterForms === "notActive"
		? pipeline.push({ $match: { isActive: false } })
		: {}
	return await form.aggregation({
		pipeline,
		projection: get
	}).toArray();
}