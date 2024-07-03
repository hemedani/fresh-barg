import {
  DeepPartial,
  provinceSchema,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetProvincesSet = DeepPartial<
  ReqType["main"]["province"]["getProvinces"]["set"]
>;
export type GetProvincesGet = DeepPartial<
  ReqType["main"]["province"]["getProvinces"]["get"]
>;

export const getProvinces = async (
  provinces: Signal<DeepPartial<provinceSchema>[]>,
  set: GetProvincesSet,
  get: GetProvincesGet,
  token: string,
) => {
  const gettedProvinces = await bargApi.send({
    model: "province",
    act: "getProvinces",
    details: {
      set,
      get,
    },
  }, { token });
  provinces.value = [...gettedProvinces.body, ...provinces.value];
  return gettedProvinces.body;
};
