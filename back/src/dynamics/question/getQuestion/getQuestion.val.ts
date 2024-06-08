import { object, objectIdValidation } from 'deps';
import { selectStruct } from "../../../../mod.ts";
export const getQuestionValidator = () => {
	return object({
		set: object({
			id: objectIdValidation, 
		}),
		get: selectStruct("question", { question: 1})
	})
}