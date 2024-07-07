import { DeepPartial, ReqType, citySchema } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";

export type UpdateCitySet = ReqType["main"]["city"]["updateCity"]["set"]
export type UpdateCityGet = DeepPartial<ReqType["main"]["city"]["updateCity"]["get"]>

export const updateCity = async (cities: Signal<DeepPartial<citySchema>[]>, set: UpdateCitySet, get: UpdateCityGet) => {
  const updateCity = await bargApi.send({
    model: "city",
    act: "updateCity",
    details: {
      set,
      get,
    },
  })
  if (updateCity.success) {
    const updateCityIdx = cities.value.findIndex((city) => city._id === updateCity._id)
    cities.value = [...cities.value.splice(0, updateCityIdx), updateCity, ...cities.value.splice(updateCityIdx + 1)]
  }

  return updateCity
}
