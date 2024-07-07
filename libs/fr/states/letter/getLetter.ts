import { DeepPartial, ReqType, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";


export type GetLetterSet = ReqType["main"]["letter"]["getLetter"]["set"]
export type GetLetterGet = DeepPartial<ReqType["main"]["letter"]["getLetter"]["get"]>

export const getLetter = async (letters: Signal<DeepPartial<letterSchema>[]>, set: GetLetterSet, get: GetLetterGet) => {
  const getSingleLetter = await bargApi.send({
    model: "letter",
    act: "getLetter",
    details: {
      set,
      get,
    },
  })
  if (getSingleLetter.success)
    letters.value = getSingleLetter;
  return getSingleLetter
}
