import { signal } from "@preact/signals";
import {
  citySchema,
  DeepPartial,
} from "../../../../back/declarations/selectInp.ts";
import { addCity, AddCityGet, AddCitySet } from "./addCity.ts";
import { updateCity, UpdateCityGet, UpdateCitySet } from "./updateCity.ts";
import { getCity, GetCityGet, GetCitySet } from "./getCity.ts";
import { removeCity, RemoveCityGet, RemoveCitySet } from "./removeCity.ts";
import { getCities, GetCitiesGet, GetCitiesSet } from "./getCities.ts";
import { BargStates } from "../../mod.ts";

export type City = DeepPartial<citySchema>;
export const city = signal<BargStates<City>>({
  data: {},
  loader: false,
  err: null,
});

export const cities = signal<BargStates<City[]>>({
  data: [],
  loader: false,
  err: null,
});

export const createCityState = () => {
  return {
    city,
    cities,
    getCities: async (
      set: GetCitiesSet,
      get: GetCitiesGet,
      token: string,
      added?: boolean,
    ) => await getCities(cities, set, get, token, added),
    getCity: async (set: GetCitySet, get: GetCityGet, token: string) =>
      await getCity(city, set, get, token),
    addCity: async (set: AddCitySet, get: AddCityGet, token: string) =>
      await addCity(cities, set, get, token),
    updateCity: async (set: UpdateCitySet, get: UpdateCityGet, token: string) =>
      await updateCity(cities, set, get, token),
    removeCity: async (set: RemoveCitySet, get: RemoveCityGet, token: string) =>
      await removeCity(cities, set, get, token),
  };
};
