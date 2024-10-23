import { coreApp } from "../../../../mod.ts";
import { updateQuestionFn } from "./updateQuestion.fn.ts";
import { updateQuestionValidator } from "./updateQuestion.val.ts";

export const updateQuestionSetup = () =>
	coreApp.acts.setAct({
		schema: "question",
		fn: updateQuestionFn,
		actName: "updateQuestion",
		validator: updateQuestionValidator(),
	});
