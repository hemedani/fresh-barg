import { DeepPartial, ReqType, unitSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetUnitSet = ReqType["main"]["unit"]["getUnit"]["set"]
export type GetUnitGet = DeepPartial<ReqType["main"]["unit"]["getUnit"]["get"]>

export const getUnit = async (units: Signal<DeepPartial<unitSchema>[]>, set: GetUnitSet, get: GetUnitGet) => {
  const getAllUnit = await bargApi.send({
    model: "unit",
    act: "getUnit",
    details: {
      set,
      get,
    },
  })
  if (getAllUnit.success)
    units.value = getAllUnit;;;
  return getAllUnit
}
