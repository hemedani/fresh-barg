import { DeepPartial, ReqType, formSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetFormSet = ReqType["main"]["form"]["getForm"]["set"]
export type GetFormGet = DeepPartial<ReqType["main"]["form"]["getForm"]["get"]>

export const getForm = async (forms: Signal<DeepPartial<formSchema>[]>, set: GetFormSet, get: GetFormGet) => {
  const getSingleForm = await bargApi.send({
    model: "form",
    act: "getForm",
    details: {
      set,
      get,
    },
  })
  if (getSingleForm.success)
    forms.value = getSingleForm;
  return getSingleForm
}
