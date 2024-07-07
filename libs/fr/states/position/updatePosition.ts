import { DeepPartial, ReqType, positionSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdatePositionSet = ReqType["main"]["position"]["updatePosition"]["set"]
export type UpdatePositionGet = DeepPartial<ReqType["main"]["position"]["updatePosition"]["get"]>

export const updatePosition = async (positions: Signal<DeepPartial<positionSchema>[]>, set: UpdatePositionSet, get: UpdatePositionGet) => {
  const updatePos = await bargApi.send({
    model: "position",
    act: "updatePosition",
    details: {
      set,
      get,
    },
  })
  if (updatePos.success) {
    const updatePosIdx = positions.value.findIndex((position) => position._id === updatePos._id)
    positions.value = [...positions.value.splice(0, updatePosIdx), updatePos, ...positions.value.splice(updatePosIdx + 1)]
  }

  return updatePos
}
