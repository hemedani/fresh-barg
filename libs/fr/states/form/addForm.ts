import { DeepPartial, ReqType, formSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddFormSet = ReqType["main"]["form"]["addForm"]["set"]
export type AddFromGet = DeepPartial<ReqType["main"]["form"]["addForm"]["get"]>

export const addForm = async (forms: Signal<DeepPartial<formSchema>[]>, set: AddFormSet, get: AddFromGet) => {
  const addNewForm = await bargApi.send({
    model: "form",
    act: "addForm",
    details: {
      set,
      get,
    },
  })
  forms.value = [addNewForm, ...forms.value];
  return addNewForm
}
