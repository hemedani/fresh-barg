import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Question } from "./mod.ts";

export type GetQuestionSet = ReqType["main"]["question"]["getQuestion"]["set"]
export type GetQuestionGet = DeepPartial<ReqType["main"]["question"]["getQuestion"]["get"]>

export const getCity = async (questions: Signal<Question[]>, set: GetQuestionSet, get: GetQuestionGet) => {
  const getSingleCity = await bargApi.send({
    model: "question",
    act: "getQuestion",
    details: {
      set,
      get,
    },
  })
  if (getSingleCity.success)
    questions.value = [getSingleCity, ...questions.value];
  return getSingleCity
}
