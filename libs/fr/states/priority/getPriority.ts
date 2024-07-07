import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Priority } from "./mod.ts";

export type GetPrioritySet = ReqType["main"]["priority"]["getPriority"]["set"]
export type GetPriorityGet = DeepPartial<ReqType["main"]["priority"]["getPriority"]["get"]>

export const getPriority = async (priority: Signal<Priority[]>, set: GetPrioritySet, get: GetPriorityGet) => {
  const getPriority = await bargApi.send({
    model: "priority",
    act: "getPriority",
    details: {
      set,
      get,
    },
  })
  if (getPriority.success)
    priority.value = [getPriority, ...priority.value];
  return getPriority
}
