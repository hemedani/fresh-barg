import { addCitySetup } from "./addCity/mod.ts";
import { getCitiesSetup } from "./getCities/mod.ts";
import { getCitySetup } from "./getCity/mod.ts";
import { updateCitySetup } from "./updateCity/mod.ts";
import { removeCitySetup } from "./removeCity/mod.ts";

export const citySetup = () => {
	addCitySetup();
	updateCitySetup();
	getCitySetup();
	getCitiesSetup();
	removeCitySetup();
};

export * from "./addCity/mod.ts";
export * from "./getCity/mod.ts";
export * from "./updateCity/mod.ts";
export * from "./removeCity/mod.ts";
