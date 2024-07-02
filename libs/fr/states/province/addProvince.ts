import { DeepPartial, ReqType, provinceSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type AddProvinceSet = ReqType["main"]["province"]["addProvince"]["set"]
export type AddProvinceGet = DeepPartial<ReqType["main"]["province"]["addProvince"]["get"]>

export const addProvince = async (provinces: Signal<DeepPartial<provinceSchema>[]>, set: AddProvinceSet, get: AddProvinceGet) => {
  const addProv = await bargApi.send({
    model: "province",
    act: "addProvince",
    details: {
      set,
      get,
    },
  })
  provinces.value = [addProv, ...provinces.value];
  return addProv
}
