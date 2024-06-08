import { ObjectId } from "deps";
import { form } from "../../../mod.ts";
import doesExist from "../utils/doesInstanceExist.ts";

export const doesFormExist = async (formId: ObjectId | string) => {
	return await doesExist(form, "form", formId);
};
