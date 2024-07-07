import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Position } from "./mod.ts";

export type AddPositionSet = ReqType["main"]["position"]["addPosition"]["set"]
export type AddPositionGet = DeepPartial<ReqType["main"]["position"]["addPosition"]["get"]>

export const addPosition = async (positions: Signal<Position[]>, set: AddPositionSet, get: AddPositionGet) => {
  const addPos = await bargApi.send({
    model: "position",
    act: "addPosition",
    details: {
      set,
      get,
    },
  })
  if (addPos.success)
    positions.value = [addPos, ...positions.value];
  return addPos
}
