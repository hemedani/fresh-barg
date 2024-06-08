import { coreApp } from "../../../../mod.ts";
import { addQuestionFn } from "./addQuestion.fn.ts";
import { addQuestionValidator } from "./addQuestion.val.ts";

export const addQuestionSetup = () =>
	coreApp.acts.setAct({
		schema: "question",
		fn: addQuestionFn,
		actName: "addQuestion",
		validator: addQuestionValidator(),
	});

export * from "./addQuestion.fn.ts";
export * from "./addQuestion.val.ts";
