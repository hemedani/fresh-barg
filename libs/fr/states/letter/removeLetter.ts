import { DeepPartial, ReqType, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type RemoveLetterSet = ReqType["main"]["letter"]["removeLetter"]["set"]
export type RemoveLetterGet = DeepPartial<ReqType["main"]["letter"]["removeLetter"]["get"]>

export const removeLetter = async (letters: Signal<DeepPartial<letterSchema>[]>, set: RemoveLetterSet, get: RemoveLetterGet) => {
  const removeLetter = await bargApi.send({
    model: "letter",
    act: "removeLetter",
    details: {
      set,
      get,
    },
  })
  if (removeLetter.success)
    letters.value = letters.value.filter(letter => letter?._id !== removeLetter._id);
  return removeLetter
}
