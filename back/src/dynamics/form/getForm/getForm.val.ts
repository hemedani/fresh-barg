import { object, string } from 'deps';
import { selectStruct } from "../../../../mod.ts";
export const getFormValidator = () => {
	return object({
		set: object({
		  _id: string()
		}),
		get: selectStruct("form", { form: 1})
	})
}