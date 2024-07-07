import { signal } from '@preact/signals';
import { DeepPartial, positionSchema } from "../../../../back/declarations/selectInp.ts";
import { AddPositionGet, AddPositionSet, addPosition } from "./addPosition.ts";
import { UpdatePositionGet, UpdatePositionSet, updatePosition } from "./updatePosition.ts";
import { GetPositionGet, GetPositionSet, getPosition } from "./getPosition.ts";
import { getPositions } from "./getPositions.ts";




export type Position = DeepPartial<positionSchema>;
export const position = signal<Position>({});
export const positions = signal<Position[]>([]);


export const createPositionState = () => {
  return {
    position,
    positions,
    addPosition: async (set: AddPositionSet, get: AddPositionGet) => await addPosition(positions, set, get),
    updatePosition: async (set: UpdatePositionSet, get: UpdatePositionGet) => await updatePosition(positions, set, get),
    getPosition: async (set: GetPositionSet, get: GetPositionGet) => await getPosition(positions, set, get),
    getPositions: async (set: GetPositionsSet, get: GetPositionsGet) => await getPositions(positions, set, get),
  }
}