import { signal } from '@preact/signals';
import { DeepPartial, questionSchema } from "../../../../back/declarations/selectInp.ts";
import { AddQuestionGet, AddQuestionSet, addQuestion } from "./addQuestion.ts";



export type Question = DeepPartial<questionSchema>;
export const question = signal<Question>({});
export const questions = signal<Question[]>([]);


export const createQuestionState = () => {
  return {
    question, questions,
    addQuestion: async (set: AddQuestionSet, get: AddQuestionGet) => await addQuestion(questions, set, get)
  }
}