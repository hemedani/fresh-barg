import { addProvinceSetup } from "./addProvince/mod.ts";
import { getProvinceSetup } from "./getProvince/mod.ts";
import { getProvincesSetup } from "./getProvinces/mod.ts";
import { updateProvinceSetup } from "./updateProvince/mod.ts";
import { removeProvinceSetup } from "./removeProvince/mod.ts";
import { countProvincesSetup } from "./countProvinces/mod.ts";

export const provinceSetup = () => {
	addProvinceSetup();
	updateProvinceSetup();
	getProvinceSetup();
	getProvincesSetup();
	removeProvinceSetup();
	countProvincesSetup();
};

export * from "./addProvince/mod.ts";
export * from "./getProvince/mod.ts";
export * from "./updateProvince/mod.ts";
export * from "./removeProvince/mod.ts";
export * from "./countProvinces/mod.ts";
