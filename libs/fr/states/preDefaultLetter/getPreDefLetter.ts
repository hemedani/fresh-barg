import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { PreDefaultLetter } from "./mod.ts";

export type GetPreDefLetterSet = ReqType["main"]["preDefLetter"]["getPredefletter"]["set"]
export type GetPreDefLetterGet = DeepPartial<ReqType["main"]["preDefLetter"]["getPredefletter"]["get"]>

export const getPreDefLetter = async (preDefLetter: Signal<PreDefaultLetter[]>, set: GetPreDefLetterSet, get: GetPreDefLetterGet) => {
  const getSinglePreDefLetter = await bargApi.send({
    model: "preDefLetter",
    act: "getPredefletter",
    details: {
      set,
      get,
    },
  })
  if (getSinglePreDefLetter.success)
    preDefLetter.value = [getSinglePreDefLetter, ...preDefLetter.value];
  return getSinglePreDefLetter
}
