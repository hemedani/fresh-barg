import { DeepPartial, ReqType, provinceSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdateProvinceSet = ReqType["main"]["province"]["updateProvince"]["set"]
export type UpdateProvinceGet = DeepPartial<ReqType["main"]["province"]["updateProvince"]["get"]>

export const updateProvince = async (provinces: Signal<DeepPartial<provinceSchema>[]>, set: UpdateProvinceSet, get: UpdateProvinceGet) => {
  const updateProve = await bargApi.send({
    model: "province",
    act: "updateProvince",
    details: {
      set,
      get,
    },
  })
  const updaProIdx = provinces.value.findIndex((pr) => pr._id === updateProve._id)
  provinces.value = [...provinces.value.splice(0, updaProIdx), updateProve, ...provinces.value.splice(updaProIdx + 1)]
  return updateProve
}
