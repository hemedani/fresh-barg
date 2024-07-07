import { DeepPartial, ReqType, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetLettersSet = ReqType["main"]["letter"]["getLetter"]["set"]
export type GetLettersGet = DeepPartial<ReqType["main"]["letter"]["getLetter"]["get"]>

export const getLetters = async (letters: Signal<DeepPartial<letterSchema>[]>, set: GetLettersSet, get: GetLettersGet) => {
  const getAllLetters = await bargApi.send({
    model: "city",
    act: "getCities",
    details: {
      set,
      get,
    },
  })
  if (getAllLetters.success)
    letters.value = getAllLetters
  return getAllLetters
}
