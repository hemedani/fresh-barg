import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { Position } from "./mod.ts";

export type GetPositionSet = ReqType["main"]["position"]["getPosition"]["set"]
export type GetPositionGet = DeepPartial<ReqType["main"]["position"]["getPosition"]["get"]>

export const getPosition = async (positions: Signal<Position[]>, set: GetPositionSet, get: GetPositionGet) => {
  const getSinglePosition = await bargApi.send({
    model: "position",
    act: "getPosition",
    details: {
      set,
      get,
    },
  })
  if (getSinglePosition.success)
    positions.value = getSinglePosition;
  return getSinglePosition
}
