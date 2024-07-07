import { DeepPartial, ReqType, prioritySchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdatePrioritySet = ReqType["main"]["priority"]["updatePriority"]["set"]
export type UpdatePriorityGet = DeepPartial<ReqType["main"]["priority"]["updatePriority"]["get"]>

export const updatePriority = async (priorities: Signal<DeepPartial<prioritySchema>[]>, set: UpdatePrioritySet, get: UpdatePriorityGet) => {
  const updatePri = await bargApi.send({
    model: "priority",
    act: "updatePriority",
    details: {
      set,
      get,
    },
  })
  if (updatePri.success) {
    const updatePriorityIdx = priorities.value.findIndex((priority) => priority._id === updatePri._id)
    priorities.value = [...priorities.value.splice(0, updatePriorityIdx), updatePri, ...priorities.value.splice(updatePriorityIdx + 1)]
  }

  return updatePri
}
