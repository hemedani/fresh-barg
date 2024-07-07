import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { PreDefaultLetter } from "./mod.ts";

export type GetPreDefLettersSet = ReqType["main"]["preDefLetter"]["getPredefletters"]["set"]
export type GetPreDefLettersGet = DeepPartial<ReqType["main"]["preDefLetter"]["getPredefletters"]["get"]>

export const getPreDefLetters = async (preDefLetters: Signal<PreDefaultLetter[]>, set: GetPreDefLettersSet, get: GetPreDefLettersGet) => {
  const getAllPreDefLetters = await bargApi.send({
    model: "preDefLetter",
    act: "getPredefletters",
    details: {
      set,
      get,
    },
  })
  if (getAllPreDefLetters.success)
    preDefLetters.value = getAllPreDefLetters
  return getAllPreDefLetters
}
