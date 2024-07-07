import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Question } from "./mod.ts";

export type AddQuestionSet = ReqType["main"]["question"]["addQuestion"]["set"]
export type AddQuestionGet = DeepPartial<ReqType["main"]["question"]["addQuestion"]["get"]>

export const addQuestion = async (questions: Signal<Question[]>, set: AddQuestionSet, get: AddQuestionGet) => {
  const addNewQuestion = await bargApi.send({
    model: "question",
    act: "addQuestion",
    details: {
      set,
      get,
    },
  })
  if (addNewQuestion.success)
    questions.value = [addNewQuestion, ...questions.value];
  return addNewQuestion
}
