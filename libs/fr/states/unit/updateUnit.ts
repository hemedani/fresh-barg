import { DeepPartial, ReqType, unitSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdateUnitSet = ReqType["main"]["unit"]["updateUnit"]["set"]
export type UpdateUnitGet = DeepPartial<ReqType["main"]["unit"]["updateUnit"]["get"]>

export const updateUnit = async (units: Signal<DeepPartial<unitSchema>[]>, set: UpdateUnitSet, get: UpdateUnitGet) => {
  const updateUnit = await bargApi.send({
    model: "unit",
    act: "updateUnit",
    details: {
      set,
      get,
    },
  })
  if (updateUnit.success) {
    const updateUnitIdx = units.value.findIndex((unit) => unit._id === updateUnit._id)
    units.value = [...units.value.splice(0, updateUnitIdx), updateUnit, ...units.value.splice(updateUnitIdx + 1)]
  }
  return updateUnit
}
