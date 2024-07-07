import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Question } from "../question/mod.ts";

export type UpdateFormSet = ReqType["main"]["form"]["updateForm"]
export type UpdateFormGet = DeepPartial<ReqType["main"]["form"]["updateForm"]["get"]>

export const updateForm = async (forms: Signal<Question[]>, set: UpdateFormSet, get: UpdateFormGet) => {
  const updateForm = await bargApi.send({
    model: "form",
    act: "updateForm",
    details: {
      set,
      get,
    },
  })
  const updateFormInx = forms.value.findIndex((form) => form._id === updateForm._id)
  forms.value = [...forms.value.splice(0, updateFormInx), updateForm, ...forms.value.splice(updateFormInx + 1)]
  return updateForm
}
