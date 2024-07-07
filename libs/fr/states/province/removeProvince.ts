import { DeepPartial, ReqType, provinceSchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type RemoveProvinceSet = ReqType["main"]["province"]["removeProvince"]["set"]
export type RemoveProvinceGet = DeepPartial<ReqType["main"]["province"]["removeProvince"]["get"]>

export const removeProvince = async (provinces: Signal<DeepPartial<provinceSchema>[]>, set: RemoveProvinceSet, get: RemoveProvinceGet) => {
  const removeProv = await bargApi.send({
    model: "province",
    act: "removeProvince",
    details: {
      set,
      get
    },
  })
  if (removeProv.success)
    provinces.value = provinces.value.filter((province => province._id !== removeProv._id));

  return removeProv
}
