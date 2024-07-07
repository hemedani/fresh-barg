import { signal } from '@preact/signals';
import { DeepPartial, unitSchema } from "../../../../back/declarations/selectInp.ts";
import { AddUnitGet, addUnit } from "./addUnit.ts";
import { AddUnitSet } from "./addUnit.ts";
import { UpdateUnitGet, updateUnit } from "./updateUnit.ts";
import { UpdateUnitSet } from "./updateUnit.ts";
import { GetUnitGet, GetUnitSet, getUnit } from "./getUnit.ts";
import { GetUnitsSet, getUnits } from "./getUnits.ts";
import { RemoveUnitGet, RemoveUnitSet, removeUnit } from "./removeCity.ts";



export type Units = DeepPartial<unitSchema>;
export const unit = signal<Units>({});
export const units = signal<Units[]>([]);
export const createUnitState = () => {
  return {
    unit,
    units,
    addUnit: async (set: AddUnitSet, get: AddUnitGet) => {
      await addUnit(units, set, get)
    },
    updateUnit: async (set: UpdateUnitSet, get: UpdateUnitGet) => {
      await updateUnit(units, set, get)
    },
    getUnit: async (set: GetUnitSet, get: GetUnitGet) => {
      await getUnit(units, set, get)
    },
    getUnits: async (set: GetUnitsSet, get: GetUnitGet) => {
      await getUnits(units, set, get)
    },
    removeUnit: async (set: RemoveUnitSet, get: RemoveUnitGet) => {
      await removeUnit(units, set, get)
    }
  }
}