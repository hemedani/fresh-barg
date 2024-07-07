import { DeepPartial, ReqType } from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { Signal } from "@preact/signals";
import { City } from "./mod.ts";

export type RemoveCitySet = ReqType["main"]["city"]["removeCity"]["set"]
export type RemoveCityGet = DeepPartial<ReqType["main"]["city"]["removeCity"]["get"]>

export const removeCity = async (cities: Signal<City[]>, set: RemoveCitySet, get: RemoveCityGet) => {
  const removeCity = await bargApi.send({
    model: "city",
    act: "removeCity",
    details: {
      set,
      get,
    },
  })
  if (removeCity.success)
    cities.value = cities.value.filter(city => city._id !== removeCity._id);
  return removeCity
}
