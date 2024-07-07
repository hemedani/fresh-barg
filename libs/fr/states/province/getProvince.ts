import { DeepPartial, ReqType, provinceSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type GetProvinceSet = ReqType["main"]["province"]["getProvince"]["set"]
export type GetProvinceGet = DeepPartial<ReqType["main"]["province"]["getProvince"]["get"]>

export const getProvince = async (provinces: Signal<DeepPartial<provinceSchema>[]>, set: GetProvinceSet, get: GetProvinceGet) => {
  const getProv = await bargApi.send({
    model: "province",
    act: "getProvince",
    details: {
      set,
      get,
    },
  })
  if (getProv.success)
    provinces.value = getProv;
  return getProv
}
