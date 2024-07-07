import { DeepPartial, ReqType, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdateLetterSet = ReqType["main"]["letter"]["updateLetter"]["set"]
export type UpdateLetterGet = DeepPartial<ReqType["main"]["letter"]["updateLetter"]["get"]>

export const updateLetter = async (letters: Signal<DeepPartial<letterSchema>[]>, set: UpdateLetterSet, get: UpdateLetterGet) => {
  const updateLetter = await bargApi.send({
    model: "letter",
    act: "updateLetter",
    details: {
      set,
      get,
    },
  })
  if (updateLetter.success) {
    const updateLetterIdx = letters.value.findIndex((letter) => letter?._id === updateLetter._id)
    letters.value = [...letters.value.splice(0, updateLetterIdx), updateLetter, ...letters.value.splice(updateLetterIdx + 1)]
  }

  return updateLetter
}
