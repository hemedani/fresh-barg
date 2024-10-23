import { coreApp } from "../../../../mod.ts";
import { getQuestionFn } from "./getQuestion.fn.ts";
import { getQuestionValidator } from "./getQuestion.val.ts";

export const getQuestionSetup = () =>
	coreApp.acts.setAct({
		schema: "question",
		fn: getQuestionFn,
		actName: "getQuestion",
		validator: getQuestionValidator(),
	});
