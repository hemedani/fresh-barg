import { ActFn, ObjectId } from "deps";
import { throwError } from "utils/throwError.ts";
import { form } from "../../../../mod.ts";

export const getFormFn: ActFn = async (body) => {
	const {
		set: {
			_id,
		},
		get,
	} = body.details

	const foundedForm = await form.findOne(
	  { filters: { _id: new ObjectId(_id) }, projection: get }
	)
	!foundedForm && throwError("the form does not exist")
	return foundedForm
}