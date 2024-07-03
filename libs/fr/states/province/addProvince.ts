import {
  DeepPartial,
  provinceSchema,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddProvinceSet = ReqType["main"]["province"]["addProvince"]["set"];
export type AddProvinceGet = DeepPartial<
  ReqType["main"]["province"]["addProvince"]["get"]
>;

export const addProvince = async (
  provinces: Signal<DeepPartial<provinceSchema>[]>,
  set: AddProvinceSet,
  get: AddProvinceGet,
  token: string,
) => {
  const addProv = await bargApi.send({
    model: "province",
    act: "addProvince",
    details: {
      set,
      get,
    },
  }, { token });

  if (addProv.success) {
    provinces.value = [addProv.body, ...provinces.value];
  }
  return addProv;
};
