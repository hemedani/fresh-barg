import { signal } from '@preact/signals';
import { DeepPartial, citySchema } from "../../../../back/declarations/selectInp.ts";
import { AddCityGet, AddCitySet, addCity } from "./addCity.ts";
import { UpdateCitySet, UpdateCityGet, updateCity } from "./updateCity.ts";
import { GetCityGet, GetCitySet, getCity } from "./getCity.ts";
import { RemoveCityGet, RemoveCitySet, removeCity } from "./removeCity.ts";
import { GetCitiesGet, GetCitiesSet, getCities } from "./getCities.ts";



export type City = DeepPartial<citySchema>;
export const city = signal({});
export const cities = signal<City[]>([])

export const createCityState = () => {
  return {
    city,
    cities,
    getCities: async (set: GetCitiesSet, get: GetCitiesGet) => await getCities(cities, set, get),
    getCity: async (set: GetCitySet, get: GetCityGet) => await getCity(cities, set, get),
    addCity: async (set: AddCitySet, get: AddCityGet) => await addCity(cities, set, get),
    updateCity: async (set: UpdateCitySet, get: UpdateCityGet) => await updateCity(cities, set, get),
    removeCity: async (set: RemoveCitySet, get: RemoveCityGet) => await removeCity(cities, set, get)

  }
}