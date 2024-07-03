import { addProvince, AddProvinceGet, AddProvinceSet } from "./addProvince.ts";
import { signal } from "@preact/signals";
import {
  DeepPartial,
  provinceSchema,
} from "../../../../back/declarations/selectInp.ts";
import {
  getProvinces,
  GetProvincesGet,
  GetProvincesSet,
} from "./getProvinces.ts";

export type Province = DeepPartial<provinceSchema>;

export const province = signal<Province>({});
export const provinces = signal<Province[]>([]);

export const createProvinceState = () => {
  return {
    province,
    provinces,
    getProvinces: (
      set: GetProvincesSet,
      get: GetProvincesGet,
      token: string,
    ) => getProvinces(provinces, set, get, token),
    addProvince: async (
      set: AddProvinceSet,
      get: AddProvinceGet,
      token: string,
    ) => await addProvince(provinces, set, get, token),
  };
};
