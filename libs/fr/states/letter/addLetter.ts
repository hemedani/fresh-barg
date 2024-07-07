import { DeepPartial, ReqType, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddLetterSet = ReqType["main"]["letter"]["addLetter"]["set"]
export type AddLetterGet = DeepPartial<ReqType["main"]["letter"]["addLetter"]["get"]>

export const addLetter = async (letters: Signal<DeepPartial<letterSchema[]>>, set: AddLetterSet, get: AddLetterGet) => {
  const addNewLetter = await bargApi.send({
    model: "letter",
    act: "addLetter",
    details: {
      set,
      get,
    },
  })
  if (addNewLetter.success)
    letters.value = [addNewLetter, ...letters.value];
  return addNewLetter
}
