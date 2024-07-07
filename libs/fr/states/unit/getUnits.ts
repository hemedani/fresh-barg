import { DeepPartial, ReqType, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetUnitsSet = ReqType["main"]["unit"]["getUnit"]["set"]
export type GetUnitsGet = DeepPartial<ReqType["main"]["unit"]["getUnit"]["get"]>

export const getUnits = async (orgs: Signal<DeepPartial<orgSchema>[]>, set: GetUnitsSet, get: GetUnitsGet) => {
  const getAllUnit = await bargApi.send({
    model: "unit",
    act: "getUnit",
    details: {
      set,
      get,
    },
  })
  if (getAllUnit.success)
    orgs.value = getAllUnit;
  return getAllUnit
}
