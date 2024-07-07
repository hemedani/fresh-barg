import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Position } from "./mod.ts";

export type GetPositionsSet = ReqType["main"]["position"]["getPositions"]["set"]
export type GetPositionsGet = DeepPartial<ReqType["main"]["position"]["getPositions"]["get"]>

export const getPositions = async (positions: Signal<Position[]>, set: GetPositionsSet, get: GetPositionsGet) => {
  const getAllPositions = await bargApi.send({
    model: "position",
    act: "getPosition",
    details: {
      set,
      get,
    },
  })
  if (getAllPositions.success)
    positions.value = getAllPositions
  return getAllPositions
}
