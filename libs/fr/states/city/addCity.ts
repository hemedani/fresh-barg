import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { City } from "./mod.ts";

export type AddCitySet = ReqType["main"]["city"]["addCity"]["set"]
export type AddCityGet = DeepPartial<ReqType["main"]["city"]["addCity"]["get"]>

export const addCity = async (cities: Signal<City[]>, set: AddCitySet, get: AddCityGet) => {
  const addCity = await bargApi.send({
    model: "city",
    act: "addCity",
    details: {
      set,
      get,
    },
  })
  if (addCity.success)
    cities.value = [addCity, ...cities.value];
  return addCity
}
