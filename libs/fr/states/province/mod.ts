import { addProvince, AddProvinceGet, AddProvinceSet } from './addProvince.ts';
import { signal } from "@preact/signals";
import {
  DeepPartial,
  provinceSchema,
} from "../../../../back/declarations/selectInp.ts";

export type Province = DeepPartial<provinceSchema>;

export const province = signal<Province>({});
export const provinces = signal<Province[]>([]);

export const createProvinceState = () => {
  return {
    province,
    provinces,
    addProvince: async (set: AddProvinceSet, get: AddProvinceGet) => await addProvince(provinces, set, get),
  };
};
