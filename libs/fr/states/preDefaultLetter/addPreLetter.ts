import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { PreDefaultLetter } from "./mod.ts";

export type AddPreDefLetterSet = ReqType["main"]["preDefLetter"]["addPredefletter"]["set"]
export type AddPreDefLetterGet = DeepPartial<ReqType["main"]["preDefLetter"]["addPredefletter"]["get"]>

export const addPreDefLetter = async (preDefLetter: Signal<PreDefaultLetter[]>, set: AddPreDefLetterSet, get: AddPreDefLetterGet) => {
  const addNewPreDefLetter = await bargApi.send({
    model: "preDefLetter",
    act: "addPredefletter",
    details: {
      set,
      get,
    },
  })
  if (addNewPreDefLetter.success)
    preDefLetter.value = [addNewPreDefLetter, ...preDefLetter.value];
  return addNewPreDefLetter
}
