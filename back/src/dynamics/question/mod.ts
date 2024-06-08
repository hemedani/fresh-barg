import { addQuestionSetup } from "./addQuestion/mod.ts";
import { getQuestionSetup } from "./getQuestion/mod.ts";
import { getQuestionsSetup } from "./getQuestions/mod.ts";
import { updateQuestionSetup } from "./updateQuestion/mod.ts";

export * from "./addQuestion/mod.ts";
export * from "./getQuestion/mod.ts";
export * from "./getQuestions/mod.ts";
export * from "./updateQuestion/mod.ts";

export const questionSetup = () => {
	addQuestionSetup();
	getQuestionSetup()
	getQuestionsSetup()
	updateQuestionSetup()
}