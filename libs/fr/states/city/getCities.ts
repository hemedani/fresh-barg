import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { City } from "./mod.ts";

export type GetCitiesSet = ReqType["main"]["city"]["getCities"]["set"]
export type GetCitiesGet = DeepPartial<ReqType["main"]["city"]["getCities"]["get"]>

export const getCities = async (cities: Signal<City[]>, set: GetCitiesSet, get: GetCitiesGet) => {
  const getAllCities = await bargApi.send({
    model: "city",
    act: "getCities",
    details: {
      set,
      get,
    },
  })
  if (getAllCities.success)
    cities.value = getAllCities
  return getAllCities
}
