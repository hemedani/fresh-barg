import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { City } from "./mod.ts";

export type GetCitySet = ReqType["main"]["city"]["getCity"]["set"]
export type GetCityGet = DeepPartial<ReqType["main"]["city"]["getCity"]["get"]>

export const getCity = async (cities: Signal<City[]>, set: GetCitySet, get: GetCityGet) => {
  const getCity = await bargApi.send({
    model: "city",
    act: "getCity",
    details: {
      set,
      get,
    },
  })
  if (getCity.success)
    cities.value = [getCity, ...cities.value];
  return getCity
}
