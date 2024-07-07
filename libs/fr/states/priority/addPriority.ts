import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Priority } from "./mod.ts";

export type AddPrioritySet = ReqType["main"]["priority"]["addPriority"]["set"]
export type AddPriorityGet = DeepPartial<ReqType["main"]["priority"]["addPriority"]["get"]>

export const addPriority = async (priority: Signal<Priority[]>, set: AddPrioritySet, get: AddPriorityGet) => {
  const addNewPriority = await bargApi.send({
    model: "priority",
    act: "addPriority",
    details: {
      set,
      get,
    },
  })
  if (addNewPriority.success)
    priority.value = [addNewPriority, ...priority.value];
  return addNewPriority
}
