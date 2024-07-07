import { DeepPartial, ReqType, preDefLetterSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdatePreDefLetterSet = ReqType["main"]["preDefLetter"]["addPredefletter"]["set"]
export type UpdatePreDefLetterGet = DeepPartial<ReqType["main"]["preDefLetter"]["addPredefletter"]["get"]>

export const updatePreDefLetter = async (preDefLetter: Signal<DeepPartial<preDefLetterSchema>[]>, set: UpdatePreDefLetterSet, get: UpdatePreDefLetterGet) => {
  const updatePreDefLetter = await bargApi.send({
    model: "preDefLetter",
    act: "addPredefletter",
    details: {
      set,
      get,
    },
  })
  if (updatePreDefLetter.success) {
    const updatePreDefLetterIdx = preDefLetter.value.findIndex((preDefLetter) => preDefLetter._id === updatePreDefLetter._id)
    preDefLetter.value = [...preDefLetter.value.splice(0, updatePreDefLetterIdx), updatePreDefLetter, ...preDefLetter.value.splice(updatePreDefLetterIdx + 1)]
  }

  return updatePreDefLetter
}
