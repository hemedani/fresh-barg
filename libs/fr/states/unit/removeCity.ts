import { DeepPartial, ReqType, unitSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type RemoveUnitSet = ReqType["main"]["unit"]["removeCity"]["set"]
export type RemoveUnitGet = DeepPartial<ReqType["main"]["unit"]["removeCity"]["get"]>

export const removeUnit = async (unit: Signal<DeepPartial<unitSchema>[]>, set: RemoveUnitSet, get: RemoveUnitGet) => {
  const removeUnit = await bargApi.send({
    model: "unit",
    act: "removeCity",
    details: {
      set,
      get,
    },
  })
  if (removeUnit.success)
    unit.value = unit.value.filter(org => org._id !== removeUnit._id)
  return removeUnit
}
