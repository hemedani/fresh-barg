import { addProvince, AddProvinceGet, AddProvinceSet } from "./addProvince.ts";
import { signal } from "@preact/signals";
import { provinceSchema } from "../../../../back/declarations/selectInp.ts";
import {
  getProvinces,
  GetProvincesGet,
  GetProvincesSet,
} from "./getProvinces.ts";
import { BargStates } from "../../mod.ts";

export const province = signal<BargStates<provinceSchema>>({
  data: {},
  loader: false,
  err: null,
});

export const provinces = signal<BargStates<provinceSchema[]>>({
  data: [],
  loader: false,
  err: null,
});

export const createProvinceState = () => {
  return {
    province,
    provinces,
    getProvinces: async (
      set: GetProvincesSet,
      get: GetProvincesGet,
      token: string,
      added?: boolean,
    ) => await getProvinces(provinces, set, get, token, added),
    addProvince: async (
      set: AddProvinceSet,
      get: AddProvinceGet,
      token: string,
    ) => await addProvince(provinces, set, get, token),
  };
};
