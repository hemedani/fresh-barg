import { coreApp } from "../../../../mod.ts";
import { getQuestionsFn } from "./getQuestions.fn.ts";
import { getQuestionsValidator } from "./getQuestions.val.ts";

export const getQuestionsSetup = () =>
	coreApp.acts.setAct({
		schema: "question",
		fn: getQuestionsFn,
		actName: "getQuestions",
		validator: getQuestionsValidator(),
	});

export * from "./getQuestions.fn.ts";
export * from "./getQuestions.val.ts";
