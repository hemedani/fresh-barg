import { DeepPartial, ReqType, unitSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddUnitSet = ReqType["main"]["unit"]["addUnit"]["set"]
export type AddUnitGet = DeepPartial<ReqType["main"]["unit"]["addUnit"]["get"]>

export const addUnit = async (units: Signal<DeepPartial<unitSchema>[]>, set: AddUnitSet, get: AddUnitGet) => {
  const addNewUnit = await bargApi.send({
    model: "unit",
    act: "addUnit",
    details: {
      set,
      get,
    },
  })
  if (addNewUnit.success)
    units.value = [addNewUnit, ...units.value];
  return addNewUnit
}
