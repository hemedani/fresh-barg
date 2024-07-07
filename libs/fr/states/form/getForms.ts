import { DeepPartial, ReqType, formSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetFormsSet = ReqType["main"]["form"]["getForms"]["set"]
export type GetFormsGet = DeepPartial<ReqType["main"]["form"]["getForms"]["get"]>

export const getForms = async (form: Signal<DeepPartial<formSchema>[]>, set: GetFormsSet, get: GetFormsGet) => {
  const getAllForm = await bargApi.send({
    model: "form",
    act: "getForms",
    details: {
      set,
      get,
    },
  })
  if (getAllForm.success)
    form.value = getAllForm;
  return getAllForm
}
