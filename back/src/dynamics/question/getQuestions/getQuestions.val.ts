import { enums, object, optional, size, string } from "deps";
import { selectStruct } from "../../../../mod.ts";

export const QuestionStatus = enums(["active", "notActive"]);

export const getQuestionsValidator = () => {
	return object({
		set: object({
			orgId: optional(size(string(), 24)),
			unitId: optional(size(string(), 24)),
			filterQuestions: optional(QuestionStatus),
		}),
		get: selectStruct("question", 2),
	});
};
