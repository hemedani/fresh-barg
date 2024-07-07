import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { PreDefaultLetter } from "./mod.ts";

export type RemovePreDefLetterSet = ReqType["main"]["preDefLetter"]["removePredefLetter"]["set"]
export type RemovePreDefLetterGet = DeepPartial<ReqType["main"]["preDefLetter"]["removePredefLetter"]["get"]>

export const removePreDefLetter = async (preDefLetter: Signal<PreDefaultLetter[]>, set: RemovePreDefLetterSet, get: RemovePreDefLetterGet) => {
  const removePrLetter = await bargApi.send({
    model: "preDefLetter",
    act: "removePredefLetter",
    details: {
      set,
      get,
    },
  })
  if (removePrLetter.success)
    preDefLetter.value = preDefLetter.value.filter(PreDefLetter => PreDefLetter._id !== removePrLetter._id);
  return removePrLetter
}
